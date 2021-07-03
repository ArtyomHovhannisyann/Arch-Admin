import HomePage from "./pages/Home/HomePage";
import StudioTeam from "./pages/Studio/StudioTeam";
import StudioVideos from "./pages/Studio/StudioVideos";
import StudioCredits from "./pages/Studio/StudioCredits";
import SelectedProjects from "./pages/Residential/SelectedProjects";
import HousingSelectedProjects from "./pages/HousingProjects/SelectedProjects";
import InprogressProjects from "./pages/Residential/InprogressProjects";
import HousingInprogressProjects from "./pages/HousingProjects/InprogressProjects";
import AdminLogIn from "./pages/Form/AdminLogIn";
import ResetPassword from "./pages/Form/ResetPassword";
import ResetPasswordCode from "./pages/Form/ResetPasswordCode";
import ChangePassword from "./pages/Form/ChangePassword";
import PasswordChanged from "./pages/Form/PasswordChanged";
import HomePageMenu from "./pages/Home/HomePageMenu";
import HomePageMenuVideos from "./css/Home/HomePageMenuVideos";
import AddResidentialProject from "./pages/Residential/AddResidentialProject";
import AddResidentialInprogressProject from "./pages/Residential/AddResidentialInprogressProject";
import HousingAddResidentialProject from "./pages/HousingProjects/AddResidentialProject";
import HousingAddResidentialInprogressProject from "./pages/HousingProjects/AddResidentialInprogressProject";

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
        component:InprogressProjects
    },
    {
        path:"/residential/add-in-progress-project",
        isExact:true,
        component:AddResidentialInprogressProject
    },
    {
        path:"/housing/selected-projects",
        isExact:true,
        component:HousingSelectedProjects
    },
    {
        path:"/housing/in-progress-projects",
        isExact:true,
        component:HousingInprogressProjects
    },
    {
        path:"/housing/add-selected-project",
        isExact:true,
        component:HousingAddResidentialProject
    },
    {
        path:"/housing/add-in-progress-projects",
        isExact:true,
        component:HousingAddResidentialInprogressProject
    },
]
