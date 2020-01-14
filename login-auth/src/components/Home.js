import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        this.removeToken()
    }

    removeToken() {
        localStorage.removeItem('jwt_token');
    }

    render() {
        return (
            <div>Hello</div>
        )
    }

}

export default Home