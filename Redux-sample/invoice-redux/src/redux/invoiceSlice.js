import {  createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

export const getItemsAsync = createAsyncThunk(
	'itmes/getItemsAsync',
	async () => {
		const resp = await fetch('http://localhost:3001/getAllProducts');
		if (resp.ok) {
			const invoiceItems = await resp.json();
			return { invoiceItems };
		}
	}
);


export const invoiceSlice = createSlice({
    name: 'invoiceItems',
	initialState: [
		// { id: 1, itemName: 'Milk', qty:1, rate:24, price:0  },
		// { id: 2, itemName: 'Curd', qty:3, rate:32, price:0},
		// { id: 3, itemName: 'Ice Cream', qty:3, rate:30, price:0},
		// { id: 4, itemName: 'Panner', qty:1, rate:60, price:0}
	],
    reducers: {
        addInvoiceItem: (state, action) => {
            const invoiceItem = {
                id: action.payload.id, 
                itemName: action.payload.itemName,
                qty: action.payload.qty,
                rate: action.payload.rate,
                price: action.payload.price
            };

            state.push(invoiceItem);
        },
        displayInvoiceItem: (state,action) =>{

        }
    },
    extraReducers:{
        [getItemsAsync.fulfilled]: (state, action) => {
            return action.payload.invoiceItems;
        },
    }
}

);

export const {addInvoiceItem} = invoiceSlice.actions; 
export default invoiceSlice.reducer;