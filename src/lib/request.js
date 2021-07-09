import { GET_PICTURES, GET_VIDEOS, SEND_LOG_IN } from "./requestUrls";

const axios = require("axios");

export function request(axiosInfo) {
  return new Promise((rslv, rjct) => {
    try {
      axios(axiosInfo)
        .then((response) => {
          rslv(response);
        })
        .catch((err) => {
          rjct(err);
        });
    } catch (err) {
      rjct(err);
    }
  });
}
export function checkIsEmailPasswordCorrect(data) {
  const info = {
    url: SEND_LOG_IN,
    method: "POST",
    data,
    headers: {
      authorization: "12 312d qwd wa arew a",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    request(info).then((res) => {
      // axios.defaults.headers.common["Authorization"] = token;
      console.log(res);
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
export async function getStudioTeam() {
  
}