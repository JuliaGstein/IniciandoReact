import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';


class testeGit extends Component {
  render() {
    return (
      < div >  
        Olá {  this  . Props . Name }  
      </div> 
     );  
  }
}
ReactDOM . render (   
  < HelloMessage name =   "Taylor"    /  >   ,   
  documento . getElementById (   'olá-exemplo'   )   
)   ;

export default testeGit;
