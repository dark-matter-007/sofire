import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./state/store";
import Header from "./components/Header";
import Home from "./components/Home";
import LandingScreen from "./components/LandingScreen";
import "./App.css";
import AndroidStore from "./components/MobileStore/MobileStore";

function App() {
  const showLandingScreen = useSelector(
    (state) => state.master.showLandingScreen
  );
  const showHome = useSelector((state) => state.master.showHome);
  const showAndroidStore = useSelector(
    (state) => state.master.showAndroidStore
  );

  // FOR GOOGLE ANALYTICS
  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-SBMDYEX0Z4');
  }, []);

  return (

    <Provider store={store}>
      <div className=" h-screen w-screen overflow-x-hidden overflow-y-scroll scrollbar-hide pb-10">
        <Header />
        {showLandingScreen && <LandingScreen />}
        {showHome && <Home />}
        {showAndroidStore && <AndroidStore />}
      </div>
    </Provider>
  );
}

export default App;
