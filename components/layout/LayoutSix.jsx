import { Outlet } from "react-router-dom";
import Footer from "../ui-ux-services/footer";
import Header from "../ui-ux-services/header";
function LayoutSix() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutSix;
