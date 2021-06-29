import HomePage from "./pages/Home/HomePage";
import StudioTeam from "./pages/Studio/StudioTeam";
import StudioVideos from "./pages/Studio/StudioVideos";
import StudioCredits from "./pages/Studio/StudioCredits";
import SelectedProjects from "./pages/Residential/SelectedProjects";
import InProgresProjects from "./pages/Residential/InProgresProjects";
import AdminLogIn from "./pages/Form/AdminLogIn";
import ResetPassword from "./pages/Form/ResetPassword";
import ResetPasswordCode from "./pages/Form/ResetPasswordCode";
import ChangePassword from "./pages/Form/ChangePassword";
import PasswordChanged from "./pages/Form/PasswordChanged";
import HomePageMenu from "./pages/Home/HomePageMenu";

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
        path:"/homepage/menu",
        isExact:true,
        component:HomePageMenu
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
        path:"/residential/in-progres-projects",
        isExact:true,
        component:InProgresProjects
    },
    {
        path:"/Housing/selected-projects",
        isExact:true,
        component:InProgresProjects
    },
    {
        path:"/Housing/in-progres-projects",
        isExact:true,
        component:InProgresProjects
    },
]
