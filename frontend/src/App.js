import React, { Component } from 'react';
import logo from './usm.png';
import './App.css';
// import Homepage from './Components/Homepage';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Blur from 'react-blur';
import homepage from './Components/Homepage';
import typeoffair from './Components/Typeoffair';
import u_sform from './Components/U_sform';
import demo from './Components/demo';
import judgeregister from './Components/judgeregister';
import judgedashboard from './Components/judgedashboard';
import registeruser from './Components/registeruser';
import back from './Images/back.jpg';
import registered from './Components/Registered';
import queries from './Components/Queries';
import { Parallax, Background } from 'react-parallax';
import image1 from './Images/hall.jpg';
import queries_sent from './Components/Queries_sent';
import ReactDOM from "react-dom";
import ModalComponent from './Components/ModalComponent';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';

class App extends Component {
	
   constructor(props) {
    super(props);
    this.state = { modal: false,name: '',team :'' ,country: '',show:false,show_error:false};  

    this.toggle = this.toggle.bind(this);
    this.handleChangeLoginName = this.handleChangeLoginName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeLoginName(event) {
    this.setState({login_email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({login_password: event.target.value});
  }
 

  handleSubmit(event) {
      event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    // for (let name of data.keys()) {
      // const input = form.elements[name];
      // const parserName = input.dataset.parse;

      // if (parserName) {
        // const parser = inputParsers[parserName];
        // const parsedValue = parser(data.get(name));
        // data.set(name, parsedValue);
      // }
    // }
    
  
	    fetch('http://localhost:4000/api/judge/login',{
      method: 'POST',
      body: data,
    })
      .then(response => {
		
		if (response.ok) {
			// console.log(response);
			// alert(response.data);
			// console.log(response.json());
			
          return response.json();
        } else {
			 this.setState({show_error:true});
			// alert('Invalid Login Detail');
          //throw new Error('Something went wrong ...');
        }
      })
      .then(data =>{
		  if(data.status==true)
		  {
			    
			  var user_id=data._id;
			   window.location.replace('http://localhost:3000/judgedashboard');
		  }
		  else
		  {
			   this.setState({show_error:true});
			// alert('Invalid Login Detail');  
		  }
	  })
      .catch(error => this.setState({ error, isLoading: false }));	
	
     }

  render() {
    return (
      <div className="App" >
            
               
        <SweetAlert
	    
        show={this.state.show_error}
        title="Error"
		 className="red-bg"
        text="Invalid Login Detail"
        onConfirm={() => {
          window.location.replace('http://localhost:3000');
            this.setState({ show_error: false });
			}}
      />
	  
        {/* <Blur class='blur.demo' img={back} blurRadius={6} resizeInterval= "150ms"   enableStyles>
        <header> 
        <h1 className="Trial"> Centre </h1>
        </header>
        </Blur> */}


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mississippi Region-I Science and Engineering Fair</h1>
          <a  href = "https://www.usm.edu/science-math-education">Centre of Science and Math Education</a>
        </header>
        

        <Parallax className="Appbody"
            blur={7}
            bgImage={image1}
            strength={500} >
       
        <Nav-bar class="Nav-css">
            <ul id="tabs"  >
         
              <li >
               <Link to={'/'} >Home  </Link> 
              </li>
              <li>
                <Link to={'/fairs'}   >Fairs</Link>
              </li>
              <li>
                <Link to={'/queries'}>ContactUs</Link>
              </li>
			   <li onClick={this.toggle}>
                 Judge
              </li>
            </ul>
            </Nav-bar>
            <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Jugde Login</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-6">
            <label>Email:</label>
            <input type="email" required name="login_email" value={this.state.login_email}  className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-6">
            <label>Password:</label>
                <input type="password" required name="login_password" value={this.state.login_password} className="form-control" />
               </div>
              </div>
			  <div className="row">
             <div className="form-group col-md-6">
			  
				  <Link to={'/judgeregister'} onClick={this.toggle}>   Don't have account Register</Link>    
                
             
			  
			 </div>
			 </div>
           
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Login" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal> 
        <Route path ={'/queries_sent'} component={queries_sent}/> 
        <Route path ={'/sucess'} component={registered}/>
        <Route path ={'/queries'} component={queries}/>
        <Route path = {'/uform'} component={u_sform}/>
        <Route path = {'/demo'} component={demo}/>   
        <Route path = {'/judgeregister'} component={judgeregister}/>   
        <Route path = {'/judgedashboard'} component={judgedashboard}/>   
        <Route path = {'/registeruser'} component={registeruser}/>   
        
        <Route path={'/fairs'} component={typeoffair} />
        <Route path={'/'} exact component={homepage}/>
        
      
        
       

        
        </Parallax>
           </div>
    );
  }
}

export default App;
