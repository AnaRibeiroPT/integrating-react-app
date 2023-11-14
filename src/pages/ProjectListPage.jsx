import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(
        "https://project-management-api-4641927fee65.herokuapp.com/projects?_embed=tasks"
      )
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong...");
        console.log(error);
      });
  };
  
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <h1>List of Projects</h1>

      {projects.map((project) => {
        return (
          <div className="ProjectCard card" key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectListPage;
