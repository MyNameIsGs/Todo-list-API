import React, { useEffect } from "react";
import Checkbox from "./Checkbox.jsx";

const urlBase = "http://assets.breatheco.de/apis/fake/todos/user";




const TaskList = (props) => {
  const { list, setList, getTasks } = props;
  const onClickRemoveItem = (e) => {
    console.log(list)
    const updateList = list.filter((item) => !item.done);
  
    console.log(updateList)

    deleteTask(updateList);
    
    
  };

const deleteTask =  async (task) => {
  try {
    let response = await fetch(`${urlBase}/Gs`, {
      method: "PUT", 
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(task)
    });


    getTasks()
  } catch (error) {
    console.log(error);
  }
};


console.log(list)  

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked)
    const updateList = list.map((item) => ({
      ...item,
      done: item.label === name ? checked : item.done,
    }));
    setList(updateList);

  };

  


  const chk = list.map((item,index) => (
    <Checkbox key={index} data={item} onChange={onChangeStatus} />
  ));

  
  return (
    <div className="todo-list">
      {list.length ? chk : "No tasks"}
      {list.length ? (
        <p className="mt-3">
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
