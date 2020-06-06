import React from "react";
import axios from "axios";

import { clientID } from "./client/client";
import { TopBar } from "./components/TopBar/TopBar";
import { Content } from "./components/Content/Content";

import "./App.scss";

export interface IData {
  id: string;
  description: string;
  url_regular: string;
  url_full: string;
  author: string;
  author_image: string;
}

const App: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState<IData[]>([]);
  const [searchHistory, setSearchHistory] = React.useState<string[]>([]);
  const [showHistory, setShowHistory] = React.useState<boolean>(false);
  const [currentQuery, setCurrentQuery] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (localStorage.getItem("history")) {
      getLocalStorage();
    }
  }, []);

  const getLocalStorage = () => {
    const localHistory = localStorage.getItem("history");
    if (localHistory) {
      setSearchHistory(JSON.parse(localHistory));
    }
  };

  React.useEffect(() => {
    localStorage.setItem("history", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleUpdateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.substring(0, 50));
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  const handleSubmit = () => {
    if (search !== "") {
      setLoading(true);
      const url =
        "https://api.unsplash.com/search/photos?per_page=30&query=" +
        search +
        "&client_id=" +
        clientID;

      axios.get(url).then((response) => {
        if (response.data.total !== 0) {
          let fetchedData = response.data.results;
          let data = fetchedData.map((item: any) => {
            return {
              id: item.id,
              description: item.alt_description,
              url_regular: item.urls.regular,
              url_full: item.urls.regular,
              author: item.user.name,
              author_image: item.user.profile_image.small,
            };
          });
          setSearchResult(data);

          searchHistory.includes(search.toLowerCase())
            ? setSearchHistory(searchHistory)
            : setSearchHistory([...searchHistory, search.toLowerCase()]);

          setErrorMessage("");
          setLoading(false);
          setCurrentQuery(search.toLocaleUpperCase());
        } else {
          setSearchResult([]);
          setErrorMessage("Oops! That does not look right...");
          setLoading(false);
        }
      });
    }
  };

  const toggleHistory = () => {
    if (searchHistory.length > 0) {
      setShowHistory(!showHistory);
    }
  };

  const handleSearchAgain = (query: string) => {
    setLoading(true);
    const url =
      "https://api.unsplash.com/search/photos?per_page=30&query=" +
      query +
      "&client_id=" +
      clientID;

    axios.get(url).then((response) => {
      let fetchedData = response.data.results;
      let data = fetchedData.map((item: any) => {
        return {
          id: item.id,
          description: item.alt_description,
          url_regular: item.urls.regular,
          url_full: item.urls.regular,
          author: item.user.name,
          author_image: item.user.profile_image.small,
        };
      });
      setSearch("");
      setSearchResult(data);
      setErrorMessage("");
      setLoading(false);
      setShowHistory(false);
      setCurrentQuery(query.toLocaleUpperCase());
    });
  };

  const handleRemoveFromHistory = (query: string) => {
    setSearchHistory(searchHistory.filter((previous) => previous !== query));
    if (searchHistory.length === 1) {
      setShowHistory(false);
    }
  };

  return (
    <div className="App">
      <TopBar
        input={search}
        onInputChange={handleUpdateSearch}
        onClearSearchClick={handleClearSearch}
        onSubmitClick={handleSubmit}
        onHistoryToggle={toggleHistory}
        showHistory={showHistory}
        isLoading={loading === true}
      />
      <Content
        images={searchResult}
        error={errorMessage}
        showHistory={showHistory}
        searchHistory={searchHistory}
        onHistoryItemClick={handleSearchAgain}
        onRemoveItemClick={handleRemoveFromHistory}
        queryValue={currentQuery}
      />
    </div>
  );
};
export default App;
