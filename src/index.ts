type Pizza = {
    name: string
    price: number
}

const menu = [
    {name:"chicken", price: 8},
    {name:"pork", price: 12},
    {name:"beans", price: 23}
]

let  cashInRegister = 100
 let nextOrderId =  1
 const orderQueue = [];

 function addNewPizza(pizzaObj: Pizza){
    menu.push(pizzaObj)
 }

 function placeOrder(pizzaName: string){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`);
        return
    }
     cashInRegister = selectedPizza.price
     const newOrder = {id:nextOrderId++, pizza: selectedPizza, status: 'ordered'}
     orderQueue.push(newOrder);
     return newOrder
 }

 function completedOrder(orderId: number){
    const order = orderQueue.find(order=>order.id===orderId);
    order.status = "completed"
    return order;
 }

 addNewPizza({name: "meat", price: 23}),
 addNewPizza({name: "kales", price: 10}),
 addNewPizza({name: "cabbage", price: 15}),
 addNewPizza({name: "managu", price: 12})