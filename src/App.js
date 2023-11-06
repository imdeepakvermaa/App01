import './App.css';
// import SearchPage from './Pages/SearchPage';
import Header from './Components/Header';
import Home from './Pages/Home';
import RatingCard from './Components/RatingCard';
import LikeCard from './Components/LikeCard';
import ShareCard from './Components/ShareCard';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <SearchPage/> */}
      {/* <Home/> */}
      <RatingCard/>
      <LikeCard/>
      <ShareCard/>
    </div>
  );
}

export default App;
