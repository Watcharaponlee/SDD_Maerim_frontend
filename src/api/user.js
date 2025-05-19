import axios from "axios";

export class UserService {
  constructor(context) {
    this.context = context;
    this.baseUrl = this.getBaseUrl(); // ใช้ getBaseUrl() ในการกำหนด baseUrl
    this.token = localStorage.getItem("token");
    // this.baseUrl = import.meta.env.VITE_APP_BASE_URL;
  }

  getBaseUrl() {
    const isDevLocalhost =
      window.location.hostname === "localhost" &&
      window.location.port === "5173";

    if (isDevLocalhost) {
      // Dev mode: ใช้จาก env
      return import.meta.env.VITE_APP_BASE_URL;
    } else {
      // ใช้ hostname ของเครื่องปัจจุบัน + port 3040 + path เดิม
      const protocol = "http";
      const hostname = window.location.hostname;
      const port = "3040";
      return `${protocol}://${hostname}/facetime/`;
    }
  }

  async SignIn(Userdata) {
    return this.sendRequest("post", "signin/adminsignin", Userdata);
  }

  async SignOut() {
    return this.sendRequest("post", "signin/signout");
  }

  async AuthState() {
    return this.sendRequest("get", "admin/callme");
  }

  async sendRequest(method, endpoint, data = null) {
    let responseData = null;

    const config = {
      method,
      maxBodyLength: Infinity,
      url: `${this.baseUrl}${endpoint}`,
      headers: {
        "Content-Type": method === "post" ? "application/json" : undefined,
        token: method === "get" ? this.token : undefined, // Add token for GET requests only
      },
      withCredentials: true,
    };

    if (data) {
      config.data = data;
    }

    await axios
      .request(config)
      .then((response) => {
        responseData = response.data;
      })
      .catch((error) => {
        responseData = { error: error.message, data: error?.response?.data };
        console.log(error);
      });

    return responseData;
  }
}
