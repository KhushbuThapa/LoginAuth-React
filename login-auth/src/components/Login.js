import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    change = (event) => {
        this.setState(
          {
              [event.target.name]: event.target.value,
          }
        )
    };

    submit = (event) => {
        event.preventDefault();
        axios.post('api/token/', {
            username: this.state.username,
            password: this.state.password
        })
          .then(response => {
              localStorage.setItem('jwt_token', response.data.access);
              this.props.history.push('/userprofile');

          })
          .catch(error => {
            console.log('Invalid Email or Password');
            console.log(error);
          })
    };

    render() {
        return (
          <div>
              <form onSubmit={event => this.submit(event)}>
                  <h3>Log In</h3>
                  <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" name="username" placeholder="username"
                             onChange={event => this.change(event)}/>
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password" placeholder="password"
                             onChange={event => this.change(event)}/>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">Submit</button>

              </form>
          </div>
        );
    }
}

export default Login