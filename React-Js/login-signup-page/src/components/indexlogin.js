import react from "react";
import reactDom from "react-dom";
import './index.css';

const App = props => (
  <LoginForm />
);

class LoginForm extends react.Component{
render(){
  return(
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
      <ForgotPassword />
      <SignUP />
    </div>  
  ) 
 }
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
 <div>
   <FormInput description="Phone number" placeholder="Enter your mobile number" type="tel"/>
   <FormInput description="Password" placeholder="Enter 4 digit pin" type="password"/>
   <FormButton title="Log in"/>
 </div>
);

const FormButton = props => (
<div id="button" class="row">
  <button>{props.title}</button>
</div>
);

const FormInput = props => (
<div class="row">
  <label>{props.description}</label>
  <input type={props.type} placeholder={props.placeholder}/>
</div>  
);

const ForgotPassword = props => (
  <div id="alternativeLogin1">
    <label>FORGOT PASSWORD?</label>
  </div>
  );

  const SignUP = props => (
    <div id="alternativeLogin2">
      <label>SIGN UP</label>
    </div>
    );

reactDom.render(<App />, document.getElementById('container'));