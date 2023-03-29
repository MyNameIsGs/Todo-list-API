import React, {useState} from "react";

const FormTodo = props => {
  const [label, setDescription] = useState("");
  const handleSubmit = e => {
	e.preventDefault();
	
	setDescription("");

	const {handleAddItem} = props;
	
		e.preventDefault();

		handleAddItem({
			done: false,
			id: (+new Date ()).toString(),
			label
		});
		setDescription("");
	

  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            value={label}
            onChange={e => setDescription(e.target.value)}
          />
          <button
            className="button purple"
            disabled={label ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
