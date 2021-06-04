import React, {useState} from "react"
import "./style.css"
import axios from 'axios';
import Form from 'react-bootstrap/Form'

export default function LoginForm({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        console.log(localStorage.getItem('JWT'));

        e.preventDefault();
        console.log(username);
        const token = await axios.post( process.env.REACT_APP_API_URL +'auth/local', {
            "identifier": username,
            "password": password
        });
        localStorage.setItem('JWT', token.data.jwt);
        console.log(token)
      }
    
    const handleUsername = () => {
        console.log("haha")
    }
    return(
    <Form noValidate onSubmit={handleSubmit}>
      <div id="loginform">
        <FormHeader title="Login" />
        <div>
            <FormInput description="Username" placeholder="Enter your username" type="text"  onChange={e => setUserName(e.target.value)}/>
            <FormInput description="Password" placeholder="Enter your password" type="password" onChange={e => setPassword(e.target.value)}/>
            <FormButton title="Log in" type="submit"/>
        </div>
        <OtherMethods />
      </div>
      </Form>
    )

};

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);