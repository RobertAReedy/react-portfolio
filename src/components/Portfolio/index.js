import React from "react";

function Portfolio() {
	return (
		<section class="work row mx-0" id="work">
			<h2 class="col-3 header-text">Work</h2>

			<article class="work-container col-9">
				<div class="project feature">
					<div>
						<a href="https://github.com/wolfgarb/dnd-character-creator">
							DnD Character Generator
						</a>
						<h4>Used HTML, CSS, and JavaScript</h4>
					</div>
				</div>
				<div class="project" id="proj-1">
					<div>
						<a href="https://github.com/RobertAReedy/pokegen">
							Pokegen: Pokemon Generator
						</a>
						<h4>Used HTML, CSS, Javascript, and SQL</h4>
					</div>
				</div>
				<div class="project" id="proj-2">
					<div>
						<a href="https://github.com/cshepscorp/reading-rambo">
							Reading Rambo: Media Suggestion App
						</a>
						<h4>Used HTML, CSS, Javascript, and SQL</h4>
					</div>
				</div>
				<div class="project" id="proj-3">
					<div>
						<h3>A Project Name</h3>
						<h4>The languages it used</h4>
					</div>
				</div>
				<div class="project" id="proj-4">
					<div>
						<h3>A Project Name</h3>
						<h4>The languages it used</h4>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Portfolio;