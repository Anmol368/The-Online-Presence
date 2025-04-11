import { Outlet } from "react-router-dom";
import Footer from "../home-one/footer-home2";
import Header from "../home-one/header";

function LayoutTwo() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutTwo;
