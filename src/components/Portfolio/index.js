import React from "react";
import "./portfolio.css";

function Portfolio() {
	return (
		<section class="work row mx-0" id="work">
			<h2 class="col-3 header-text">Work</h2>

			<article class="work-container col-9">
				<div class="project" id="reading-rambo">
					<div>
						<a href="https://github.com/cshepscorp/reading-rambo" target="_blank" rel="noreferrer">
							Reading Rambo: Media Suggestion App
						</a>
						<h4>Used HTML, CSS, Javascript, and SQL</h4>
					</div>
				</div>
				<div class="project" id="pokegen">
					<div>
						<a href="https://github.com/RobertAReedy/pokegen" target="_blank" rel="noreferrer">
							Pokegen: Pokemon Generator
						</a>
						<h4>Used HTML, CSS, Javascript, and SQL</h4>
					</div>
				</div>
				<div class="project" id="dnd">
					<div>
						<a href="https://github.com/wolfgarb/dnd-character-creator" target="_blank" rel="noreferrer">
							DnD Character Generator
						</a>
						<h4>Used HTML, CSS, and JavaScript</h4>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Portfolio;