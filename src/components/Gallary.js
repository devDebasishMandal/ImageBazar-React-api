import React from "react";



const Gallary =({imageList})=>{



    return (
      <div>
        <div className="gallery">
          {imageList.map((img) => (
            <img key={img.id} src={img.urls.small_s3} alt={img.alt_description} />
          ))}
        </div>
      </div>
    );
}


export default Gallary;