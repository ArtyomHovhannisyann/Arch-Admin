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

export function dataURLtoFile(dataurl, filename = "file") {
  let images = [];
  for (let i = 0; i < dataurl.length; i++) {
    if (isBase64(dataurl[i])) {
      let arr = dataurl[i].split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      images.push(new File([u8arr], filename, { type: mime }));
    } else if (dataurl) {
      dataurl = dataurl.split("/");
      images.push(dataurl[i][dataurl.length - 1]);
    }
  }
  return images;
}

function isBase64(str) {
  var base64regex = /base64/;
  return base64regex.test(str) && str.length > 100;
}
