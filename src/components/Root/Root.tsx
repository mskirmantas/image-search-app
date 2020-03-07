import React from "react";
import axios from "axios";
import { TopBar } from "../TopBar";
import { ImageList } from "../ImageList";

export interface IData {
  id: string;
  description: string;
  url_regular: string;
  url_full: string;
  author: string;
  author_image: string;
}

export const Root: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState<IData[]>([]);
  const [message, setMeassage] = React.useState<string>("");
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
        if (response.data.total !== 0) {
          let fetchedData = response.data.results;
          let data = fetchedData.map((item: any) => {
            return {
              id: item.id,
              description: item.alt_description,
              url_regular: item.urls.regular,
              url_full: item.urls.regular,
              author: item.user.name,
              author_image: item.user.profile_image.small
            };
          });
          setSearchResult(data);
        } else {
          setSearchResult([]);
          setMeassage("Sorry! That does not look right...");
        }
      });
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
      <ImageList images={searchResult} message={message} />
    </div>
  );
};
