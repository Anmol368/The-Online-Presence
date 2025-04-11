import { Outlet } from "react-router-dom";
import Footer from "../web-development/footer";
import Header from "../web-development/header";
function LayoutFour() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutFour;
