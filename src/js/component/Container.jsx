import React, {useState, useEffect} from "react";

import FormTodo from "./FormTodo.jsx";
import TaskList from "./TaskList.jsx";

const urlBase = "http://assets.breatheco.de/apis/fake/todos/user";
const Container = () => {
  const [list, setList] = useState ([]);




  
   const getTasks = async () => {
    try {
      let response = await fetch(`${urlBase}/Gs`);
      let data = await response.json();
      
      if (response.ok) setList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleAddItem = addItem => {
    setList([...list, addItem]);
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      
      <FormTodo handleAddItem={handleAddItem}/>
      <TaskList list={list} setList={setList} getTasks={getTasks}/>
    </div>
  );
};

export default Container;