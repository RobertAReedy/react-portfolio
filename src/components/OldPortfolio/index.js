import React from "react";

const oldPortfolio = () => {
  return (
    <body>
        

        <section class="hero">
            <h3>Three steps forward, two steps back</h3>
        </section>

        <section class="about-me row mx-0" id="about-me">
            <h2 class="col-3 header-text">About Me</h2>
            <p class="col-9"> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil sunt explicabo voluptate sapiente, reprehenderit aspernatur voluptatibus nulla voluptates eum omnis suscipit blanditiis voluptas quidem. Incidunt suscipit aut ipsa quam?
            </p>
        </section>

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
                        <h3>A Project Name</h3>
                        <h4>The languages it used</h4>
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

        <section class="row mx-0" id="contact">
            <h2 class="col-3 header-text">Contact Me</h2>

            <div class="col-9 contact-list">                
                <a href="tel:804.551.1708">804-551-1708</a>                
                <a href="mailto:robertandreedy@gmail.com">robertandreedy@gmail.com</a>
                <a href="https://github.com/RobertAReedy/">Github</a>                
                <a href="https://www.twitter.com">Twitter</a>
                <a href="https://www.spotify.com">Spotify</a>
            </div>
        </section>

    </body>
  );
};

export default oldPortfolio;