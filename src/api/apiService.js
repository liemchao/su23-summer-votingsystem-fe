
import axios from "axios";



/* Login */
const Login = (data) => {
  // return axios.post("https://backup-dtv-crm.azurewebsites.net/api/v1/Authentication/system", data);
};

/* Logout */
const Logout = () => {
  localStorage.clear();
};

export default {
  Login,
  Logout,


 
};
