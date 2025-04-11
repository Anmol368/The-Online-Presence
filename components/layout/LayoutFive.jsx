import { Outlet } from "react-router-dom";
import Footer from "../virtual-assistance/footer";
import Header from "../virtual-assistance/header";
function LayoutFive() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutFive;
