import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import hand from './svg/hand.png'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <div className="app-msg">
        <div>
          <h3 className="app-txt-msg">
          "Do something great today, complete your goals, 
          conquer your giants. Wear your masks, wash your hands,
          social distance and STAY SAFE!"
          </h3>
        </div>
        <div>
          <img src={hand} alt="hand" className="hand"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
