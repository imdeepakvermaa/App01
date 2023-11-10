import './App.css';
import SearchPage from './Pages/SearchPage';
import Header from './Components/Header';
// import SignUp from './Pages/SignUp';
// import SignIn from './Pages/SignIn';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPage/>
      {/* <SignIn/>  */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
