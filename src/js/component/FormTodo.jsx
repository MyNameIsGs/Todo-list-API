import React, {useState} from "react";

const FormTodo = props => {
  const [description, setDescription] = useState("");
  const handleSubmit = e => {
	e.preventDefault();
	console.log(description);
	setDescription("");

	const {handleAddItem} = props;
	
		e.preventDefault();

		handleAddItem({
			done: false,
			id: (+new Date ()).toString(),
			description
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
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button
            className="button purple"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
