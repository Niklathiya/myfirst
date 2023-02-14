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

// export default App;

export default function App() 
{
  const data =
    [
      {
        name :"admin",
        age : 25,
      },
      {
        name :"admin2",
        age : 24,
      },
      {
        name :"admin3",
        age : 30,
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
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
              </tr>
            ))}
          </tbody>
      </table>
      </div>
    </div>
  );
}
