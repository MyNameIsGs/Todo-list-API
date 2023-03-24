import React from "react";
import Checkbox from "./Checkbox.jsx";

const TaskList = props => {

	const onClickRemoveItem = e => {
		const updateList = list.filter(item => !item.done);
		setList(updateList);
	};

	const {list, setList} = props;

	const onChangeStatus = e => {
		const {name, checked} = e.target;
		const updateList = list.map(item => ({
			...item,
			done: item.id === name ? checked : item.done
		}));
		setList(updateList);
	};


	const chk = list.map(item => (
		<Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
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