import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getJwt} from "../helpers/jwt";
import axios from 'axios';

// import UserProfile from "./Userprofile";

class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            message: ''
        };

    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        const jwt = getJwt();
        if (!jwt) {
            this.setState({
                user: null
            });
            return;
        } else {
            this.setState({user: true})
        }
        this.authenticateUser()


    }

    async authenticateUser() {
        const response = await axios.get('/hello/', {headers: {Authorization: getJwt()}});

        this.setState({
            message: response.data.message
        });

    }


    render() {
        const {user} = this.state;
        if (user === undefined) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        if (user === null) {
            this.props.history.push('/login');
        }


        var childrenWithProps = React.cloneElement(this.props.children, {message: this.state.message});
        debugger;
        return (
            <div>
                {childrenWithProps}
            </div>
        );
        // <UserProfile message={this.state.user}/>

        // return this.props.children;


    }
}

export default withRouter(AuthComponent);