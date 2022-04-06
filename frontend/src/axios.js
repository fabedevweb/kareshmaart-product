import axios from "axios";

let admin = localStorage.getItem("admin");
axios.defaults.baseURL = "http://109.234.162.107:3000/api/";

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
