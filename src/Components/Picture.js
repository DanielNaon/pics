import React, {Component} from 'react';
import {observer, inject} from 'mobx-react'


@inject("picstore")
@observer

class Picture extends Component{
  constructor(){
    super()
    this.state={
      favePics: false
    }
  }
  faveuritePic=()=>{
    let pic = this.props.pic
    this.props.picstore.addPictureToFaves(pic.picture, pic.picId, pic.picDescription)
    this.setState({favePics: true}, function(){
      console.log(this.state.favePics)
    })
  }
  changeDescription=()=>{
    let pic = this.props.pic
    let newDescription = prompt("change discription ?", "")
    this.props.picstore.changeDescription(pic.picId, newDescription)
  }
  render(){
    let pic = this.props.pic
    let store = this.props.picstore.faveuritrsPictures

    return(
      <div className="pictureComponent">
        <div className="regularpicContainer">
            <img className="picture" src={pic.picture}/>
            <div className="description">Description of the picture: {pic.picDescription}</div>
        </div><br></br>
        <button className="button" onClick={this.faveuritePic}>add to fave!</button>
        <button className="button" onClick={this.changeDescription}>change description</button>
      </div>
    )
  }
}

export default Picture;
