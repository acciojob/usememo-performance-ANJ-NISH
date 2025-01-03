
import React, { useMemo, useState } from "react";
import './../styles/App.css';

const App = () => {


 const initialList=[];

 function makeInitalList()
 {
  for(let i=1;i<=50;i++)
  {
    let statusarr;
    if(i%2!==0)
    {
      statusarr=[`Todo ${i}`,true];
    }
    else
    {
      statusarr=[`Todo ${i}`,false];
    }
    initialList.push(statusarr);
  }
 }

 makeInitalList();

 const [listarr, setListArr]=useState(initialList);

 const findActive=useMemo(()=>{

  const ActiveArr=initialList.filter((listitem)=> listitem[1]===false);
  return ActiveArr;
 },[initialList])

 const findCompleted=useMemo(()=>{
     const InactiveArr=initialList.filter((listitem)=> listitem[1]===true);
     return InactiveArr;
 },[initialList])

  return (
    <div>
        <button onClick={()=> setListArr(initialList)}>All</button>
        <button onClick={()=> setListArr(findActive)}>Active</button>
        <button onClick={()=> setListArr(findCompleted)}>Completed</button>
        <br />
        <hr />
        <p>Note: List is artificially slowed down!</p>
        <br />
        <ul>
        {listarr.map((listitem, index)=> {return listitem[1]?<li key={index} style={{textDecoration: 'line-through'}}>{listitem[0]}</li>:<li key={index}>{listitem[0]}</li>})}
        </ul>
    </div>
  )
}

export default App
