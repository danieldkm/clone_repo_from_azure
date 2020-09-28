const azdev = require("azure-devops-node-api");
require("dotenv").config();

// your collection url
const orgUrl = "https://dev.azure.com/kdop";

const token = process.env.AZURE_PERSONAL_ACCESS_TOKEN; // e.g "cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha";

const authHandler = azdev.getPersonalAccessTokenHandler(token);
const connection = new azdev.WebApi(orgUrl, authHandler);

async function start() {
  try {
    const result = await connection.rest.get(
      `${orgUrl}/_apis/result?api-version=2.0`
    );
    console.log("projects", result);
  } catch (error) {
    console.log(error);
  }
}

start();
