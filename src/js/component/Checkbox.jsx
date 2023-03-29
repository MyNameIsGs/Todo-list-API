import React, {Fragment} from "react";

const Checkbox = props => {
const { onChange, data} = props;

	return(
		<Fragment>
			<label className="todo new-item">
			<input 
			className="todo__state"
			name={data.label}
			type="checkbox"
			defaultChecked={data.done}
			onChange={onChange}/>
			<div className="todo__text">{data.label}</div>
			</label>
		</Fragment>);


};

export default Checkbox;