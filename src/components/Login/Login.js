import React, {Component} from "react";
import jwt_decode from "jwt-decode";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class Login extends Component{
    constructor() {
        super();
        this.state = {
            user: null
        }
        this.handleCallbackResponse = this.handleCallbackResponse.bind(this);
    }
    componentDidMount() {
        /* global google */
        google.accounts.id.initialize({
            client_id: clientId,
            callback: this.handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById('login_button'),
            {theme: 'inline', size: 'small'}
        )
    }
    handleCallbackResponse(response) {
        this.setState({
            user: jwt_decode(response.credential),
        })
    }
    render() {
        const {user} = this.state;
        return (
            <div>
                {user ? <div>{user.name}</div> : <div id='login_button'/>}
            </div>
        )

    }

}

export default Login;
