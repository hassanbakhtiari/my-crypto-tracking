/** @format */

import FooterComponent from './components/ui/Footer.component';
import NavbarComponent from './components/ui/Navbar.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import FAQPage from './pages/FAQ.page';
import AboutUsPage from './pages/AboutUs.page';
import ContactUsPage from './pages/ContactUs.page';

function App() {
	return (
		<div>
			{/* Navbar */}
			<NavbarComponent />

			{/* Wrapper */}
			<div className="wrapper">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/faq" element={<FAQPage />} />
					<Route path="/aboutus" element={<AboutUsPage />} />
					<Route path="/contactus" element={<ContactUsPage />} />
				</Routes>
			</div>

			<FooterComponent />

			{/* Footer */}
		</div>
	);
}

export default App;
