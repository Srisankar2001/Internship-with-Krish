import dotenv from "dotenv";
dotenv.config();

const url_v1 =
  "http://localhost:3000/v1/trip/search?from=srilanka&to=india&date=10-10-2025";
const url_v2 =
  "http://localhost:3000/v2/trip/search?from=srilanka&to=india&date=10-10-2025";

const version = process.env.API_VERSION;
console.log(version);
console.log(typeof version);
if (version == "1") {
  try {
    const response = await fetch(url_v1, { method: "GET" });
    console.log(response);
  } catch (error) {
    console.log("Error");
  }
} else if (version == "2") {
  try {
    const response = await fetch(url_v2, { method: "GET" });
    console.log(response);
  } catch (error) {
    console.log("Error");
  }
}
