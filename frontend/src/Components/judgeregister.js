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

class Judgeregister extends React.Component {
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
    
    fetch('http://localhost:4000/api/user/judgeregister', {
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
			   window.location.replace('http://localhost:3000/judgedashboard');
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
        text="Judge Registration Successfully"
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
          <tr><td><b>Name:</b></td><td><b>  <input type="text"  required name="name"  className="form-control custominput" /></b></td></tr>
          <tr><td><b>Category:</b></td><td><b> 
									<select
                                    name="category_1"
                                    autoComplete="off"
                                    className="form-control custominput"
                                    required
                                  
                                     >
                                    <option value="-1" selected>select category 1</option>
                                    <option value="100">Behavioral & Social Sciences</option>
                                    <option value="200">Biochemistry</option>
                                    <option value="300">Inorganic Chemistry</option>
                                    <option value="400">Organic Chemistry</option>
                                    <option value="500">Earth & Environmental Sciences</option>
                                    <option value="700">Medicine & Health</option>
                                    <option value="800">Animal Science</option>
                                    <option value="900">Microbiology</option>
                                    <option value="1000">Animal Science</option>
                                    <option value="1100">Physics and Astronomy</option>
                                    <option value="1200">Engineering</option>
                                    <option value="1300">Computer Science and Math</option>
                                    <option value="1400">Robotics</option>
                                    <option value="1500">Team Project</option>
                                        </select>
		  </b></td></tr>
          <tr><td><b>Category::</b></td><td><b>	<select
                                    name="category_2"
                                    autoComplete="off"
                                    className="form-control custominput"
                                    required
                                   
                                     >
                                    <option value="-1" selected>select category 1</option>
                                    <option value="100">Behavioral & Social Sciences</option>
                                    <option value="200">Biochemistry</option>
                                    <option value="300">Inorganic Chemistry</option>
                                    <option value="400">Organic Chemistry</option>
                                    <option value="500">Earth & Environmental Sciences</option>
                                    <option value="700">Medicine & Health</option>
                                    <option value="800">Animal Science</option>
                                    <option value="900">Microbiology</option>
                                    <option value="1000">Animal Science</option>
                                    <option value="1100">Physics and Astronomy</option>
                                    <option value="1200">Engineering</option>
                                    <option value="1300">Computer Science and Math</option>
                                    <option value="1400">Robotics</option>
                                    <option value="1500">Team Project</option>
                                        </select></b></td></tr>
          <tr><td><b>Category:</b></td><td><b>	<select
                                    name="category_3"
                                    autoComplete="off"
                                    className="form-control custominput"
                                    required
                                  
                                     >
                                   <option value="-1" selected>select category 1</option>
                                    <option value="100">Behavioral & Social Sciences</option>
                                    <option value="200">Biochemistry</option>
                                    <option value="300">Inorganic Chemistry</option>
                                    <option value="400">Organic Chemistry</option>
                                    <option value="500">Earth & Environmental Sciences</option>
                                    <option value="700">Medicine & Health</option>
                                    <option value="800">Animal Science</option>
                                    <option value="900">Microbiology</option>
                                    <option value="1000">Animal Science</option>
                                    <option value="1100">Physics and Astronomy</option>
                                    <option value="1200">Engineering</option>
                                    <option value="1300">Computer Science and Math</option>
                                    <option value="1400">Robotics</option>
                                    <option value="1500">Team Project</option>
                                        </select></b></td></tr>
          <tr><td><b>Category:</b></td><td><b>
		  	<select
                                    name="category_4"
                                    autoComplete="off"
                                    className="form-control custominput"
                                    
                                    
                                     >
                                    <option value="-1" selected>select category 1</option>
                                    <option value="100">Behavioral & Social Sciences</option>
                                    <option value="200">Biochemistry</option>
                                    <option value="300">Inorganic Chemistry</option>
                                    <option value="400">Organic Chemistry</option>
                                    <option value="500">Earth & Environmental Sciences</option>
                                    <option value="700">Medicine & Health</option>
                                    <option value="800">Animal Science</option>
                                    <option value="900">Microbiology</option>
                                    <option value="1000">Animal Science</option>
                                    <option value="1100">Physics and Astronomy</option>
                                    <option value="1200">Engineering</option>
                                    <option value="1300">Computer Science and Math</option>
                                    <option value="1400">Robotics</option>
                                    <option value="1500">Team Project</option>
                                        </select></b></td></tr>
          <tr><td><b>Email:</b></td><td><b><input type="email"  required name="login_email" className="form-control custominput" /></b></td></tr>
          <tr><td><b>Password:</b></td><td><b><input type="password"  required name="password"   className="form-control custominput" /></b></td></tr>
          <br/><br/>
		        <tr><td><b></b></td><td><b> <button>Register!</button></b></td></tr>

</table>
      </form>  
</div>	  
    );
  }
}

export default Judgeregister;