import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
