import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInvoiceItem } from '../redux/invoiceSlice';

export default function AddItem()
{
    const [item,setItem] = useState({id:0, itemName:'', qty:0, rate: 0 , price: 0});
    const dispatch = useDispatch();

    const handleSubmit = (event) =>{
        event.preventDefault(); 

        if(item)
        {
           dispatch(
              addInvoiceItem(
                  {
                    id: Math.floor(Math.random()*100000),
                    itemName : item.itemName,
                    qty: item.qty,
                    rate: item.rate,
                    price: (item.qty * item.rate)
                  }
              )
           );
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} className='form-inline mt-3 mb-3' >
        <label className='sr-only'>Name</label>
	    <input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Item Name '
				value={item.name}
				onChange={(event)=> {setItem({...item, itemName: event.target.value})}}
		></input>
        <label className='sr-only'>Qty</label>
			<input
				type='number'
				className='form-control mb-2 mr-sm-2'
				placeholder='Item Qty'
				value={item.qty}
				onChange={(event)=> {setItem({...item, qty: event.target.value})}}
			></input>

             <label className='sr-only'>Rate</label>
			<input
				type='number'
				className='form-control mb-2 mr-sm-2'
				placeholder='Item Rate'
				value={item.rate}
				onChange={(event)=> {setItem({...item, rate: event.target.value})}}
			></input>
            <button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
        </form>
        <div>{JSON.stringify(item, null, 2) }</div>
        </>

    );

}
