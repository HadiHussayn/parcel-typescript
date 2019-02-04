import * as React from 'react';
import RadioGroup from "./radioGroup"
import CheckboxGroup from "./checkboxGroup"
import Es from "../EmptySpace";


export default class extends React.Component{
  state ={
    FirstName: '',
    LastName: '',
    Email: '',
    Address: '',
    Gender: '',
    Interests: [''],
    University:'',
    Agreement: ''

  }

  submitForm = e =>{
    e.preventDefault();
    console.log(this.state)
  }

  onChangeForm = e =>{
    if (e.target){
      let { value, name, type, checked} = e.target;
      if (['Interests'].includes(name)){
        const arr= [...this.state[name]];
        if (checked){
          arr.push(value);
        }else{
          const index = arr.indexOf(value);
          if (index> -1){
            arr.splice(index, 1);
          }
        }
        this.setState({
          [name]:arr
        });
        return true;
      }
      if (type ==="checkbox"){
        value = checked;
      }
      this.setState({
        [name]:value
      });
    }
  }

  printInfo(){
    return(
      <div className = "print">

      <h3>Registration form</h3>
      <h5> first name :
      {this.state.FirstName}</h5>
      <h5>last name :
      {this.state.LastName}</h5>
      <h5>Email : 
        {this.state.Email}</h5>
        <h5>Adress : 
          {this.state.Address}
        </h5>
        <h5>Gender :
          {this.state.Gender}
        </h5>
        <h5>Interests :
          {this.state.Interests.join(" ")}
        </h5>
        <h5>university :
          {this.state.University}
        </h5>
        <h5> Agrement :
          {this.state.Agreement? "yes":"no"}
        </h5>
      </div>
    );
  }

  render(){
    return(
      <div className='form'>
      {
        <form onSubmit ={this.submitForm} onChange ={this.onChangeForm}>
        <h5> Registration Form</h5>
        <label htmlFor="">first Name:</label> <br/>
         <input type="text" name ="FirstName" defaultValue={this.state.FirstName }/>
         <br/>
         <label htmlFor="">last name  : </label> <br/>
         <input type="text" name ="LastName" defaultValue={this.state.LastName}/>
          <br/>
          <label htmlFor="">Email: </label>
          <br/>
          <input type="text" name="Email" defaultValue ={this.state.Email}/>
          <br/>

          <label htmlFor="">Adress</label> <br/>
          <textarea name="Address" defaultValue={this.state.Address}></textarea>
          <br/>
           <label htmlFor=""> Gender</label><br/>
           <RadioGroup
           values ={[
             {value : "female", label: "female"},
             {value: "male", label:"male" }
           ]}
           slected={this.state.Gender}
           name="Gender"/> <br/>
           <CheckboxGroup
           values={['cricket',"football ","reading ","outing ",'music ']}
              label="Interests"
              name= "Interests"
              selected={this.state.Interests}
           
           />
           <br/>
           <label htmlFor="">university</label>
           <select
              name="University" defaultValue={this.state.University}>
           <option  >select your university</option> <br/> <br/>
              <option value="karakuram international university" >KIU</option>
              <option value="Aga khan university" >AKU</option>
              <option value="punjab universiyty" >PU</option>
           </select>
           <label htmlFor="">
           <br/> <br/>
              <input type="checkbox" value="1" name="Agreement" /> accept policy</label> <br/> <br/>
              <button>submit</button>
        </form>
      }
      <div>{this.printInfo()}</div>
      </div>
    );
  }
}
