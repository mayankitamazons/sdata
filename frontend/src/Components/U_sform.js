'use strict';
import React from 'react';

import StepZilla from "react-stepzilla";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Specific_u from './Specific_u';
import Student_details from './Student_details';
import User_reg from './User_reg';
import Teacher_reg from './Teacher_reg';
import Shirt_size1 from './Shirt_size1' ;
import Shirt_size2 from './Shirt_size2' ;
import Shirt_size3 from './Shirt_size3' ;
import Certification from './Certification' ;
import Payment from './Payment';
import 'bootstrap/dist/css/bootstrap.css';

import './look.css';


import { firstLastName, email, sname, password } from '../actions/formActions';

export default class u_sform extends React.Component {
    constructor(props) {
        super(props)

        this.sampleStore = {
            teamname: '',
            email: '',
            password: '',
            f_name: '',
            l_name: '',
            t_email: '',
            sc_name1: '',
            s_name1: '',
            s_name2: '',
            s_name3: '',
            grade: '',
            s_class: '',
            title: '',
            sc_name2: '',
            shirt_sizes_1: [],
            shirt_sizes_2: [],
            shirt_sizes_3: [],
            p_cert: false,
            t_cert: false,
            summary: '',
            category: "-1",
            savedToCloud: false
        };

        this.checkList = [];

        this.init();
        
    };

    getStore() {
        return this.sampleStore;
    }
    
    updateStore(update) {
        this.sampleStore = {
          ...this.sampleStore,
          ...update,
        }
    }

    init() {
        for (var i = 0; i < 17; i ++) {
            this.sampleStore.shirt_sizes_1.push({checked: false});
            this.sampleStore.shirt_sizes_2.push({checked: false});
            this.sampleStore.shirt_sizes_3.push({checked: false});
        }
    }

    // handleChange(field, e) {
    //     let fields = this.state.fields;
    //     fields[field] = e.target.value;
    //     this.setState({ fields });
    // }

    // handleCheck(index) {
    //     this.checkList[index].checked = !this.checkList[index].checked;
    // }

    // handleValidation() {
    //     let fields = this.state.fields;
    //     let errors = {};
    //     let formIsValid = true;

    //     if((!fields["s_name1"] && !fields["s_name2"]) || (!fields["s_name3"] && !fields["s_name2"])){
    //         formIsValid = false;
    //         errors["name"] = "At least 2 students";
    //     }

    //     let checkValid = false;

    //     for (var i = 0; i < 17; i ++) {
    //         if (this.checkList[i].checked) {
    //             checkValid = true
    //         }   
    //     }

    //     if (!checkValid) {
    //         formIsValid = false;
    //         errors["check"] = "At least 1 T-shirt";
    //     }

    //     this.setState({errors: errors});
    //     return formIsValid;
    // }

    // contactSubmit(e) {
    //     e.preventDefault();

    //     console.log("======>", this.state.fields);

    //     if (this.handleValidation()) {
    //         alert("Success!");
    //         // let url = 'http://localhost:4000/user?password=' + this.state.fields.password + '&s_name1=' + this.state.fields.s_name1 + '&s_name2=' + this.state.fields.s_name2 + '&schoolname=' + this.state.fields.schoolname + '&t_email=' + this.state.fields.t_email + '&t_firstname=' + this.state.fields.t_firstname + '&t_lastname=' + this.state.fields.t_lastname + '&u_email=' + this.state.fields.u_email + '&username=' + this.state.fields.username;
    //         // fetch(url, {
    //         //     method: 'GET'
    //         // }).then(function(response) {
    //         //     window.open("/sucess");
    //         // });

    //     } else {
    //         alert("Not Form Validation")
    //     }

    // }

    // handlefirst(e) {
    //     this.props.firstLastName(e.target.name, e.target.value);
    // }

    // handleemail(e) {
    //     this.setState({ email: e.target.value })
    //     this.props.email(this.state.email)
    // }

    // handlepassword(e) {
    //     this.setState({ password: e.target.value })
    // }

    // handlesname(e) {
    //     this.props.sname(e.target.value)
    // }

    render() {       

        const steps =
        [
            {name: '', component: <User_reg getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: '', component: <Teacher_reg getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: '', component: <Student_details getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: '', component: <Shirt_size1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: '', component: <Shirt_size2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: '', component: <Shirt_size3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: '', component: <Certification getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: '', component: <Specific_u getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
            {name: '', component: <Payment getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        ];


        return (
                    <div className="Move">
                        <div>
                            <center> <h1 > Student Registration Form </h1> </center>

                            <h3 allign="left" ><b>Introduction</b></h3>
                            <p ><font size="4">Each of the seven regional Science and Engineering Fairs (SEF) in Mississippi and the state SEF will be conducted in accordance
            with the International SEF Rules and Guidelines (<a href="https://student.societyforscience.org/intel-isef">https://student.societyforscience.org/intel-isef</a>). The sponsoring teacher will assume responsibility,
            together with the student, for compliance with these rules.</font> </p>
                            <br />
                            <p allign="left"><font size="4">Each student will participate in the regional fair for the county in which the school or student is located. The Region I SEF serves the following counties:  Adams, Amite, Clarke, Covington,
            Forrest, Franklin, Green, Jasper, Jefferson, Jefferson Davis, Jones, Lamar, Lawrence, Lincoln, Marion, Pearl River, Perry, Pike, Simpson, Smith, Walthall, Wayne, and Wilkinson. </font></p>
                            <br />
                            <p class="text1"><font size="4"> Tables will be provided for each project at the fair. Each student will display copies of applicable forms (such as projects dealing with people, vertebrate animals, and chemicals) during judging.
                    USE THIS LINK TO DETERMINE WHICH FORMS YOU NEED:
            <a href="https://apps2.societyforscience.org/wizard/index.asp">https://apps2.societyforscience.org/wizard/index.asp</a>. Students who do not follow the rules or provide the applicable forms will be disqualified.</font></p>

                            <br />
                            <p class="text1" ><font size="4"> For more information, call 601-266-6845 or 601-266-4739,
                or email kendrick.buford@usm.edu or sherry.herron@usm.edu</font></p>
                            <br />
                        </div>

                        <div class="page1">



                            <h3 align="left">Registration </h3>
                            <ul align="left">
                                <li c>
                                    Complete all of the following fields.</li>
                                <li align="left">
                                    Pay the fee: $25 per student or $70 for a 3-person team project. $10 penalty for late registration
        </li>
                                <li align="left">
                                    Order a t-shirt, if desired. $10 pre-order or $15 day of fair
        </li>
                                <li align="left">
                                    Checks should be made payable to Region 1 MSEF or pay online through Pay Pal (<a href="https://squareup.com/store/msefregion1">https://squareup.com/store/msefregion1</a>)
        </li>
                            </ul>

                        </div>
                        <div className='example'>
                            <div className='step-progress'>
                        <StepZilla
                            steps={steps}
                            preventEnterSubmission={true}
                            nextTextOnFinalActionStep={"Next"}
                            hocValidationAppliedTo={[8]}
                            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
                        />
                        </div>
                        </div>
                    </div>
        );
    }
}