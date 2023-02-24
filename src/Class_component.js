import React, { Component } from 'react'

export default class Class_component extends Component {

    constructor(props){
      super(props)
      this.state ={
        name : 'hotel',
        email : 'hotel@gmail.com'
      }
    }
    
    componentDidMount()
    {
      console.log('Mount');
    }
    componentDidUpdate()
    {
      console.log('update');
    }
    componentWillUnmount()
    {
      console.log('unmount');
    }


    render() {
     const Onchange = () =>
    {
      this.setState({name: 'hotel2', email: 'hotel2@gmail.com'});
    }
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

    return (
        <div className="App">
        <h1>cart data of {this.props.product} </h1>
        <h2>{this.state.name} </h2>
        <h2>{this.state.email} </h2>
        <button onClick={Onchange}>Click</button>

        <div className="center">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Discription</th>
              </tr>
            </thead>
  
            <tbody>
              {cart.map((i,index)=>(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i?.name}</td>
                  <td>{i?.price}</td>
                  <td>{i?.quantity}</td>
                  <td>{i?.discription}</td>
                </tr>
              ))}
            </tbody>
          
          </table>  
        </div>
      </div>
    )
  }
}
