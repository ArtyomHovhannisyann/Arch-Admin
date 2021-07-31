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
  };
  try {
    let teamItems = await request(info);
    setTeamItems(teamItems.data.data);
  } catch (err) {
    console.error(err);
  }
}
