import { NavLink, Redirect } from "react-router-dom";
import http from "../http-commonsignup";

class SignupDataService {
  // getAll() {
  //   return http.get("/material");
  // }

  // get(id) {
  //   return http.get(`/material/${id}`);
  // }

 // login(data) {
  //  return http.post("/signin", data);
 // }

  signup(data) {
    return http.post("/signup", data);
    var result=data.result;
  if(result==='Success'){
    console.log(result);
  console.log('login');
  }
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

export default new SignupDataService();