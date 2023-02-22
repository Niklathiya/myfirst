import "./App.css";
import Header from "./Header.js";
import Cart from "./Cart.js";
import Footer from "./Footer";

const App = () => {
    const username = "Admin";
    const product = "Product";
    const links = ['Facebook', 'Twitter', 'Whatsapp', 'LinkedIn', 'Instagram'];
  return(
    <div className="App">
      <Header username={username}/>
      <Cart product={product}/>
      <Footer links={links}/>
    </div>
  )
};

export default App;


