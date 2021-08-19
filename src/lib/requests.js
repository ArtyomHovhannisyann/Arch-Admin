import { request } from "./a-lib";
import {
  ADD_MEMBER,
  DEL_MEMBER,
  DEL_PICTURE,
  DEL_VIDEO,
  EDIT_MEMBER,
  GET_MEMBERS,
  GET_PICTURES,
  GET_TEAM,
  GET_VIDEOS,
  RESET_PASSWORD,
  RESET_PASSWORD_CODE,
  RESET_PASSWORD_SEND_PASSWORD,
  SEND_LOG_IN,
  SET_PICTURE,
  SET_TEAM,
  SET_VIDEOS,
  GET_PROJECTS,
  GET_JOBS,
  GET_CONTACT,
  SET_JOBS,
  SET_CONTACT,
  ADD_PROJECT,
  ADD_PROJECT_PHOTO,
  DEL_PROJECT,
} from "./constants";

export async function checkIsEmailPasswordCorrect(
  data,
  history,
  setPasswordMessage,
  savePassword
) {
  const info = {
    url: SEND_LOG_IN,
    method: "POST",
    data,
  };
  try {
    let res = await request(info);
    document.cookie = `token=${JSON.stringify(res.data.data.token)}`;
    if (savePassword) {
      localStorage.setItem("login", data.email);
      localStorage.setItem("password", data.password);
      localStorage.setItem("token",res.data.data.token)
    }
    history.push("/homepage");
  } catch (err) {
    setPasswordMessage("The email or password is incorrect");
  }
}
export function resetPassword(data, history) {
  const info = {
    url: RESET_PASSWORD,
    method: "POST",
    data,
  };
  try {
    request(info).then((res) => {
      history.push({
        pathname: "/reset-password-code",
        state: res.data.data.reset_token,
      });
    });
  } catch (err) {
    console.error(err);
  }
}
export async function sendPassword(data, history) {
  const info = {
    url: RESET_PASSWORD_CODE,
    method: "POST",
    data,
  };
  try {
    let res = await request(info);
    history.push({
      pathname: "/change-password",
      state: data["reset-token"],
    });
  } catch (err) {
    console.error(err);
  }
}
export async function changePassword(data, history) {
  const info = {
    url: RESET_PASSWORD_SEND_PASSWORD,
    method: "POST",
    data,
  };
  try {
    let res = await request(info);
    history.push("/password-changed");
  } catch (err) {
    console.error(err);
  }
}
export async function getHomePagePictures(setPictures) {
  const info = {
    url: GET_PICTURES,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let pictures = await request(info);
    setPictures(pictures.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function setHomePagePicture(data) {
  const info = {
    url: SET_PICTURE,
    method: "POST",
    headers: {
      token: document.cookie,
    },
    data,
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function delHomePagePicture(id) {
  const info = {
    url: DEL_PICTURE + id,
    method: "DELETE",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function getHomePageVideos(setVideos) {
  const info = {
    url: GET_VIDEOS,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let videos = await request(info);
    setVideos(videos.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function setHomePageVideo(data) {
  const info = {
    url: SET_VIDEOS,
    method: "POST",
    data,
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function delHomePageVideo(id) {
  const info = {
    url: DEL_VIDEO + id,
    method: "DELETE",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function getStudioTeam(callBack) {
  const info = {
    url: GET_TEAM,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    callBack(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function setStudioTeam(data) {
  let formData = new FormData();
  let dataEntries = Object.entries(data);
  for (let i = 0; i < dataEntries.length; i++) {
    formData.append(dataEntries[i][0], dataEntries[i][1]);
  }
  const info = {
    url: SET_TEAM,
    method: "PUT",
    data: formData,
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function getStudioMembers(callBack) {
  const info = {
    url: GET_MEMBERS,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    callBack(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function addStudioMember(data) {
  let formData = new FormData();
  let dataEntries = Object.entries(data);
  for (let i = 0; i < dataEntries.length; i++) {
    formData.append(dataEntries[i][0], dataEntries[i][1]);
  }
  const info = {
    url: ADD_MEMBER,
    method: "POST",
    data: formData,
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function delStudioTeamMember(id) {
  const info = {
    url: DEL_MEMBER + id,
    method: "DELETE",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function editStudioMember(data, id) {
  let formData = new FormData();
  let dataEntries = Object.entries(data);
  for (let i = 0; i < dataEntries.length; i++) {
    formData.append(dataEntries[i][0], dataEntries[i][1]);
  }
  const info = {
    url: EDIT_MEMBER + id,
    data: formData,
    method: "PUT",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function getJobs(callBack) {
  const info = {
    url: GET_JOBS,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    callBack(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function setJob(data) {
  let formData = new FormData();
  let dataEntries = Object.entries(data);
  for (let i = 0; i < dataEntries.length; i++) {
    formData.append(dataEntries[i][0], dataEntries[i][1]);
  }
  const info = {
    url: SET_JOBS + 2,
    method: "PUT",
    data: formData,
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function getContacts(callBack) {
  const info = {
    url: GET_CONTACT,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    callBack(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function setContact(data) {
  let formData = new FormData();
  let dataEntries = Object.entries(data);
  for (let i = 0; i < dataEntries.length; i++) {
    formData.append(dataEntries[i][0], dataEntries[i][1]);
  }
  const info = {
    url: SET_CONTACT + 4,
    method: "PUT",
    data: formData,
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function getProjects(callBack, type, category) {
  const info = {
    url: GET_PROJECTS(type, category),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function addProject(data, type, category,setErr) {
  const info = {
    url: ADD_PROJECT(type, category),
    method: "POST",
    data: data,
    headers: {
      token: document.cookie,
    },
  };
  try {
    let res = await request(info);
    return res.data.data;
  } catch (err) {
    setErr(true)
    console.error(err);
  }
}
export async function delProject(id) {
  const info = {
    url: DEL_PROJECT(id),
    method: "DELETE",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
  } catch (err) {
    console.error(err);
  }
}
export async function addProjectPhotos(data, category) {
  const formData = new FormData();
  formData.append("photo", data);
  const info = {
    url: ADD_PROJECT_PHOTO(category),
    method: "POST",
    data: formData,
    headers: {
      token: document.cookie,
    },
  };
  try {
    await request(info);
  } catch (err) {
    console.error(err);
  }
}
