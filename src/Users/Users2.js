import React from 'react';

const Users2 =(props)=>{
    let age=props.age ? props.age:"na"
    if (props.children){
        return (<div> name: {props.children} Age: {age} </div>)
    }
    else{
        return <div> Entry invalid entrey</div>
    }
}
export default Users2;