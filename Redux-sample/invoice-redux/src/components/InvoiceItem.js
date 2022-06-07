import React from 'react';
import { useDispatch } from 'react-redux';

export const InvoiceItem = ({id,name,qty,rate}) => {
    return (
		<li className={`list-group-item`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					
				{id}	{name}
				</span>
				<button className='btn btn-danger' >Delete</button>
			</div>
		</li>
	);

}