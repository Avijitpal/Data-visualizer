import React, { Component, useState} from 'react'
//import { Component, useState } from "react";
//import React from "react";
function Form(){
  const[allvalues,setvalues]=useState({
     Amount:' ',
     Month:' ',
  });

 const data=[]
  const handleChange=event=>{
        setvalues({...allvalues,[event.target.name]:event.target.value}) 
  }
 const addItem=()=>{
   let item = allvalues;
     data.push(item);
     setvalues({
       item
     });
     console.log(JSON.stringify(data))
 }

  const handleSubmit=event=>{
    event.preventDefault();
     // console.log(allvalues)
    }
  
    return(
      <form onSubmit={handleSubmit}>
        <div>
        {/*This is the Amount selection */}
          <label htmlFor='Amount'>Amount:</label>
          <input title ="amount"
            name='Amount'
            type = "number"
           // value = {this.state.Amount}
            onChange ={handleChange}
            required 
          />
        </div>
         {/*This is the for the Selecting the month */}
        <div >
          <label htmlFor='Month'>Month:</label>
           <select  title ="amount" name='Month' //value={this.state.Month} 
           onChange ={handleChange}
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
          <button onClick={addItem}>ADD</button>
        </div>
    
      </form>
    );
}
  
export default Form;
