import React from 'react';
 class Child extends React.Component{
    render()
    {
       return(
       <div>
            <h3> {this.props.data.unit} </h3>
            <button onClick={()=> this.props.data.changeunit("thank you")}>Click</button>
        </div>
       )
    
}
}
export default Child;