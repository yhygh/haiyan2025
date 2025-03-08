import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";

const setTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

/**
 * A wrapper around axios API call that formats errors, etc
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data {optional} data in JSON form for POST requests
 */
const apiCall = (method, path, data) => {
  console.log(`inside apiCall, path=${path} data =`);
  console.log(data);

  // debugger;
  return new Promise((resolve, reject) => {
    const config = {
      method: method.toLowerCase(),
      url: path,
      ...(method.toLowerCase() === "get" ? { params: data } : { data }),
    };

    axios(config)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        console.log("apiCall getting data error:");
        console.log(err.response);
        return reject(err.response.data.error);
      });
  });
};

export { setTokenHeader, apiCall };
