// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>react</p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>main</p>
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



function App()
{
  const data =
    [
      {
        name :"admin",
        age : 25,
        favColor : [{blue : true, green : false, red : true, black : false}],
        study : {h_secondary : true, degree : false}
      },
      {
        name :"admin2",
        age : 24,
        favColor : [{blue : false, green : true, red : false, black : true}],
        study : {h_secondary : true, degree : true}
      },
      {
        name :"admin3",
        age : 30,
        favColor : [{blue : true, green : true, red : false, black : false}],
        study : {h_secondary : false, degree : false}
      }
    ]
  
  return (
    <div className="App">
      <h1>Data</h1>
      <div className="center">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Color</th>
              <th>12th</th>
              <th>degree</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  {i.favColor.map((i) =>
                    (
                      <span key={index}>
                        {i.blue === true? 'blue' : ''}<br/>
                        {i.green === true? 'green' : ''}<br/>
                        {i.red === true? 'red' : ''}<br/>
                        {i.black === true? 'black' : ''}
                      </span>
                  ))}
                </td>
                {/* <td>{i.study.h_secondary === true ? 'yes' : 'no' }</td> */}
                {/* <td>{i.study.degree === true ? 'yes' : 'no'}</td> */}
                
                {/* if value are null or undefined */}
                {/* <td>{i && i.study && i.study.h_secondary === true ? 'yes' : 'no'}</td> */}
                <td>{i?.study?.h_secondary === true ? 'yes' : 'no'}</td>
                <td>{i?.study?.degree === true ? 'yes' : 'no'}</td>

              </tr>
            ))}
          </tbody>
      </table>
      </div>
    </div>
  );
}
export default App;
