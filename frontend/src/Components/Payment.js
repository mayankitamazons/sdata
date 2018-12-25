import React from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';
const axios = require('axios');

class Payment extends React.Component
{
    constructor(props) {
        super(props);
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
        console.log("============> clcicked", this.props.getStore());   
		// var jsonrequest={
						// teamname:this.props.getStore().teamname,
						// paasword:this.props.getStore().password,
						// email:this.props.getStore().email,
						// teacher_f_name:this.props.getStore().f_name,
						// teacher_last_name:this.props.getStore().l_name,
						// teacher_email:this.props.getStore().t_email,
						// teacher_sname:this.props.getStore().sc_name1,
						// s_name1:this.props.getStore().sc_name1,
						// s_name2:this.props.getStore().sc_name2,
						// s_name3:this.props.getStore().s_name3,
						// grade:this.props.getStore().grade,
						// s_class:this.props.getStore().s_class,
						// project_title:this.props.getStore().project_title,
						// category:this.props.getStore().category,
						// school_name:this.props.getStore().school_name,
						// school_phone:this.props.getStore().school_phone,
						// s1_tshirt:this.props.getStore().shirt_sizes_1,
						// s2_tshirt:this.props.getStore().shirt_sizes_2,
						// s3_tshirt:this.props.getStore().shirt_sizes_3,
						// summary:this.props.getStore().summary
		// };
		 // const form = event.target;
		// const data = new FormData(form);
		 
		// post data to save
		 fetch('http://localhost:4000/api/user/register', {
		  method: 'POST',
		  body:data,   
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
      
		// window.location.reload();
    }

    render()
    {
        return(

            <div>
            <br/><br/>
			 <SweetAlert
	    
        show={this.state.show}
        title="Done"
        text="Registration Successfully"
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
            <table align="center">
            
            
            <tr><td><br/><br/><br/> <font size='5'><b> Payment</b> </font></td></tr>
            <tr><td >Please send Cash or Check (made payable to MSEF Region 1 or CSME) to:</td></tr>
            
            <tr><td ><br/><br/>  University of Southern Mississippi</td></tr>
            <tr><td >CSME c/o MSEF Region 1</td></tr>
            <tr><td >118 College Drive Box #5087</td></tr>
            <tr><td >  Hattiesburg, MS 39406</td></tr>
            
            <tr><td><br/> Fees can also be paid online by following this link:<a> https://squareup.com/store/msefregion1 </a></td></tr>
            </table>
			 <form onSubmit={this.handleSubmit}>
			<input name="teamname" type="hidden" value={this.props.getStore().teamname}/>
			<input name="password" type="hidden" value={this.props.getStore().password}/>
			<input name="email" type="hidden" value={this.props.getStore().email}/>
			<input name="teacher_f_name" type="hidden" value={this.props.getStore().f_name}/>
			<input name="teacher_last_name" type="hidden" value={this.props.getStore().l_name}/>
			<input name="teacher_email" type="hidden" value={this.props.getStore().t_email}/>
			<input name="s_name1" type="hidden" value={this.props.getStore().s_name1}/>
			<input name="s_name2" type="hidden" value={this.props.getStore().s_name2}/>
			<input name="s_name3" type="hidden" value={this.props.getStore().s_name3}/>
			<input name="grade" type="hidden" value={this.props.getStore().grade}/>
			<input name="s_class" type="hidden" value={this.props.getStore().s_class}/>
			<input name="project_title" type="hidden" value={this.props.getStore().title}/>
			<input name="category" type="hidden" value={this.props.getStore().category}/>
			<input name="sc_name1" type="hidden" value={this.props.getStore().sc_name1}/>
			<input name="sc_name2" type="hidden" value={this.props.getStore().sc_name2}/>
			<input name="s_phone" type="hidden" value={this.props.getStore().s_phone}/>
			<input name="s1_tshirt" type="hidden" value={this.props.getStore().s1_tshirt}/>
			<input name="s2_tshirt" type="hidden" value={this.props.getStore().s2_tshirt}/>
			<input name="s3_tshirt" type="hidden" value={this.props.getStore().s3_tshirt}/>
			<input name="summary" type="hidden" value={this.props.getStore().summary}/>
			<input name="summary_doc" type="hidden" value={this.props.getStore().summary_doc}/>
			<input name="form_doc" type="hidden" value={this.props.getStore().form_doc}/>
					<button><font size='5'> Register </font></button>
			</form>
               
            </div>




            
        );
    }
}
export default Payment;