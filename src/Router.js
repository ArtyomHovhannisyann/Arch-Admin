import HomePage from "./pages/Home/HomePage";
import HomePageMenu from "./pages/Home/HomePageMenu";
import HomePageMenuVideos from "./pages/Home/HomePageMenuVideos";

import StudioTeam from "./pages/Studio/StudioTeam";
import StudioJobs from "./pages/Studio/Job/Job";
import AddJob from "./pages/Studio/Job/AddJob";
import StudioContact from "./pages/Studio/StudioContact";
import StudioMembers from "./pages/Studio/StudioMembers";

import SelectedProjects from "./pages/Apartaments/SelectedProjects";
import InProgressProjects from "./pages/Apartaments/InProgressProjects";
import HousingInProgressProjects from "./pages/HousingProjects/InProgressProjects";

import AdminLogIn from "./pages/LogIn/AdminLogIn";
import ResetPassword from "./pages/LogIn/ResetPassword";
import ResetPasswordCode from "./pages/LogIn/ResetPasswordCode";
import ChangePassword from "./pages/LogIn/ChangePassword";
import PasswordChanged from "./pages/LogIn/PasswordChanged";

import AddApartamentsProject from "./pages/Apartaments/AddApartamentsProject";
import AddApartamentsInProgressProject from "./pages/Apartaments/AddApartamentsInProgressProject";

import HousingSelectedProjects from "./pages/HousingProjects/SelectedProjects";
import HousingAddResidentialProject from "./pages/HousingProjects/AddHousingProject";
import AddHousingInProgressProject from "./pages/HousingProjects/AddHousingInProgressProject";

import ResidentialandPublicProjectsSelectedProjects from "./pages/ResidentialAndPublicProjects/ResidentialandPublicProjectsSelectedProjects";
import ResidentialandPublicProjectsInProgressProjects from "./pages/ResidentialAndPublicProjects/ResidentialandPublicProjectsInProgressProjects";
import AddResidentialandPublicProjectsSelectedProject from "./pages/ResidentialAndPublicProjects/AddResidentialandPublicProjectsSelectedProject";
import AddResidentialAndPublicProjectsInProgressProject from "./pages/ResidentialAndPublicProjects/AddResidentialandPublicProjectsInProgressProject";
import LandscapeArchitectureSelectedProjects from "./pages/Landscape/LandscapeArchitectureSelectedProjects";
import AddLandscapeArchitectureSelectedProjects from "./pages/Landscape/AddLandscapeArchitectureSelectedProjects";
import LandscapeArchitectureInProgressProjects from "./pages/Landscape/LandscapeArchitectureInProgressProjects";
import AddLandscapeArchitectureInProgressProject from "./pages/Landscape/AddLandscapeArchitectureInProgressProject";



export const routes = [
    //Auth
    {
        path:"/log-in",
        isExact:true,
        component:AdminLogIn
    },
    {
        path:"/reset-password",
        isExact:true,
        component:ResetPassword
    },
    {
        path:"/reset-password-code",
        isExact:true,
        component:ResetPasswordCode
    },
    {
        path:"/change-password",
        isExact:true,
        component:ChangePassword
    },
    {
        path:"/password-changed",
        isExact:true,
        component:PasswordChanged
    },
    //Home Page
    {
        path:"/homepage",
        isExact:true,
        component:HomePage
    },
    {
        path:"/homepage/menu/pictures",
        isExact:true,
        component:HomePageMenu
    },
    {
        path:"/homepage/menu/videos",
        isExact:true,
        component:HomePageMenuVideos
    },
    //Studio
    {
        path:"/studio/team",
        isExact:true,
        component:StudioTeam
    },
    {
        path:"/studio/members",
        isExact:true,
        component:StudioMembers
    },
    {
        path:"/studio/jobs",
        isExact:true,
        component:StudioJobs
    },
    {
        path:"/studio/jobs/add",
        isExact:true,
        component:AddJob
    },
    {
        path:"/studio/contact",
        isExact:true,
        component:StudioContact
    },
    //Apartaments
    {
        path:"/apartaments/selected-projects",
        isExact:true,
        component:SelectedProjects
    },
    {
        path:"/apartaments/add-selected-project",
        isExact:true,
        component:AddApartamentsProject
    },
    {
        path:"/apartaments/in-progress-projects",
        isExact:true,
        component:InProgressProjects
    },
    {
        path:"/apartaments/add-in-progress-project",
        isExact:true,
        component:AddApartamentsInProgressProject
    },
    //Housing
    {
        path:"/housing/selected-projects",
        isExact:true,
        component:HousingSelectedProjects
    },
    {
        path:"/housing/in-progress-projects",
        isExact:true,
        component:HousingInProgressProjects
    },
    {
        path:"/housing/add-selected-project",
        isExact:true,
        component:HousingAddResidentialProject
    },
    {
        path:"/housing/add-in-progress-projects",
        isExact:true,
        component:AddHousingInProgressProject
    },
    //Residential
    {
        path:"/residential-and-public/selected-projects",
        isExact:true,
        component:ResidentialandPublicProjectsSelectedProjects
    },
    {
        path:"/residential-and-public/in-progress-projects",
        isExact:true,
        component:ResidentialandPublicProjectsInProgressProjects
    },
    {
        path:"/residential-and-public/add-selected-projects",
        isExact:true,
        component:AddResidentialandPublicProjectsSelectedProject
    },
    {
        path:"/residential-and-public/add-in-progress-projects",
        isExact:true,
        component:AddResidentialAndPublicProjectsInProgressProject
    },
    //Landscape
    {
        path:"/landscape-architecture/selected-projects",
        isExact:true,
        component:LandscapeArchitectureSelectedProjects
    },
    {
        path:"/landscape-architecture/add-selected-projects",
        isExact:true,
        component:AddLandscapeArchitectureSelectedProjects
    },
    {
        path:"/landscape-architecture/in-progress-projects",
        isExact:true,
        component:LandscapeArchitectureInProgressProjects
    },
    {
        path:"/landscape-architecture/add-in-progress-projects",
        isExact:true,
        component:AddLandscapeArchitectureInProgressProject
    },
]
