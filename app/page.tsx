import NavigationBar from "./components/navbar/NavigationBar";
import Header from "./components/homepage/header/Header";
import dynamic from "next/dynamic";

const Camera = dynamic(() => import("./components/homepage/three-d/Camera"));
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

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Header />
      <PreviousWorks />
      <BrandGrid />
      <Camera></Camera>
      <Door></Door>
      <Footer></Footer>
    </main>
  );
}
