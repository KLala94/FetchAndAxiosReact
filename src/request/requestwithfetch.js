import  React, { Component } from 'react';

class RequestFetchComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [{
          "roomName":"klodian",
          "stars": 1,
          "img":"./director.jpeg",
          "price":90,
          "persons": 4,
          "roomsNumber":"four rooms",
          "view":"on fifth floor",
          "lights":"dark of the room",
          "moreImg":"img.jpeg"
        }]
    }
  }
   componentDidMount(){
      fetch("./rooms.json", // this works fine on the console but does not output the names
        { headers: {'Content-Type': 'application/json'}}
      ).then((response)=>{
          console.log(response);
        this.setState({
          names: response
        })
  }).catch((error)=> console.log("the name error is: " + error))
  }
render() {
    return(
        <div>Names:<p>{ this.state.names.roomName }{console.log(this.state.names.roomName)}</p></div>
    )
}
}
export default RequestFetchComp; 