import React from 'react';


class shirt_size1 extends React.Component
{
    constructor(props) {
        super(props);
    
        this.state = {
            shirt_sizes: props.getStore().shirt_sizes_1,
			size_data_1:'',
        };

        this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms
    
        this.validationCheck = this.validationCheck.bind(this);
        this.isValidated = this.isValidated.bind(this);
    }

    handleCheck(index,value) {
        this.state.shirt_sizes[index].checked = !this.state.shirt_sizes[index].checked;
		this.state.size_data_1=value;
    }    

    isValidated() {
        let isDataValid = false;

        for (var i = 0; i < 17; i ++) {
            if (this.state.shirt_sizes[i].checked) {
                isDataValid = true;
                break;
            }   
        }

        const userInput = {shirt_sizes_1: this.state.shirt_sizes,size_data_1:this.state.size_data_1};
        console.log(userInput);
        this.props.updateStore({
            ...userInput,
            savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
        });

        const validateNewInput = this._validateData(userInput); // run the new input against the validator
        
        if (!isDataValid)
            this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    
        return isDataValid;
    }

    validationCheck() {
        if (!this._validateOnDemand)
          return;
    
        const userInput = {shirt_sizes_1: this.state.shirt_sizes,size_data:this.state.size_data}; // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
    
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    }

    _validationErrors(val) {
        const errMsgs = {
          sizeMsg: val.shirt_sizeVal ? '' : 'At least 1 check'
        }
        return errMsgs;
    }

    _validateData(data) {
        let flag = false;

        for (var i = 0; i < 17; i ++) {
            if (data.shirt_sizes_1[i].checked) {
                flag = true;
                break;
            }   
        }
        return  {
            shirt_sizeVal: flag
        }
    }
    
    render()
    {
        return(
            <div>
                <h1 align="center"> Please indicate the shirt size if you are preordering a t-shirt  for Student1</h1>
                    <table cellpadding="1" width="20%" cellspacing="2" align="center">
                    <tr>
                        <td align="left">
                            <div>{this.state.sizeMsg}</div>
                        </td>
                    </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 0,'Youth Small-Tennessee Orange')} defaultChecked={this.state.shirt_sizes[0].checked}/><font size="3">  Youth Small-Tennessee Orange </font>
                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 1,'Youth Small-Super Blue')} defaultChecked={this.state.shirt_sizes[1].checked}/><font size="3"> Youth Small-Super Blue </font>
                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 2,'Youth Small-Tennessee Orange')} defaultChecked={this.state.shirt_sizes[2].checked}/><font size="3">  Youth Small-Tennessee Orange </font>
                </td>

                </tr>

                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 3,'Youth Medium-Super Blue')} defaultChecked={this.state.shirt_sizes[3].checked}/><font size="3">  Youth Medium-Super Blue </font>
                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 4,'Youth Large-Tennessee Orange')} defaultChecked={this.state.shirt_sizes[4].checked}/><font size="3">  Youth Large-Tennessee Orange </font>
                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 5,'Youth Large-Super Blue ')} defaultChecked={this.state.shirt_sizes[5].checked}/><font size="3"> Youth Large-Super Blue </font>
                </td>

                </tr>

                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 6,'Youth Extra Large-Tennessee Orange')} defaultChecked={this.state.shirt_sizes[6].checked}/><font size="3">Youth Extra Large-Tennessee Orange</font>
                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 7,'Youth Extra Large-Super Blu')} defaultChecked={this.state.shirt_sizes[7].checked}/><font size="3"> Youth Extra Large-Super Blue </font>
                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 8,'Small-Tennessee Orange')} defaultChecked={this.state.shirt_sizes[8].checked}/><font size="3"> Small-Tennessee Orange </font>
                </td>

                </tr>

                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 9,'Small-Super Blue')} defaultChecked={this.state.shirt_sizes[9].checked}/><font size="3"> Small-Super Blue </font>
                </td>

                </tr>

                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 10,'Medium-Tennessee Orange')} defaultChecked={this.state.shirt_sizes[10].checked} /><font size="3"> Medium-Tennessee Orange</font>
                </td>

                </tr>

                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 11,'Medium-Super Blue')} defaultChecked={this.state.shirt_sizes[11].checked} /><font size="3">Medium-Super Blue </font>
                </td>

                </tr>

                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 12,'Large-Tennessee Orange')} defaultChecked={this.state.shirt_sizes[12].checked} /><font size="3">Large-Tennessee Orange </font>
                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 13,'Large-Super Blue')} defaultChecked={this.state.shirt_sizes[13].checked} /><font size="3">Large-Super Blue </font>
                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 14,'Extra Large-Tennessee Orange')} defaultChecked={this.state.shirt_sizes[14].checked} /><font size="3">Extra Large-Tennessee Orange </font>

                </td>

                </tr>

                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 15,'Extra Large-Super Blue')} defaultChecked={this.state.shirt_sizes[15].checked} /><font size="3">Extra Large-Super Blue </font>

                </td>

                </tr>
                <tr>
                <td align="left">
                <input type="radio" onChange={this.handleCheck.bind(this, 16,'other')} defaultChecked={this.state.shirt_sizes[16].checked} /><font size="3">Other</font>

                </td>

                </tr>

                    <tr>
                <td colspan="1" align="left"><input type="text" name="ifnotanyfromabove"
                id="ifnotanyfromabove" size="30"/></td>
                </tr>
                </table>
            </div>
        );

    }
}
export default shirt_size1;