import React from 'react';
import { Link } from 'react-router-dom';
import './look.css';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';

class queries extends React.Component
{
	 constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		 this.state = {
          show:false,
		  show_error:false
		  
          
        };
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
    
    fetch('http://localhost:4000/api/user/contact', {
      method: 'POST',
      body: data,
    }).then((response) => response.json())  
   .then((res) => {
        if(res.code==200){
            // console.log(res);
            this.setState({show:true});
			// window.location.replace('http://localhost:3000');

        }
        else {
			 this.setState({show_error:true});
         
          return false;
        }
   })  
   .catch((error) => {

   });
  }


    render()
    {     
        // console.log("contactus");
        return( <div style={{ WebkitTextFillColor: "white"}}>
		   <SweetAlert
	    
        show={this.state.show}
        title="Done"
        text="Thanks for contacting with us"
        onConfirm={() => {
          window.location.replace('http://localhost:3000');
            this.setState({ show: false });
			}}
      />
	   <SweetAlert
	      className="red-bg"
        show={this.state.show_error}
        title="Error"
        text="Something Went Wrong"
        onConfirm={() => this.setState({ show_error: false })}
      />
		 <form onSubmit={this.handleSubmit}>        
            <center>
                <br/><br/>
				
            <table  width="50%" border="10" cellspacing="4">

                <tr><td> <font size="5"> <b>Name</b> </font></td><td style={{ WebkitTextFillColor: "black"}}>  < input name="name" placeholder="Enter name" type="text"/></td></tr><br/><br/>
                <tr><td> <font size="5"><b>Email</b> </font></td><td style={{ WebkitTextFillColor: "black"}}><input name="email" placeholder="Enter Email" type="email"/></td></tr> <br/><br/>
                <tr><td><font size="5"><b>Post your Query</b> </font></td><td style={{ WebkitTextFillColor: "black" }} ><textarea name="query" emailrows="10" cols="100"></textarea></td></tr>
              </table>
              <br/><br/><br/><button style={{WebkitTextFillColor : "Brown"}}> <font size="5">SEND</font></button>
 
                </center>
				   </form>
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          </div>

        );
    }
    }

export default queries;