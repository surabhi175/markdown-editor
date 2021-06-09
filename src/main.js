import React, {Component} from "react";
import {sampleText} from "./components/sampleText";
import './main.css';
import marked from "marked";
import Button from '@material-ui/core/Button';
import BrushOutlined from '@material-ui/icons/BrushOutlined';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import fire from "./config/fire";


class Main extends Component {
  constructor(){
    super()
    this.state={
      text: sampleText,
      open: false,
      bgColor:""
    }
    this.handleClick = this.handleClick.bind(this);
    this.bgColorThistle = this.bgColorThistle.bind(this);
    this.bgColorLemonade = this.bgColorLemonade.bind(this);
    this.bgColorBlue = this.bgColorBlue.bind(this);
    this.bgColorGray = this.bgColorGray.bind(this);
  }

  bgColorThistle(){
    this.setState(bgColor => {
      return{
        bgColor: "#d7bfdc"
      }
    })
  }

  bgColorGray(){
    this.setState(bgColor => {
      return{
        bgColor: "#d9dddc"
      }
    })
  }

  bgColorLemonade(){
    this.setState(bgColor => {
      return{
        bgColor: "#fdb9c8"
      }
    })
  }

  bgColorBlue(){
    this.setState(bgColor => {
      return{
        bgColor: "#b9d9eb"
      }
    })
  }

  handleClick(){
    this.setState(state =>{
      return{
        open: !state.open,
      };
    });
  };

  handleChange = event => {
    const text= event.target.value
    this.setState({text})
  }

  //this function returns the html corresponding to the mdtext written
  renderText  = text => {
    const __html = marked(text, {sanitize: true})
    return {__html}
  }

  componentDidUpdate(){
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  componentDidMount() {
    const text = localStorage.getItem('text')
    if (text){
      this.setState({text})
    }
    else{
      this.setState({sampleText})
    }
  }

  logout(){
    fire.auth().signOut();
  }

  render(){
    return (
      <div className="Wrapper" style={{backgroundColor: this.state.bgColor}}>
        <div className="header">
          <h2>MARKDOWN EDITOR</h2>
          <Button 
          onClick={this.handleClick}
          startIcon={<BrushOutlined />}
          style={{textAlign: "top", height: "fit-content", alignSelf:"center"}}
          >
          Themes
          </Button>
            {this.state.open ? (<div className="dropdown">
            <ul>
              <li onClick={this.bgColorThistle}>Thistle</li>
              <li onClick={this.bgColorLemonade}>Lemonade</li>
              <li onClick={this.bgColorBlue}>Columbia Blue</li>
              <li onClick={this.bgColorGray}>Pearl Gray</li>
            </ul>
          </div>) : null}
          <Button onClick={this.logout} startIcon={<AccountCircleOutlined />}
          style={{textAlign: "top", height: "fit-content", alignSelf:"center"}}
          >
            Logout
          </Button>
          </div>
        <div className="Container">
          <div className="Container1" style={{backgroundColor: "white"}}>
            <header style={{padding: "5px", fontSize:"1.4em", textShadow:"1px 1px 2px darkgrey", textAlign:"center", fontFamily: "serif"}}><i>Editor</i></header>
            <textarea 
            style={{border:"1px double grey"}} 
            className="txtarea" 
            cols= '87' 
            rows='80'
            onChange={this.handleChange}
            value={this.state.text}
              />
            {this.text}
          </div>   
          <div className="Container2">
          <header style={{padding: "5px", fontSize:"1.4em", textShadow:"1px 1px 2px darkgrey", textAlign:"center", fontFamily: "serif"}}><i>Preview</i></header>
          <div style={{padding: "20px"}} dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>  
        </div>
      </div>
  );
 }
}

export default Main;
