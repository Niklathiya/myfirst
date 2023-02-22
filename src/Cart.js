import "./App.css";

const Cart = (props) => {
    const cart = [
      { name: "p1", price: 200, quantity: 25, discription: "d1" },
      { name: "p2", price: 346, quantity: 160, discription: "d2" },
      { name: "p3", price: 890, quantity: 230, discription: "d3" },
      { name: "p4", price: 52, quantity: 745, discription: "d4" },
      { name: "p5", price: 199, quantity: 678, discription: "d5" },
      { name: "p6", price: 7099, quantity: 150, discription: "d6" },
      { name: "p7", price: 635, quantity: 50, discription: "d7" },
      { name: "p8", price: 787, quantity: 55, discription: "d8" },
      { name: "p9", price: 105, quantity: 890, discription: "d9" },
      { name: "p10", price: 6768, quantity: 5, discription: "d10" },
      { name: "d10", price: 6768, quantity: 5, discription: "d10" },
    ];

    const total = cart.reduce((acc, curr)=>{
      return acc + curr.quantity
    },0)
    
    const maintotal = cart.reduce((acc, curr) => {
      return acc + (curr.quantity * curr.price);
    }, 0);
    

  return(
    <div className="App">
      <h1>cart data of {props.product}</h1>
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
            {cart.map((i,index)=>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i?.name}</td>
                <td>{i?.price}</td>
                <td>{i?.quantity}</td>
                <td>{i?.discription}</td>
                <td>{i?.price * i?.quantity}</td>
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

export default Cart;

//table =============================================================================
// function App()
// {
//   const data =
//     [
//       {
//         name :"admin",
//         age : 25,
//         favColor : [{blue : true, green : false, red : true, black : false}],
//         study : {h_secondary : true, degree : false}
//       },
//       {
//         name :"admin2",
//         age : 24,
//         favColor : [{blue : false, green : true, red : false, black : true}],
//         study : {h_secondary : true, degree : true}
//       },
//       {
//         name :"admin3",
//         age : 30,
//         favColor : [{blue : true, green : true, red : false, black : false}],
//         study : {h_secondary : false, degree : false}
//       }
//     ]

//   return (
//     <div className="App">
//       <h1>Data</h1>
//       <div className="center">
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Color</th>
//               <th>12th</th>
//               <th>degree</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((i, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{i.name}</td>
//                 <td>{i.age}</td>
//                 <td>
//                   {i.favColor.map((i) =>
//                     (
//                       <span key={index}>
//                         {i.blue === true? 'blue' : ''}<br/>
//                         {i.green === true? 'green' : ''}<br/>
//                         {i.red === true? 'red' : ''}<br/>
//                         {i.black === true? 'black' : ''}
//                       </span>
//                   ))}
//                 </td>
//                 {/* <td>{i.study.h_secondary === true ? 'yes' : 'no' }</td> */}
//                 {/* <td>{i.study.degree === true ? 'yes' : 'no'}</td> */}

//                 {/* if value are null or undefined */}
//                 {/* <td>{i && i.study && i.study.h_secondary === true ? 'yes' : 'no'}</td> */}
//                 <td>{i?.study?.h_secondary === true ? 'yes' : 'no'}</td>
//                 <td>{i?.study?.degree === true ? 'yes' : 'no'}</td>

//               </tr>
//             ))}
//           </tbody>
//       </table>
//       </div>
//     </div>
//   );
// }
// export default App;