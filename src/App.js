import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import Firstpage from "./components/Firstpage";
import Demopage from "./components/Demopage";
import { IntlProvider } from "react-intl";
import NewLogin from "./components/NewLogin";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const a = useRef("Hello");

  useEffect(() => {
    fetchData();
  }, []);

  // let country = data.filter(()=>{

  // })
  console.log(a.current.valueOf);

  return (
    <Provider store={store}>
      <IntlProvider>
        <div className="App">
          {/* <Navigation /> */}
          {/* <Firstpage /> */}
          {/* <Demopage /> */}
          <NewLogin/>
        </div>
      </IntlProvider>
    </Provider>
  );
}

export default App;
