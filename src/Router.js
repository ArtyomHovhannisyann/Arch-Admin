import HomePage from "./pages/Home/HomePage";
import HomePageMenu from "./pages/Home/HomePageMenu";
import HomePageMenuVideos from "./pages/Home/HomePageMenuVideos";

import StudioTeam from "./pages/Studio/StudioTeam";
import Job from "./pages/Studio/Job";
import StudioContact from "./pages/Studio/StudioContact";
import StudioMembers from "./pages/Studio/StudioMembers";

import AdminLogIn from "./pages/LogIn/AdminLogIn";
import ResetPassword from "./pages/LogIn/ResetPassword";
import ResetPasswordCode from "./pages/LogIn/ResetPasswordCode";
import ChangePassword from "./pages/LogIn/ChangePassword";
import PasswordChanged from "./pages/LogIn/PasswordChanged";

import AddApartamentsSelectedProjects from "./pages/Apartaments/AddApartamentsSelectedProject";
import AddApartamentsInProgressProject from "./pages/Apartaments/AddApartamentsInProgressProject";
import ApartamentsInProgressProjects from "./pages/Apartaments/ApartamentsInProgressProjects";
import ApartamentsSelectedProjects from "./pages/Apartaments/ApartamentsSelectedProjects";
import HousesSelectedProjects from "./pages/Houses/HousesSelectedProjects";
import AddHousesSelectedProjects from "./pages/Houses/AddHousesSelectedProjects";
import HousesInProgressProjects from "./pages/Houses/HousesInProgressProjects";
import AddHousesInProgressProject from "./pages/Houses/AddHousesInProgressProject";
import ResidentialAndPublicSelectedProjects from "./pages/ResidentialAndPublicProjects/ResidentialAndPublicSelectedProjects";
import AddResidentialAndPublicInProgressProject from "./pages/ResidentialAndPublicProjects/AddResidentialAndPublicInProgressProject";
import AddResidentialAndPublicSelectedProjects from "./pages/ResidentialAndPublicProjects/AddResidentialAndPublicSelectedProjects";
import ResidentialAndPublicInProgressProjects from "./pages/ResidentialAndPublicProjects/ResidentialAndPublicInProgressProjects";
import LandscapeSelectedProjects from "./pages/Landscape/LandscapeSelectedProjects";
import LandscapeInProgressProjects from "./pages/Landscape/LandscapeInProgressProjects";
import AddLandscapeSelectedProjects from "./pages/Landscape/AddLandscapeSelectedProject";
import AddLandscapeInProgressProject from "./pages/Landscape/AddLandscapeInProgressProject";

export const routes = [
  //Auth
  {
    path: "/log-in",
    isExact: true,
    component: AdminLogIn,
  },
  {
    path: "/reset-password",
    isExact: true,
    component: ResetPassword,
  },
  {
    path: "/reset-password-code",
    isExact: true,
    component: ResetPasswordCode,
  },
  {
    path: "/change-password",
    isExact: true,
    component: ChangePassword,
  },
  {
    path: "/password-changed",
    isExact: true,
    component: PasswordChanged,
  },
  //Home Page
  {
    path: "/homepage",
    isExact: true,
    component: HomePage,
  },
  {
    path: "/homepage/menu/pictures",
    isExact: true,
    component: HomePageMenu,
  },
  {
    path: "/homepage/menu/videos",
    isExact: true,
    component: HomePageMenuVideos,
  },
  //Studio
  {
    path: "/studio/team",
    isExact: true,
    component: StudioTeam,
  },
  {
    path: "/studio/members",
    isExact: true,
    component: StudioMembers,
  },
  {
    path: "/studio/jobs",
    isExact: true,
    component: Job,
  },
  {
    path: "/studio/contact",
    isExact: true,
    component: StudioContact,
  },
  //Apartaments
  {
    path: "/apartaments/selected-projects",
    isExact: true,
    component: ApartamentsSelectedProjects,
  },
  {
    path: "/apartaments/add-selected-project",
    isExact: true,
    component: AddApartamentsSelectedProjects,
  },
  {
    path: "/apartaments/in-progress-projects",
    isExact: true,
    component: ApartamentsInProgressProjects,
  },
  {
    path: "/apartaments/add-in-progress-project",
    isExact: true,
    component: AddApartamentsInProgressProject,
  },
  //Houses
  {
    path: "/houses/selected-projects",
    isExact: true,
    component: HousesSelectedProjects,
  },
  {
    path: "/houses/add-selected-project",
    isExact: true,
    component: AddHousesSelectedProjects,
  },
  {
    path: "/houses/in-progress-projects",
    isExact: true,
    component: HousesInProgressProjects,
  },
  {
    path: "/houses/add-in-progress-project",
    isExact: true,
    component: AddHousesInProgressProject,
  },

  // //Residential
  {
      path:"/residential-and-public/selected-projects",
      isExact:true,
      component:ResidentialAndPublicSelectedProjects
  },
  {
      path:"/residential-and-public/in-progress-projects",
      isExact:true,
      component:ResidentialAndPublicInProgressProjects
  },
  {
      path:"/residential-and-public/add-selected-project",
      isExact:true,
      component:AddResidentialAndPublicSelectedProjects
  },
  {
      path:"/residential-and-public/add-in-progress-project",
      isExact:true,
      component:AddResidentialAndPublicInProgressProject
  },
  // //Landscape
  {
      path:"/landscape-architecture/selected-projects",
      isExact:true,
      component:LandscapeSelectedProjects
  },
  {
      path:"/landscape-architecture/add-selected-project",
      isExact:true,
      component:AddLandscapeSelectedProjects
  },
  {
      path:"/landscape-architecture/in-progress-projects",
      isExact:true,
      component:LandscapeInProgressProjects
  },
  {
      path:"/landscape-architecture/add-in-progress-project",
      isExact:true,
      component:AddLandscapeInProgressProject
  },
];
