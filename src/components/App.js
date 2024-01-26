import React from "react";
import Imagesearch from "./Imagesearch";
import Gallary from "./Gallary";

const App=()=>{
    return (
        <div>
            <h1>Hi This is ImageBazar</h1>
            <Imagesearch/>
            <Gallary/>
        </div>
    )
}


export default App;



// BASE URL : https://api.unsplash.com/
//HEADER :Accept-Version: v1
//        Authorization: Client-ID 


//  QUERY :/search/photos
