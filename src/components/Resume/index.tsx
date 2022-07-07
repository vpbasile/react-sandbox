// CSS
import '../../css/bootstrap.css';
import '../../css/palette.css';
import './resume.css';

// Resume parts
import Header from "./Header"
import Sidebar from "./Sidebar"
import MainContent from './MainContent';
import Footer from './Footer';

export default function Resume(props: {}) {
	return (
		<div className="site" id="page">
			<div className="wrapper" id="full-width-page-wrapper">
				<div className="container" id="content">
					<div className="row">
						<div className="col-md-12 content-area" id="primary">
							<main className="site-main" id="main" role="main">
								<Header />
								<div className="row">
									<div className="col">
										<h2 id="headline" className="text-center section-heading"> Proven Leadership, Complex Problem - solving, Client - Focused Relationship Building </h2>
									</div>
								</div>

								<div className="container row">
									<Sidebar />
									<MainContent />
								</div>
								<Footer />
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}