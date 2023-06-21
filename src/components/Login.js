import React from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as api from "../Admin/AdminCRUD";
import * as auth from "../Admin/authredux";

function Login(props) {
  console.log(props);
  const navigate = useNavigate();

  const login = async () => {
    let data = {
      username: "kminchelle",
      password: "0lelplR",
    };

    try {
      await api
        .login(data)
        .then(({ data: { token } }) => {
          props.login(token);
          navigate("/firstpage");
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
      <button
        onClick={() => {
          login();
        }}
      >
        Submit
      </button>
    </>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
