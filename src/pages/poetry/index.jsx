import React from "react";
import { poetry } from "./index.utils";
import { Helmet } from "react-helmet";
const Poetry = () => {
	return (
		<main className="main_wrapper">
			<Helmet>
            <meta property="og:site_name" content="Jardarr | Elder Edda"></meta>
            <meta property="og:title" content="Ljóð" />
            <meta property="og:description" content="Поэзия" />
            <meta property="og:image" content="./../img/og-logo.jpg" />
            <meta property="og:type" content="website" />
            </Helmet>
			<div className="main_wrapper_text">
				<div className="main_wrapper_text_string">
					<span>
                        {poetry.map((poem, index) => (
                            <p key={index}>{poem.content}</p>
                        ))}
					</span>
				</div>
				<div className="notes">
					<span>
						<p>jardarr</p>
					</span>
				</div>
			</div>
		</main>
	);
};

export default Poetry;
