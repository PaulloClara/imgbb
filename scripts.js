const axios = require("axios");
const FormData = require("form-data");
const { createReadStream: readFile } = require("fs");

const API_KEY = "";

async function request() {
  const form = new FormData();
  const file = readFile("mamatsu.png");

  form.append("image", file);
  const response = await axios.post(
    `https://api.imgbb.com/1/upload?key=${API_KEY}`,
    form,
    {
      headers: form.getHeaders()
    }
  );

  console.log(response.data.data);
}

request();
console.log("\n\tWait a minute...\n");
