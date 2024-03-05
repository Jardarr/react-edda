import { poetry } from "./index.utils";
const Poetry = () => {
	return (
		<main className="main_wrapper" style={{ height: "100dvh" }}>
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
