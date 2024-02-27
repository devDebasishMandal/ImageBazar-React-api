import React,{useState} from "react";
import Imagesearch from "./Imagesearch";
import Gallary from "./Gallary";
import '../app.css';
const App=()=>{
    const[imageList,setImageList]=useState([])

    return (
      <div>
        <Imagesearch setImageList={setImageList} />
        <Gallary imageList={imageList} />
      </div>
    );
}


export default App;



// BASE URL : https://api.unsplash.com/
// https://api.unsplash.com/

//HEADER :
// Accept-Version: v1
// Authorization: Client-ID 

 
//  QUERY :/search/photos

// the URL 
// https://api.unsplash.com/search/photos?query=dog 