import React from "react";
import Header from "../../components/Header";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/Footer";
import './Projects.scss';

const Projects = () => {

    return(
        <div className="projects">
                <Header />
                <ProjectList/>
                <Footer />
        </div>
    )
}

export default Projects;