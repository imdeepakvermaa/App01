import './App.css';
import SearchPage from './Pages/SearchPage';
import Header from './Components/Header';
import ProductLandingPage from './Pages/ProductLandingPage';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <SearchPage/> */}
      <ProductLandingPage/>

    </div>
  );
}

export default App;
