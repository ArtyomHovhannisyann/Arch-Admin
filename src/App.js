import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";
import HomePageMenu from './pages/Home/HomePageMenu';
import StudioTeam from './pages/Studio/StudioTeam';
import StudioVideos from './pages/Studio/StudioVideos';
import StudioCredits from './pages/Studio/StudioCredits';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component = {Main}/>
          <Route exact path = "/homepage/menu" component = {HomePageMenu}/>
          <Route exact path = "/studio/team" component = {StudioTeam}/>
          <Route exact path = "/studio/videos" component = {StudioVideos}/>
          <Route exact path = "/studio/credits" component = {StudioCredits}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
