import Image from "next/image";
import ParentWrapper from "./parent-wrapper";
import NavigationBar from "./components/navbar/NavigationBar";
import Header from "./components/homepage/header/Header";
import PreviousWorks from "./components/homepage/works/PreviousWorks";
import BrandGrid from "./components/homepage/brands/BrandGrid";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Header />
      <PreviousWorks />
      <BrandGrid />
    </main>
  );
}