import HomePage from "./pages/Home/HomePage";
import HomePageMenu from "./pages/Home/HomePageMenu";
import HomePageMenuVideos from "./pages/Home/HomePageMenuVideos";

import StudioTeam from "./pages/Studio/StudioTeam";
import StudioVideos from "./pages/Studio/StudioVideos";
import StudioCredits from "./pages/Studio/StudioCredits";

import SelectedProjects from "./pages/Residential/SelectedProjects";
import InProgressProjects from "./pages/Residential/InProgressProjects";
import HousingInProgressProjects from "./pages/HousingProjects/InProgressProjects";

import AdminLogIn from "./pages/LogIn/AdminLogIn";
import ResetPassword from "./pages/LogIn/ResetPassword";
import ResetPasswordCode from "./pages/LogIn/ResetPasswordCode";
import ChangePassword from "./pages/LogIn/ChangePassword";
import PasswordChanged from "./pages/LogIn/PasswordChanged";


import AddResidentialProject from "./pages/Residential/AddResidentialProject";
import AddResidentialInProgressProject from "./pages/Residential/AddResidentialInProgressProject";

import HousingSelectedProjects from "./pages/HousingProjects/SelectedProjects";
import HousingAddResidentialProject from "./pages/HousingProjects/AddHousingProject";
import AddHousingInProgressProject from "./pages/HousingProjects/AddHousingInProgressProject";
import CommericalSelectedProjects from "./pages/Commercial/CommericalSelectedProjects";
import CommericalInProgressProjects from "./pages/Commercial/CommericalInProgressProjects";
import AddCommericalSelectedProject from "./pages/Commercial/AddCommericalSelectedProject";
import AddCommericalInProgressProject from "./pages/Commercial/AddCommericalInProgressProject";
import PrintCoverArticle from "./pages/Publications/PrintCoverArticle";
import PrintBook from "./pages/Publications/PrintBook";
import WebPublications from "./pages/Publications/WebPublications";
import Job from "./pages/Job/Job";
import AddJob from "./pages/Job/AddJob";

export const routes = [
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
    
    {
        path:"/homepage",
        isExact:true,
        component:HomePage
    },
    {
        path:"/homepage/menu/Pictures",
        isExact:true,
        component:HomePageMenu
    },
    {
        path:"/homepage/menu/Videos",
        isExact:true,
        component:HomePageMenuVideos
    },
    {
        path:"/studio/team",
        isExact:true,
        component:StudioTeam
    },
    {
        path:"/studio/videos",
        isExact:true,
        component:StudioVideos
    },
    {
        path:"/studio/credits",
        isExact:true,
        component:StudioCredits
    },
    {
        path:"/residential/selected-projects",
        isExact:true,
        component:SelectedProjects
    },
    {
        path:"/residential/add-selected-project",
        isExact:true,
        component:AddResidentialProject
    },
    {
        path:"/residential/in-progress-projects",
        isExact:true,
        component:InProgressProjects
    },
    {
        path:"/residential/add-in-progress-project",
        isExact:true,
        component:AddResidentialInProgressProject
    },
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
    {
        path:"/commerical/selected-projects",
        isExact:true,
        component:CommericalSelectedProjects
    },
    {
        path:"/commerical/in-progress-projects",
        isExact:true,
        component:CommericalInProgressProjects
    },
    {
        path:"/commerical/add-selected-projects",
        isExact:true,
        component:AddCommericalSelectedProject
    },
    {
        path:"/commerical/add-in-progress-projects",
        isExact:true,
        component:AddCommericalInProgressProject
    },
    {
        path:"/publications/print-cover-article",
        isExact:true,
        component:PrintCoverArticle
    },
    {
        path:"/publications/print-books",
        isExact:true,
        component:PrintBook
    },
    {
        path:"/publications/web-publications",
        isExact:true,
        component:WebPublications
    },
    {
        path:"/job",
        isExact:true,
        component:Job
    },
    {
        path:"/job/add",
        isExact:true,
        component:AddJob
    },
]
