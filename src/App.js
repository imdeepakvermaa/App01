import './App.css';
import SearchPage from './Pages/SearchPage';
import Header from './Components/Header';
import SearchResultPage from './Pages/SearchResultPage';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPage/>
      <SignIn/>  
      <SignUp/> 
      <SearchResultPage/> 


    </div>
  );
}

export default App;
