import React from 'react';
import ReactDOM from 'react-dom';
import Gallery  from './galleryPrasentation';

class GalleryController extends React.Component{
    constructor(props){
        super(props);
        this.state = {file : '',  imagePreviewUrl: '' , data:'', pictures:localStorage.getItem("pictures")};
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleImageSubmit = this.handleImageSubmit.bind(this);
        console.log(this.state.pictures);
    }
   
    handleImageSubmit(e){
        
        e.preventDefault();
        const store = [...this.state.data];
        store.push({
            file:this.state.imagePreviewUrl
        });
        console.log(store,"store");
        this.setState({
            data:store,
            toggleLoginRester: false,
            toggleGallery: true,
            toggleLogin:false          
        });
        console.log(this.state.data,"data");
        
    }
    componentDidUpdate(){
        console.log(this.state.data,"update");
        localStorage.setItem("pictures",JSON.stringify(this.state.data));
        console.log(localStorage.getItem("pictures"));
    }

    handleImageChange(e) {
    e.preventDefault();

    
    let file = e.target.files;
    let keys = Object.keys(file);
    
    let display = keys.map((key) => 
        {   
            let reader = new FileReader();
            reader.onloadend = () => {
            this.setState({
                file:file[key],
                imagePreviewUrl: reader.result
            });
            }

            reader.readAsDataURL(file[key])}
    );

    
  }

    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) 
            $imagePreview = (<img src={imagePreviewUrl} />);
    
        return< Gallery handle_image={this.handleImageChange} handle_submit={this.handleImageSubmit} result ={this.state.data}/>
    }
}

export default GalleryController;