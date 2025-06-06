test('hello world!', () => {
	expect(1 + 1).toBe(2);
});


test('reducers', () => {
  let state;
  state = reducers({invoiceItems:[{id:3,itemName:'Ice Cream',qty:3,rate:30,price:0},{id:4,itemName:'Panner',qty:1,rate:60,price:0},{id:5,itemName:'Rice',qty:1,rate:100,price:0}]}, {type:'itmes/getItemsAsync/fulfilled',payload:{invoiceItems:[{id:3,itemName:'Ice Cream',qty:3,rate:30,price:0},{id:4,itemName:'Panner',qty:1,rate:60,price:0},{id:5,itemName:'Rice',qty:1,rate:100,price:0}]},meta:{requestId:'wIZCBaaExG9R9Ee47oZhk',requestStatus:'fulfilled'}});
  expect(state).toEqual({invoiceItems:[{id:3,itemName:'Ice Cream',qty:3,rate:30,price:0},{id:4,itemName:'Panner',qty:1,rate:60,price:0},{id:5,itemName:'Rice',qty:1,rate:100,price:0}]});
});