import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import "./App.css"

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: ""
        }
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <input 
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    />
                    <Button onClick={this.login}>Login</Button>
                    <Button onClick={this.signup}>Signup</Button>
                </form>
            </div>
        )
    }
}

export default Login;
