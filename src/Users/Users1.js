import React,{Component} 'react';
import Users2 from './Users2';
import './App.css';
class Users1 extends Component(){
    render()
    {
        return(
        <div>
        <h1> {this.props.title }</h1>
            <Users2 age="56"> john </Users2>
            <Users2 age="67"> jill <Users2/>
            <Users2 age="78">jack</Users2>
        </div>
        );

    }


}
export default Users1;