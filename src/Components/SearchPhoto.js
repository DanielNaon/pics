import React, {Component} from 'react';


class SearchPhoto extends Component{
    constructor(){
        super()
        this.state={
            input: ''
        }
    }
    inputValue=(event)=>{
        let newInputValue = event.target.value
        this.setState({input: newInputValue}, function(){
           
        })
    }
    searchPhoto=()=>{
        this.props.searchPhoto(this.state.input)
        
    }
  render(){
    return(
      <div>
          <div className="description2">Please type the photo you are searching:</div>
          <input className="input" type="text" value={this.state.input} onChange={this.inputValue}></input>
          <button className="search" onClick={this.searchPhoto}>Search!</button>
      </div>
    )
  }
}

export default SearchPhoto;
