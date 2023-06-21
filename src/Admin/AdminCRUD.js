import axios from "axios";
import React from "react";

export function login(data) {
  return axios.post(`https://dummyjson.com/auth/login`, data);
}
