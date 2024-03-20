const axios = require("axios");

// Define the base URL of your API
const baseURL = "http://127.0.0.1:8000/";

// Function to make a POST request to your API
async function testSubscribe() {
  try {
    const data = {
      name: "ali",
      email: "aliaalsadadi@outlook.com",
    };

    const response = await axios.post(baseURL + "subscribe/", data);
    console.log("POST Response:", response.data);
  } catch (error) {
    console.error("POST Error:", error.message);
  }
}
async function testUnsubcribe(hash) {
  try {
    const response = await axios.get(baseURL + "unsubscribe/" + hash);
    console.log("Delete respones:", response);
  } catch (error) {
    console.error("POST ERROR", error.message);
  }
}

testSubscribe();
// testUnsubcribe("71a92091-d868-4dd1-bb3d-d9078f2670f1");
