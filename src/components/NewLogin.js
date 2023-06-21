import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as api from "../Admin/AdminCRUD";

export default function NewLogin() {
  const [name, setname] = useState();
  const [password, setpassword] = useState();

  const fetchdata = async () => {
    let data = {
      username: "kminchelle",
      password: "0lelplR",
    };
    try {
      await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e.message);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          fetchdata();
        }}
      >
        Submit
      </Button>
    </>
  );
}
