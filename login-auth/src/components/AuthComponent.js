import React from 'react';
import {withRouter} from 'react-router-dom';


class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      returnValue: ''
    };
  }

  getJwt = () => {
    return localStorage.getItem('jwt_token');
  };

  CheckAuth() {
    var jwtDecode = require('jwt-decode');
    const tokens = this.getJwt();
    try {
      const decoded = jwtDecode(tokens);

      const timeNow = new Date();
      if (decoded.exp > timeNow.getTime() / 1000) {
        return true;
      } else {
        return false
      }
    } catch (thrownValue) {
      this.setState(
        {
          hasError: true
        })
    }
  }

  componentDidMount() {
    if (!this.CheckAuth() || this.state.hasError) {
      this.setState({returnValue: this.props.history.push('/login')});
    } else {
      this.setState({returnValue: this.props.children});
    }
  }

  render() {
    return (
      <div>{this.state.returnValue}</div>
    )
  }
}


export default withRouter(AuthComponent);