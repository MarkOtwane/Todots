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

const menu: Pizza[] = [
    {id: 1,name:"chicken", price: 8},
    {id:2,  name:"pork", price: 12},
    {id:3, name:"beans", price: 23}
]

let  cashInRegister = 100
 let nextOrderId =  1
 const orderQueue: Order[] = [];

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
 function getPizzaDetails(identifier: string| number){
    if(typeof identifier=== "string"){
        return menu.find(pizza =>pizza.name.toLocaleLowerCase()=== identifier.toLocaleLowerCase())
    }else{
        return menu.find(pizza =>pizza.id=== identifier)
    }
 }

 addNewPizza({id:12, name: "meat", price: 23}),menu
 addNewPizza({id:25,name: "kales", price: 10}),
 addNewPizza({ id:33,name: "cabbage", price: 15}),
 addNewPizza({id:35, name: "managu", price: 12})

 console.log(menu)