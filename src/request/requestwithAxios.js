import  React, { Component } from 'react';
import axios from 'axios';

class RequestComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users: []
    }
  }
   async componentWillMount(){
     await axios                   // this returns an error message from the catch
    .get('./namings.json')
    .then((res)=> JSON.parse(res))
    .then(({ data })=> {
      console.log(data);
      this.setState(
        { users: data.data }
      );
    })
    .catch((err)=> console.log('the axios error is: ' + err))
}
render() {
    return (
        <div>
            Users: <p>{this.state.users.TheName}</p>
        </div>
    )
}
}
export default RequestComp;