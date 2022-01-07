import http from "../http-common";

class LoginDataService {
  // getAll() {
  //   return http.get("/material");
  // }

  // get(id) {
  //   return http.get(`/material/${id}`);
  // }

  login(data) {
    return http.post("/signin", data);
  }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/tutorials`);
  // }

  // findByTitle(title) {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

export default new LoginDataService();