import { Outlet } from "react-router";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";
import Footer from "../core-components/footer";

export default function LayoutMain() {
  return (
    <>
      <Header />

      <MainContent className="mt-4 md:mt-8">
        <Outlet />
      </MainContent>

      <Footer />
    </>
  );
}
