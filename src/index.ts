type Order= {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}
type Pizza = {
    id:number,
    name: string
    price: number
}
 let  cashInRegister = 100
 let nextOrderId =  1
 let nextPizzaId = 1
 const orderQueue: Order[] = [];

const menu: Pizza[] = [
    {id: nextPizzaId++ ,name:"chicken", price: 8},
    {id:nextPizzaId++,  name:"pork", price: 12},
    {id:nextPizzaId++, name:"beans", price: 23}
]

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
     const newOrder: Order = {id:nextOrderId++, pizza: selectedPizza, status: "ordered"}
     orderQueue.push(newOrder);
     return newOrder
 }

 function completedOrder(orderId: number){
    const order = orderQueue.find(order=>order.id===orderId);
    if(!order){
        throw new Error(`Order with id ${orderId} not found`)
        return
    }
    order.status = "completed"
    return order;
 }

//  type narrowing 
 function getPizzaDetails(identifier: string| number): Pizza| undefined{
    if(typeof identifier=== "string"){
        return menu.find(pizza =>pizza.name.toLocaleLowerCase()=== identifier.toLocaleLowerCase())
    }else if(typeof identifier === "number"){
        return menu.find(pizza =>pizza.id=== identifier)
    }
    else{
        throw new TypeError('undefined')
    }
 }

 addNewPizza({id:nextPizzaId++, name: "meat", price: 23}),menu
 addNewPizza({id:nextPizzaId++,name: "kales", price: 10}),
 addNewPizza({ id: nextPizzaId++,name: "cabbage", price: 15}),
 addNewPizza({id:nextPizzaId++, name: "managu", price: 12})

 console.log(menu)