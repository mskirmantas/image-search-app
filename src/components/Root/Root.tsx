import React from "react";
import axios from "axios";
import { TopBar } from "../TopBar";

export const Root: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [result, setResult] = React.useState<any>([]);
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
        setResult(response.data.results);
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
    </div>
  );
};
