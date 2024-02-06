import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Filter = ({add,search}) => {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [newrating,setnewRating]=useState()
  const navigate= useNavigate()

 const handleclick =()=> {
 
  if(title&&description&&newrating){
    add(title,description,newrating)
    navigate('/')
  } else{
    alert('you need to add movie')
  }

}
  
  return (
    <div className="filter">
      <div className="add">

        <div className="xyz"> + Add a new movie </div>
        <label>Title</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
        
        <label>Description</label>
        <input type="text"onChange={(e)=>setDescription(e.target.value)}/>
        
        <label> Rating  </label>
        <input type="number" max={5} onChange={(e)=>setnewRating(e.target.value)}/>
        <button className="ABC"  onClick={()=>handleclick()}   >OK</button>
      </div>
      
    </div>
  );
};

export default Filter;