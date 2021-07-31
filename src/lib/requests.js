import { request } from "./a-lib";
import {
  DEL_PICTURE,
  DEL_VIDEO,
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
export async function getStudioTeam(setTeamItems) {
  const info = {
    url: GET_TEAM,
    method: "GET",
    headers: {
      token: document.cookie,
    },
  };
  try {
    let teamItems = await request(info);
    setTeamItems(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
export async function setStudioTeam(data) {
  let formData = new FormData()
  let dataEntries = Object.entries(data);
  for (let i = 0; i < dataEntries.length; i++) {
    formData.append(dataEntries[i][0],dataEntries[i][1])
  } 
  const info = {
    url: SET_TEAM,
    method: "PUT",
    data : formData,
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
