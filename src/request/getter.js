import  React, { Component } from 'react';
import axios from 'axios';

class RequestComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        getter: []
    }
  }
   componentWillMount(){
    
}
render() {
    return (
        <div>
            Getters: <p>{}</p>
        </div>
    )
}
}
export default RequestComp;