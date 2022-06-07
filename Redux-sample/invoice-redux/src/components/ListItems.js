import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getItemsAsync } from '../redux/invoiceSlice';
import { InvoiceItem } from './InvoiceItem';

export const ListItem = ()=>{
    const invoiceItems = useSelector((state)=> state.invoiceItems);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getItemsAsync());
    },[dispatch]);

    return (
		<ul className='list-group'>
			{invoiceItems.map((item) => (
				<InvoiceItem id={item.id} name={item.itemName} qty={item.qty} rate={item.rate} />
			))}
		</ul>
	);
}