import axios from "axios";

let admin = localStorage.getItem("admin");
axios.defaults.baseURL = "https://kareshmaart.com";

if (!admin) {
  admin = {
    adminId: null,
    token: "",
  };
} else {
  try {
    admin = JSON.parse(admin);
    axios.defaults.headers.common = { Authorization: `bearer ${admin.token}` };
  } catch (err) {
    admin = {
      adminId: null,
      token: "",
    };
  }
}

export default axios;
