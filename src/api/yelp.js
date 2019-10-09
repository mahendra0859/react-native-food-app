import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer YcqeU3ybHPWOg37dj_lzcSD-QxlDGSDwpDr0gGhVpzVAVW79B8-jD6BlBVTa9bASHgrdQU_M1mZaQrpe2OHkDMwvFDzX1g-XnofWGQTSoVoxXXPFf_GQtLhm7vWYXXYx"
  }
});
