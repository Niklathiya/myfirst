import "./App.css";
import Header from "./Header.js";
import Cart from "./Cart.js";
import Footer from "./Footer";
import Class_component from "./Class_component";
import{
  Routes, Route
}from "react-router-dom"
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Usestate from "./Usestate";
import Event_render from "./Event_render";
import Dynamictable from "./Dynamictable";

const Text = (props) =>
{
  return (
    <div>
      hi {props.username}
    </div>
  )
}

const App = () => {
    const username = "Admin";
    const product = "Product";
    const links = ['Facebook', 'Twitter', 'Whatsapp', 'LinkedIn', 'Instagram'];
    
  return(
    <div className="App">
      <Dynamictable/>
      {/* <Header username={username}/>
        <Routes>
          <Route path="/Product" element={<Cart product={product}/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          
          <Class_component product={product}/>
          <Text username ={username}/>
        </Routes>
      <Footer links={links}/> */}
    </div>
  )
};

export default App;


