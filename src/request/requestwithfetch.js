import  React, { Component } from 'react';

class RequestFetchComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [{}]
    }
  }
  componentWillMount(){
      fetch("./namings.json", // this works fine on the console but does not output the names
        { headers: {'Content-Type': 'application/json'}}
      ).then((response)=>{
          console.log("the fetch response of request: " + response);
        this.setState({
          names: response
        })
  }).catch((error)=> console.log("the name error is: " + error))
  }
render() {
    return(
        <div>Names:<p>{ this.state.names.TheName }
        {console.log("the log of names on the render " + this.state.names.TheName)}</p></div>
    )
}
}
export default RequestFetchComp; 