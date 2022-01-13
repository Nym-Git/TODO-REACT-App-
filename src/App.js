import "./App.css";
import Header from "./MyComponents/Header";
import {Footer} from './MyComponents/Footer';
import {TodoItem} from './MyComponents/TodoItem';
import {Todos} from './MyComponents/Todos';
import {Add} from './MyComponents/Add';
import {About} from './MyComponents/About';

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';





function App(){
  const onDelete = (todo) =>{
    console.log("I am ondelete todo",todo);
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const add = (title,desc) =>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todos.length==0){
      sno=0;
    } 
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([                                      /*  let todos = [  */
    {
      sno: 1,
      title: "join bootcamp",
      desc: "the bootcamp is for coding"
    },
    {
      sno: 2,
      title: "join coding sessions",
      desc: "this sessions is for coder group-II"
    },
  ]);


  return(
    <>
    <Router>
      <Header title="TODO list" searchbar={false}/>
      <br/>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
              <Add add={add}/>
              <Todos todos={todos} onDelete={onDelete}/>
          
            </>)
          }}>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;