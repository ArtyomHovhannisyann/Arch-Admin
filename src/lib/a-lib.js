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

function fileFromBase64(base64, filename = "file") {
  if (!isBase64(base64)) throw new Error(`first param must be base 64`);
  let arr = base64.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export function dataURLtoFile(dataurl, filename = "file") {
  if (dataurl instanceof Array) {
    let images = [];
    for (let i = 0; i < dataurl.length; i++) {
      if (isBase64(dataurl[i])) {
        images.push(fileFromBase64(dataurl[i], filename));
      }
    }
    return images;
  } else if (typeof dataurl === "string") {
    return fileFromBase64(dataurl, filename);
  } else {
    return undefined;
  }
}

function isBase64(str) {
  var base64regex = /base64/;
  return base64regex.test(str) && str.length > 100;
}
