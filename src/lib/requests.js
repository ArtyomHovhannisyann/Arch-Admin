import { request } from "./a-lib";
import {
  GET_PICTURES,
  GET_TEAM,
  GET_VIDEOS,
  RESET_PASSWORD,
  SEND_LOG_IN,
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
export function resetPassword(data,history) {
  const info = {
    url: RESET_PASSWORD,
    method: "POST",
    data,
  };
  try {
    request(info).then((res) => {
      console.log(res);
      history.push("/reset-password-code");
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
