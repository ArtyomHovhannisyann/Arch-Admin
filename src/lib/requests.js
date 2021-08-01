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
} from "./constants";

export function checkIsEmailPasswordCorrect(data, history, setEmailMessage) {
  const info = {
    url: SEND_LOG_IN,
    method: "POST",
    data,
  };
  try {
    request(info).then((res) => {
      document.cookie = `token=${JSON.stringify(res.data.data.token)}`;
      history.push("/homepage");
    });
  } catch (err) {
    setEmailMessage("The email or password is incorrect");
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
      console.log(res.data.data.reset_token);
      history.push({
        pathname: "/reset-password-code",
        state: res.data.data.reset_token,
      });
    });
  } catch (err) {
    console.error(err);
  }
}
export function sendPassword(data, history) {
  const info = {
    url: RESET_PASSWORD_CODE,
    method: "POST",
    data,
  };
  try {
    request(info).then((res) => {
      history.push({
        pathname: "/change-password",
        state: data["reset-token"],
      });
    });
  } catch (err) {
    console.error(err);
  }
}
export function changePassword(data, history) {
  console.log(data);
  const info = {
    url: RESET_PASSWORD_SEND_PASSWORD,
    method: "POST",
    data,
  };
  try {
    request(info).then((res) => {
      console.log(res);
      history.push("/password-changed");
    });
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
    console.log(22);
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
export async function getApartamentsSelectedProjects(callBack) {
  const info = {
    url: GET_PROJECTS(1, 1),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getApartamentsInProgressProjects(callBack) {
  const info = {
    url: GET_PROJECTS(2, 1),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getHousesSelectedProjects(callBack) {
  const info = {
    url: GET_PROJECTS(1, 2),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getHousesInProgressProjects(callBack) {
  const info = {
    url: GET_PROJECTS(2, 2),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getResidentialSelectedProjects(callBack) {
  const info = {
    url: GET_PROJECTS(1, 3),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getResidentialInProgressProjects(callBack) {
  const info = {
    url: GET_PROJECTS(2, 3),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getLandscapeSelectedProjects(callBack) {
  const info = {
    url: GET_PROJECTS(1, 4),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
export async function getLandscapeInProgressProjects(callBack) {
  const info = {
    url: GET_PROJECTS(2, 4),
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    const res = await request(info);
    callBack(res);
  } catch (err) {
    console.error(err);
  }
}
