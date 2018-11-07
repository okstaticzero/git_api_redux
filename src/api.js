import axios from "axios";

const API_BASE_URL = "https://api.github.com/";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
export function fetchList(company) {
  return client.get(`/orgs/${company}/members`);
}

export function fetchUser(userID) {
  return client.get("/users/" + userID);
}

export function fetchUserRepo(userID) {
  return client.get("/users/" + userID + "/repos");
}

export function fetchUserOrgs(userID) {
  return client.get("/users/" + userID + "/orgs");
}
