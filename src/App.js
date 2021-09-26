import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Header/>
      <Content/>
      <Footer/>

    </div>
  );
}

export default App;
