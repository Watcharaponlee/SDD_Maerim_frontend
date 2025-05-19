import axios from "axios";

export class DeviceService {
  constructor(context) {
    this.context = context;
    this.baseUrl = this.getBaseUrl();
    this.token = localStorage.getItem("token");
  }

  getBaseUrl() {
    const isDevLocalhost =
      window.location.hostname === "localhost" &&
      window.location.port === "5173";

    if (isDevLocalhost) {
      // Dev mode: ใช้จาก env ตามปกติ
      return import.meta.env.VITE_APP_BASE_URL;
    } else {
      // ใช้ hostname ของเครื่องปัจจุบัน + port 3040 + path เดิม
      const protocol = "http";
      const hostname = window.location.hostname;
      const port = "3040";
      return `${protocol}://${hostname}/facetime/`;
    }
  }

  async getDevice(ID) {
    return this.sendRequest("get", `device/listbysiteid/${ID}`);
  }

  async getDeviceById(ID) {
    return this.sendRequest("get", `device/listbyid/${ID}`);
  }

  async CreateDevice(ID, DeviceData) {
    return this.sendRequest("post", `device/create/${ID}`, DeviceData);
  }

  async DeleteDevice(ID) {
    return this.sendRequest("delete", `device/delete/${ID}`);
  }

  async UpdateDevice(ID, UpdateData) {
    return this.sendRequest("put", `device/update/${ID}`, UpdateData);
  }

  async sendRequest(method, endpoint, data = null) {
    let responseData = null;

    const config = {
      method,
      maxBodyLength: Infinity,
      url: `${this.baseUrl}${endpoint}`,
      headers: {
        token: this.token,
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
      });

    return responseData;
  }
}