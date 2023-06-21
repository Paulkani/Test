import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Firstpage() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [age, setage] = useState();
  const [gender, setgender] = useState();
  const [result, setresult] = useState(false);

  // const { token } = useSelector(
  //   ({ auth }) => ({
  //     token: auth.token,
  //   }),
  //   shallowEqual
  // );
  // console.log(token);

  const CardBenefits = [
    {
      id: 1,
      avatar: "",
      avatarbg: "linear-gradient(180deg, #FF84CD 0%, #FEB8B8 100%)",
      benefitsHead: "Design Board",
      benefitsContent: "Add many design requests to your board as you'd like",
    },
  ];
  let data;

  const formsubmit = () => {
    data = {
      name: name,
      age: age,
      gender: gender,
    };
    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
          setresult(false);
        }}
      ></input>
      <select
        value={age}
        onChange={(e) => {
          setage(e.target.value);
        }}
      >
        <option value=""></option>
        <option value="20-30">20-30</option>
        <option value="30-40">30-40</option>
        <option value="40-50">40-50</option>
      </select>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => {
          setgender(e.target.value);
        }}
        value={gender}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
      <Button
        variant="contained"
        onClick={() => {
          formsubmit();
          setresult(true);
          // navigate("/demopage");
        }}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        onClick={(e) => {
          setname("");
          setgender(null);
          setage("");
        }}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        onClick={(e) => {
          navigate("/demopage");
        }}
      >
        DemoPage
      </Button>
      {result ? (
        <>
          <h1>Name : {name ? name : <></>}</h1>
        </>
      ) : (
        <>{null}</>
      )}

      <h2>Age : {data?.age}</h2>
    </>
  );
}
