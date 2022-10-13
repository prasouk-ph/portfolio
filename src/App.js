import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="beny_tm_all_wrap">
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="97, 216, 249"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
        outerStyle={{
          zIndex:1001
        }}
        innerStyle={{
          zIndex:1001
        }}
      />
      <ScrollToTop />
      <Routes />
    </div>
  );
};

export default App;
