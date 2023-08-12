import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
 import Header from "./components/header";
 import About from "./components/about";
 import Services from "./components/services";
 import Contact from "./components/contact";
 import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="App">
<Header />
<Home />
<About/>
<Services/>
<Contact />
<Footer />
    </div>
  );
}

export default App;
