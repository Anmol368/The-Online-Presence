import { Outlet } from "react-router-dom";
import Footer from "../seo-services/footer";
import Header from "../seo-services/header";
function LayoutThree() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutThree;
