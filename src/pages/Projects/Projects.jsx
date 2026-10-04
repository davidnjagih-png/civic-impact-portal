import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import projectsData from "../../data/projectsData";

function Projects() {
  const [serch, setSearch] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(serch.toLowerCase()),
  );

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1>Development Projects</h1>
        <p>
          Explore our diverse range of development projects aimed at improving
          infrastructure, healthcare, education, and community well-being.
        </p>
      </section>

      <section className="projects-container">
        <input
          type="text"
          placeholder="Search projects..."
          value={serch}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
