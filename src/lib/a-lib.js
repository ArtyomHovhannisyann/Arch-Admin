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
