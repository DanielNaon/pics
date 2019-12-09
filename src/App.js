import React, {Component} from 'react';
import { observer, inject } from 'mobx-react'
import './App.css';
import axios from 'axios'
import SearchPhoto from './Components/SearchPhoto';
import Picture from './Components/Picture'

@inject("picstore")
@observer
class App extends Component{
  constructor(){
    super()
    this.state = {
      classname: true   
    }
  }
  searchPhoto=async(searchWords)=>{
    let pictureData = await axios.get("https://pixabay.com/api/?key=14523380-031f8673b5e686b36d689adf0&q=" + searchWords + "&image_type=photo")
    let id = 1
    
    
    pictureData.data.hits.forEach(element => {
      
      let picture= element.largeImageURL
      let picId= element.id
      let picDescription= element.tags
      
      this.props.picstore.addPicture(picture, picId, picDescription)

    });
  }
  deletePhotoFromFaveurites=(event)=>{
    console.log(event.target.value)
    this.props.picstore.DeleteFromFaves(event.target.value)
  }
  changeClassName=()=>{
    this.setState({classname: this.state.classname}, function(){
      console.log(this.state.classname)
    })
  }
  render(){

    let store = this.props.picstore

    return(
      <div className="App">

        <div className="headerContainer">
          <div className="header">Flowers Pic Searcher:</div>
          <SearchPhoto searchPhoto={this.searchPhoto}/>
        </div>

        <div className="photoContainer">
          {store.pictures.map(p=> <Picture key={p.picId} pic={p}/>)}
        </div>

        <div className="favouriteContainer"> 
          <div className="description1">You have {store.numberOfFavePictures} favourite pics</div>
          {store.faveuritrsPictures.map(m=><div className="faves"><img onClick={this.changeClassName}className={this.state.classname === true ?"favepics" : "favepicsbig"} src={m.picture}/><br></br>{m.picDescription}<br></br><button className="deleteFromFave" value={m.picId} onClick={this.deletePhotoFromFaveurites}>delete from faveurites</button></div>)}
       </div>
      </div>
    )
  }
}

export default App;