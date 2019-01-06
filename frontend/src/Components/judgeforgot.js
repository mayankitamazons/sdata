import React from 'react';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';
const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class Judgeforgot extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
	 this.state = {
          show:false,
		  show_error:false,
		  message:''
		  
          
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
    
    fetch('http://localhost:4000/api/user/judgeforgot', {
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
			// alert(res.message);
			 this.setState({show_error:true,message:res.message});
         
          return false;
        }
   })
   .then(data =>{
	       // alert(data);
		  if(data.status==true)
		  {
			    
			  var user_id=data._id;
			  // window.location.replace('http://localhost:3000/judgedashboard');
		  }
		  else
		  {
			   
			   this.setState({show_error:true});
			// alert('Invalid Login Detail');  
		  }
	  })   
   .catch((error) => {

   });
  }

  render() {
    return (
	<div>
	  <SweetAlert
	    
        show={this.state.show}
        title="Done"
        text="Password Shared on Registerd Email id"
        onConfirm={() => {
          window.location.replace('http://localhost:3000');
            this.setState({ show: false });
			}}
      />
	   <SweetAlert
	      className="red-bg"
        show={this.state.show_error}
        title="Error"
        text={this.state.message}   
        onConfirm={() => this.setState({ show_error: false })}
      />
      <form onSubmit={this.handleSubmit}>
	     <table className="customtable" cellpadding="2" width="50%" cellspacing="4">    
          <tr><td><b>Email:</b></td><td><b>  <input type="email"  required name="email" placeholder="Enter Email address"  className="form-control custominput" /></b></td></tr>
		  <tr><td><b></b></td><td><b> <button>Reset</button></b></td></tr>
		  </table>
      						
      </form>  
</div>	  
    );
  }
}

export default Judgeforgot;