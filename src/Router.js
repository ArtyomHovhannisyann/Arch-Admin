import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import HomePageMenu from "./pages/Home/HomePageMenu";
import StudioTeam from "./pages/Studio/StudioTeam";
import StudioVideos from "./pages/Studio/StudioVideos";
import StudioCredits from "./pages/Studio/StudioCredits";
import SelectedProjects from "./pages/Residential/SelectedProjects";
import InProgresProjects from "./pages/Residential/InProgresProjects";

<Router>
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/homepage/menu" component={HomePageMenu} />
    <Route exact path="/studio/team" component={StudioTeam} />
    <Route exact path="/studio/videos" component={StudioVideos} />
    <Route exact path="/studio/credits" component={StudioCredits} />
    <Route exact path="/residential/selected-projects" component={SelectedProjects} />
    <Route exact path="/residential/in-progres-projects" component={InProgresProjects} />
  </Switch>
</Router>;
