import axios from "axios";
let baseUrl = "http://172.16.30.64:3000/mock/155/goform";
class Http {
  get(url, data) {
    if (url.indexOf("/") != 0) {
      url = "/" + url;
    }
    if (url.indexOf("?") != -1) {
      url += "&rand=" + Math.random();
    } else {
      url += "?rand=" + Math.random();
    }
    return axios({
      method: "GET",
      baseURL: baseUrl,
      url: url,
      params: data,
      headers: {
        "Content-type": "application/json;charset=utf-8"
      }
    }).then(function (res) {
      return res.data;
    });
  }
  set(url, data) {
    if (url.indexOf("/") != 0) {
      url = "/" + url;
    }
    return axios({
      method: "POST",
      baseURL: baseUrl,
      url: url,
      data: data,
      headers: {
        "Content-type": "application/json;charset=utf-8"
      }
    }).then(function (res) {
      return res.data;
    });
  }
}

let http = new Http();
export default http;
