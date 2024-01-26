import React, { useState } from "react";
import axios from "axios";

const Imagesearch = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    console.log(search);

    axios
      .get("https://api.unsplash.com//search/photos/", {
        headers: {
          "Accept-Version": "v1",
          Authorization :
            "Client-ID I0Pl1CUjwBOTm9U_gg6OPcLNgL58yhQMsaUeIvqSGME",
        },
        params: {
            query: search  
        }
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Imagesearch;
