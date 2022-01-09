import React from 'react';
import Child from './Child.js';
import './App.css';

class App extends React.Component  {
   constructor()
   {
    super()
    this.state={
      unit :'subscribe'
    }
  }
    changeunit(item)
    {
      this.setState({unit:item})
    }
    render()
     {
      return(
        <div>
          <h1> Pass data child to parents in react </h1>
          <Child data={
            {unit:this.state.unit,
            changeunit:this.changeunit.bind(this)}
          }
        />
        </div>
    
      )
    }
  } 
  


export default App;
