import "./App.css";

const App = () => {
    const cart = [
      { name: "p1", price: 200, quantity: 25, discription: "d1" },
      { name: "p2", price: 346, quantity: 160, discription: "d2" },
      { name: "p3", price: 890, quantity: 230, discription: "d3" },
      { name: "p4", price: 52, quantity: 745, discription: "d4" },
      { name: "p5", price: 199, quantity: 678, discription: "d5" },
    ];
    const cart2 = [
      { name: "p6", price: 7099, quantity: 150, discription: "d6" },
      { name: "p7", price: 635, quantity: 50, discription: "d7" },
      { name: "p8", price: 787, quantity: 55, discription: "d8" },
      { name: "p9", price: 105, quantity: 890, discription: "d9" },
      { name: "p10", price: 6768, quantity: 5, discription: "d10" },
      { name: "d10", price: 6768, quantity: 5, discription: "d10" },
    ];

    //merge array 
    const mergeArray = cart.concat(cart2)

    //spread array method
    // const mergeArray = [...cart , ...cart2]

    const total = mergeArray.reduce((acc, curr)=>{
      return acc + curr.quantity
    },0)
    
    const maintotal = mergeArray.reduce((acc, curr) => {
      return acc + (curr.quantity * curr.price);
    }, 0);
    

  return(
    <div className="App">
      <h1>cart data</h1>
      <div className="center">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Discription</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {/* filter  */}
            {/* {cart.filter((i)=> (i.price >200 && i.price <=900) || (i.quantity > 50 && i.quantity <=150) || (i.name.includes('d'))).map((i,index)=>( */}
            {mergeArray.map(({name,price,quantity,discription} ,index)=>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{discription}</td>
                <td>{price * quantity}</td>
              </tr>
            ))}
            <tr>
              <td>Quantity</td>
              <td colSpan={4}>{total}</td>
              <td>{maintotal}</td>
          </tr>
          </tbody>
        
        </table>  
      </div>
    </div>
  )
};


//destructuring of object
//destructuring of object work on key value 
const {name,age} = {name: "admin", age: 25}
console.log(name,age);

//destructuring of array
//destructuring of array work on index number 
const [fruit1, fruit2, fruit3] = ["f1", "f3", "f2"]
console.log(fruit1,fruit3,fruit2);


export default App;


