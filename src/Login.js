import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import "./Login.css";
import fire from "./config/fire";

class Login extends Component{
    constructor(props){
        super(props)
        this.login= this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
          
        this.state={
            email: "",
            password: ""
        }
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <div className="reg">
                    <form>
                    <h1 style={{textAlign: "center"}}>Sign In</h1>
                        <input
                        name="email" 
                        type="email"
                        id="email"
                        placeholder="Enter email address"
                        onChange={this.handleChange}
                        value={this.state.email}
                        />
                        <br /><br />
                        <input 
                        name="password"
                        type="password"
                        id="password"
                        onChange={this.handleChange}
                        placeholder="Enter password"
                        value={this.state.password}
                        />
                        <br/><br/>
                        <Button onClick={this.login}>Login</Button>
                        <Button onClick={this.signup}>Signup</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
