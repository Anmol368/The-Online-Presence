"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import DropdownItem from "@/components/common/navigation/desktop-nav/DropdownItem";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header
			className="site-header site-header--menu-center aximo-header-section aximo-header2"
			id="sticky-menu"
		>
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
						<NavItem url="/">Home</NavItem>
							{/* <NavItem dropdown title="Demo">
								<Dropdown>
									<DropdownItem url="/">Design Agency</DropdownItem>
									<DropdownItem url="home-two">Startup Agency</DropdownItem>
									<DropdownItem url="seo">SEO Agency</DropdownItem>
									<DropdownItem url="home-four">Business Consultation</DropdownItem>
									<DropdownItem url="home-five">Digital Marketing</DropdownItem>
									<DropdownItem url="home-six">Interior Design Agency</DropdownItem>
									<DropdownItem url="home-seven">Advertising agency</DropdownItem>
								</Dropdown>
							</NavItem> */}
							<NavItem url="about-us">About</NavItem>
							<NavItem dropdown title="Pricing">
								<Dropdown>
									<DropdownItem url="seo-packages">SEO Packages</DropdownItem>
									<DropdownItem url="web-packages">Web Packages</DropdownItem>
									<DropdownItem url="ui-ux-packages">UI/UX Packages</DropdownItem>
									<DropdownItem url="va-packages">VA Packages</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem dropdown title="Services">
								<Dropdown>
									<DropdownItem url="seo-services">SEO Services</DropdownItem>
									<DropdownItem url="web-development">Web Development</DropdownItem>
									<DropdownItem url="ui-ux-services">UI/UX Services</DropdownItem>
									<DropdownItem url="virtual-assistance">Virtual Assistance</DropdownItem>
									{/* <DropdownItem dropdown title="Service">
										<Dropdown noShape>
											<DropdownItem url="service">Service</DropdownItem>
											<DropdownItem url="single-service">Service Details</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									
									{/* <DropdownItem dropdown title={"Team"}>
										<Dropdown noShape>
											<DropdownItem url="team">Team</DropdownItem>
											<DropdownItem url="single-team">Team Details</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									{/* <DropdownItem dropdown title="Account">
										<Dropdown noShape>
											<DropdownItem url="sign-up">Sign Up</DropdownItem>
											<DropdownItem url="sign-in">Sign In</DropdownItem>
											<DropdownItem url="reset-password">Reset Password</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
								</Dropdown>
							</NavItem>
							{/* <NavItem dropdown title="Blog">
								<Dropdown>
									<DropdownItem url="blog">Our Blog</DropdownItem>
									<DropdownItem url="blog-grid">Blog Grid</DropdownItem>
									<DropdownItem url="single-blog">Blog Details</DropdownItem>
								</Dropdown>
							</NavItem> */}
							<NavItem url="blogs">Blogs</NavItem>
							<NavItem url="contact-us">Contact</NavItem>
							<NavItem dropdown title="More">
								<Dropdown>
									<DropdownItem url="portfolio">Portfolio</DropdownItem>
									{/* <DropdownItem dropdown title={"Portfolio"}>
										<Dropdown noShape>
											<DropdownItem url="portfolio-one">Portfolio One Column</DropdownItem>
											<DropdownItem url="portfolio-two">Portfolio Two Column</DropdownItem>
											<DropdownItem url="single-portfolio">Portfolio Details</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									<DropdownItem dropdown title={"Team"}>
										<Dropdown noShape>
											<DropdownItem url="team">Team</DropdownItem>
											<DropdownItem url="single-team">Team Details</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem url="testimonial">Testimonial</DropdownItem>
									{/* <DropdownItem url="faq">FAQ</DropdownItem> */}
									{/* <DropdownItem url="error-page">Error Page</DropdownItem> */}
									{/* <DropdownItem url="coming-soon">Coming Soon</DropdownItem> */}
								</Dropdown>
							</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="The Online Presence" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
