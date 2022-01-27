
import './App.css';
import Hero from './componenets/Hero';
import Home from './containers/Home';
import Header from './componenets/Header';
import { BrowserRouter as Router,Switch,Route }from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import AboutUs from './containers/About';
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
   
   <Hero/>
   <Route path="/" exact component={Home}/>
   <Route path="/contact" component ={ContactUs}/>
   <Route path="/post/:slug" component={Post}/>
   <Route path="/a-propos-nous" component={AboutUs}/>
  
    </div>
    </Router>
  );
}

export default App;
