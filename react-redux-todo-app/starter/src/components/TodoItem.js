import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
	//	dispatch(toggleComplete({ id, completed: !completed }));
	dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteButton =() => {
		//dispatch(deleteTodo({id}));
		dispatch(deleteTodoAsync({id}));
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' 
					onClick={handleCheckboxClick}
					checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDeleteButton}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
