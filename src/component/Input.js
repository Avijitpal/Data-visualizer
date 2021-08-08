import React, { Component } from 'react'
//import { Component, useState } from "react";
//import React from "react";
class Form extends Component{

constructor(props){
  super(props);
  this.state={
    Amount:0,
    Month: " ",
    data:[],
  };
   this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
  this.setState({
    Amount:event.target.value,
    Month:event.target.value
  })
}

addData(){
  let dataArray= [...data]
  dataArray.push(this.state.Amount);
  this.setState({
    dataArray
  });
}

handleSubmit(event){
  event.preventDefault();
  console.log(dataArray)
}



render(){
  return(
    <form onSubmit={this.handleSubmit}
    >
      <div>
      {/*This is the Amount selection */}
        <label htmlFor='Amount'>Amount</label>
        <input 
          name='Amount'
          type = "number"
          value = {this.state.Amount}
          onChange ={this.handleChange}
          required 
        />
      </div>
       {/*This is the for the Selecting the month */}
      <div >
        <label htmlFor='Month'>Month</label>
         <select name='Month' value={this.state.Month} 
         onChange ={this.handleChange}
         required >
         <option name='Month' value="January">January</option>
         <option name='Month' value="February">February</option>
         <option name='Month' value="March">March</option>
         <option name='Month' value="April">April</option>
         <option name='Month' value="May">May</option>
         <option name='Month' value="June">June</option>
         <option name='Month' value="July">July</option>
         <option name='Month' value="August">August</option>
         <option name='Month' value="September">September</option>
         <option name='Month' value="October">October</option>
         <option name='Month' value="November">November</option>
         <option name='Month' value="December">December</option>
         </select>
      </div>
    {/*Button  to add the value  */}
      <div>
        <button onClick={()=>this.addData}>ADD</button>
      </div>
  
    </form>
  );
}
}
export default Form;