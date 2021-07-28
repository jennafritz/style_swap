import './App.css';
import LoginContainer from './Containers/LoginContainer'
import HomePageContainer from './Containers/HomePageContainer'
import SwapEventContainer from './Containers/SwapEventContainer'
import UserClosetContainer from './Containers/UserClosetContainer'
import SwapClosetContainer from './Containers/SwapClosetContainer'
import ClothingDetailsComponent from './Components/ClothingDetailsComponent'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <LoginContainer />}/>
      <Route exact path="/home" render={() => <HomePageContainer />}/>
      <Route exact path="/swap" render={() => <SwapEventContainer />}/>
      <Route exact path="/closet" render={() => <UserClosetContainer />}/>
      <Route exact path="/swapCloset" render={() => <SwapClosetContainer />}/>
      <Route exact path="/clothingDetails" render={() => <ClothingDetailsComponent />}/>
    </Router>
  );
}

export default App;
