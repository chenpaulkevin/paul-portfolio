import React from "react";
import dynamic from "next/dynamic";

import NavigationBar from "./components/navbar/NavigationBar";
import Header from "./components/homepage/header/Header";

//const Camera = dynamic(() => import("./components/homepage/three-d/Camera"));
const Footer = dynamic(() => import("./components/homepage/footer/Footer"), {
  ssr: false,
});
const BrandGrid = dynamic(
  () => import("./components/homepage/brands/BrandGrid")
);
const PreviousWorks = dynamic(
  () => import("./components/homepage/works/PreviousWorks")
);
const Door = dynamic(() => import("./components/homepage/door/Door"), {
  ssr: false,
});

const Home: React.FC = () => (
  <main>
    <NavigationBar />
    <Header />
    <PreviousWorks />
    <BrandGrid />
    {/* <Camera /> */}
    <Door />
    <Footer />
  </main>
);

export default Home;
