export const pages = [
  //Menu
  {
    pageHeader: "Homepage",
    path: "/homepage",
  },
  {
    pageName: "Menu",
    path: "/homepage/menu/pictures",
  },
  //Studio
  {
    pageHeader: "Studio",
  },
  {
    pageName: "Team",
    path: "/studio/Team",
  },
  {
    pageName: "Jobs",
    path: "/studio/jobs",
  },
  {
    pageName: "Contact",
    path: "/studio/contact",
  },
  //Apartamets
  {
    pageHeader: "Apartments",
  },
  {
    pageName: "Selected Projects",
    path: "/apartment/selected-projects",
  },
  {
    pageName: "In progress",
    path: "/apartment/in-progress-projects",
  },
  //Housing
  {
    pageHeader: "Houses",
  },

  {
    pageName: "Selected Projects",
    path: "/houses/selected-projects",
  },
  {
    pageName: "In progress",
    path: "/houses/in-progress-projects",
  },
  //Commercial
  {
    pageHeader: "Residential and Public Projects",
  },
  {
    pageName: "Selected Projects",
    path: "/residential-and-public/selected-projects",
  },
  {
    pageName: "In progress",
    path: "/residential-and-public/in-progress-projects",
  },
  //Publications
  {
    pageHeader: "Landscape Architecture",
  },
  {
    pageName: "Selected Projects",
    path: "/landscape-architecture/selected-projects",
  },
  {
    pageName: "In progress",
    path: "/landscape-architecture/in-progress-projects",
  },
];
export const generalUrl = "https://api.anarch.am";
export const SEND_LOG_IN = `${generalUrl}/api/auth/login`;
export const RESET_PASSWORD = `${generalUrl}/api/auth/start-reset-password`;
export const RESET_PASSWORD_CODE = `${generalUrl}/api/auth/reset-password-send-code`;
export const RESET_PASSWORD_SEND_PASSWORD = `${generalUrl}/api/auth/reset-password`;
export const GET_PICTURES = `${generalUrl}/api/data/pictures`;
export const SET_PICTURE = `${generalUrl}/api/data/form/pictures`;
export const DEL_PICTURE = `${generalUrl}/api/data/pictures/`;
export const GET_VIDEOS = `${generalUrl}/api/data/videos`;
export const SET_VIDEOS = `${generalUrl}/api/data/form/videos`;
export const DEL_VIDEO = `${generalUrl}/api/data/videos/`;
export const GET_TEAM = `${generalUrl}/api/data/team`;
export const SET_TEAM = `${generalUrl}/api/data/form/team/1`;
export const GET_MEMBERS = `${generalUrl}/api/data/members`;
export const ADD_MEMBER = `${generalUrl}/api/data/form/members`;
export const DEL_MEMBER = `${generalUrl}/api/data/members/`;
export const EDIT_MEMBER = `${generalUrl}/api/data/form/members/`;
export const GET_JOBS = `${generalUrl}/api/data/jobs`;
export const SET_JOBS = `${generalUrl}/api/data/form/jobs/`;
export const GET_CONTACT = `${generalUrl}/api/data/contacts`;
export const SET_CONTACT = `${generalUrl}/api/data/form/contacts/`;
export const GET_PROJECTS = (type, category) =>
  `${generalUrl}/api/data/projects?type=${type}&category=${category}`;
export const ADD_PROJECT = (type, category) =>
  `${generalUrl}/api/data/projects?type=${type}&category=${category}`;
export const ADD_PROJECT_PHOTO = (category) =>
  `${generalUrl}/api/data/projects/add-photos/${category}`;
export const DEL_PROJECT = (id) => `${generalUrl}/api/data/projects/${id}`;
