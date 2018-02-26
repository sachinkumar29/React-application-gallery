import React from 'react';
import './gallery.css';

function Gallery({handle_image,handle_submit,result}){
    //result = JSON.parse(result);
    let display;
   if(result !== ""){

        display = result.map((item) =>{
        return <img src={item.file} />
    })}
        return(
            <div className="gallery_container">
            <h1 className="galleryH1">welcome to gallery</h1>
             <form onSubmit={handle_submit}>
                <input multiple accept="image/*" type="file" name="image" onChange={handle_image}/>
                <button type="submit" >Upload image</button>
             </form>
            <div className="viewDiv">{display}</div>
            </div>
        );
}
export default Gallery;

if(module.hot){
    module.hot.accept();
}