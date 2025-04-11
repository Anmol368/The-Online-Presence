import { Outlet } from "react-router-dom";
import Footer from "../home-two/footer";
import Header from "../home-two/header-home1";
function LayoutOne() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutOne;
