import React,{useState} from "react";
import './App.css';



function child1({setCount}){ 
    return(
    <div classname= "child1">
    <p>child </p>
    <button onClick={()=> setcount(1)}></button>
    <button onClick={()=> setcount(2)}></button>
    <button onClick={()=> setcount(3)}></button>
    <button onClick={()=> setcount(4)}></button>
    </div>
    );
} 
function parent(setcount){
    const [setcount,count]=useState();
    return(
        <div classname="parent">
        <p>parent</p>
        <p>setcount:{count}</p>
        <child1 setcount={setcount}/>
        </div>

    );


    }
}
export default parent;