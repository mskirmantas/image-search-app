import React from "react";
import axios from "axios";
import { TopBar } from "../TopBar";
import { ImageList } from "../ImageList";

export interface IData {
  id: string;
  description: string;
  url_small: string;
  url_full: string;
  author: string;
}

export const Root: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState<IData[]>([]);
  const clientID = "Hznr5ZnTpDgQwBouywuGGbYcIWgCJMyvYJT8V1goXwQ";

  const handleUpdateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.substring(0, 50));
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  const handleSubmit = () => {
    if (search !== "") {
      const url =
        "https://api.unsplash.com/search/photos?query=" +
        search +
        "&client_id=" +
        clientID;

      axios.get(url).then(response => {
        let fetchedData = response.data.results;
        let data = fetchedData.map((item: any) => {
          return {
            id: item.id,
            description: item.alt_description,
            url_small: item.urls.small,
            url_full: item.urls.full,
            author: item.user.name
          };
        });
        setSearchResult(data);
      });
    } else {
      return null;
    }
  };

  return (
    <div className="Root">
      <TopBar
        input={search}
        onChange={handleUpdateSearch}
        onClearSearch={handleClearSearch}
        onSubmit={handleSubmit}
      />
      <ImageList images={searchResult} />
    </div>
  );
};
