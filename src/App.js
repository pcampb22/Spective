import React, { Component } from 'react';
import logo1 from './img/windmill_image.png';
import './App.css';
import './funct.js'



function Error(props){
    return(
        <div id="error-contain" className="error">
            <i id="icon" className="icon"></i>
            <h1 id="error-outcome" className="error-title">{props.outcome}</h1>
            <p id="errorMess" className="error-content">{props.errorMessage}</p>
            <button id="errorBtn" className="errorBtn">Confirm</button>
        </div>
    );
}

/*
Error.propTypes = {
    outcome: React.PropTypes.string.isRequired,
    errorMessage: React.PropTypes.string.isRequired,
};

*/


function Form(){
    return(
    <form>
        <Inputs label="First Name" type="text" id="fName" name="fName" value="" place="Enter your first name" required/>
        <Inputs label="Last Name" type="text" id="lName" name="lName" value="" place="Enter your last name" required/>
        <Inputs label="Password" type="password" id="pass1" name="password" place="*******" required/>
        <Inputs label="Confirm Password" type="password" id="pass2" name="confirm" place="*******" required/>
        <Inputs label="Email" id="email" type="email" name="email" place="Your email goes here" required/>
        <button type="button" id="submit" >Sign Up </button>
    </form>
    );
}



function Inputs(props){
    return (
        <p>
            <label>{props.label}</label>
            <br/>
            <input type={props.type} name={props.name} id={props.id} placeholder={props.place}/>
            <br/>
        </p>
    );
}

/*
Inputs.propTypes={
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    place: React.PropTypes.string.isRequired,
};

*/

function LeftSide(props){
    return (
        <article className="sideImage">
            <h1>{props.header}</h1>
            <img className="windmill" src={logo1} alt="windmill_img"/>
        </article>
    );
}

/*
LeftSide.propTypes = {
    header: React.PropTypes.string.isRequired,
};

LeftSide.defaultProp = {
    header: "Plan your activities and control your progress online",
 }
*/

function RightSide(props){
    return(
    <article className="signUp">
        <div className="toggleButtonDiv">
            <button id="supBtn" className="toggle1">{props.leftBtn}</button>
            <button id="sinBtn" className="toggle2">{props.rightBtn}</button>
        </div>
        <div className="title">
            <h2 id="sinText">{props.title1}</h2>
            <span>or</span>
            <h2 id="supText">{props.title2}</h2>
        </div>

        <Form />
        <Error/>

    </article>
    );
}


/*

RightSide.propTypes = {
    leftBtn: React.PropTypes.string.isRequired,
    rightBtn: React.PropTypes.string.isRequired,
    title1: React.PropTypes.string.isRequired,
    title2: React.PropTypes.string.isRequired,
};

RightSide.defaultProp = {
    leftBtn: "Sign In",
    rightBtn: "Sign Up"
    title1: "Sign In",
    title2: "Sign Up",
 }
*/


class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: '#516273',
        }
    }

    ChangeColorSinUp(){
        this.setState({
            color: '#fff',
            paddingBtm:'2px',
            borderBtm:'2px solid #fff'
        })
    }

    ChangeColorSinIn(){
        this.setState({
            color: '#fff',
            paddingBtm:'2px',
            borderBtm:'2px solid #fff'
        })
    }


    render(){
      return <div className="SignUp">
          <section className="container">
              <LeftSide header="Plan your activities and control your progress online"/>
              <RightSide leftBtn = "Sign In" rightBtn = "Sign Up" title1 = "Sign In" title2 = "Sign Up" />
          </section>
      </div>
  }
}


export default SignUp;
