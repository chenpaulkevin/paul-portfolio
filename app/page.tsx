import Image from "next/image";
import ParentWrapper from "./parent-wrapper";
import NavigationBar from "./components/navbar/NavigationBar";
import Header from "./components/homepage/header/Header";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Header></Header>
    </main>
  );
}
