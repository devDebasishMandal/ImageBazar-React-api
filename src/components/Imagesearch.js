import React, { useState,useEffect } from "react";
import axios from "axios";

const Imagesearch = ({setImageList}) => {
  const [search, setSearch] = useState("");

useEffect(()=>{
handleSearch()
},[])

  function handleSearch(e) {
// when the website load for the first time there is no event occured and
// and e in the form is empty so e.orevent default give error 
if(e){
  e.preventDefault();
}
// OR 
// e && e.preventDefault();

    
    // console.log(search);

    axios
      .get("https://api.unsplash.com//search/photos/", {
        headers: {
          "Accept-Version": "v1",
          Authorization:`Client-ID ${process.env.REACT_APP_UNSPLASH_ACESS_KEY}`,
        },
        params: {
          query: search || "random", // if search query is emptyuse random
        },
      })
      .then((response) => {
        // console.log(response.data.results);
        setImageList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
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
