const axios = require("axios");

export function request(axiosInfo) {
  return new Promise(async (rslv, rjct) => {
    try {
      const response = await axios(axiosInfo);
      rslv(response);
    } catch (err) {
      rjct(err.response);
    }
  });
}

export function dataURLtoFile(dataurl, filename) {
  if (isBase64(dataurl)) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  } else dataurl = dataurl.split("/");
  return dataurl[dataurl.length - 1];
}

function isBase64(str) {
  var base64regex = /base64/;
  return base64regex.test(str) && str.length > 100;
}
