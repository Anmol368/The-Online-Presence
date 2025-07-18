import { inter, playfair_display } from "../fonts";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

// fonts
import "../../public/css/fontawesome.css";
import "../../public/css/icomoon.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImportBsJS from "@/components/BootstrapClient";
import Footer from "@/components/home-one/footer";
import Header from "@/components/home-one/header";

// main css
import "../../public/css/app.css";
import "../../public/css/main.css";
import "../../public/css/mobile-nav.css";
import ScrollToTop from "@/components/common/ScrollToTop";

export const metadata = {
	title: "Creative UI/UX Studio | Design That Works",
	description: "Get custom UI/UX designs that reflect your brand style. Our expert team crafts aesthetic, responsive, and user-first website experiences that convert.​",
};

export default function HomeSixLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${playfair_display.variable}`}>
				<ImportBsJS />
				<Header />
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
