import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import _axios from "axios";

import {username, repos, personal_info} from '@info/info';
import './styles.module.scss';
import _ from 'lodash';

function Projects(props) {
  const api = "https://api.github.com/repos";
  const [projectData, setProjectData] = useState([]);

  useEffect(async () => {
    const projects = [];
    for(let item of repos){
      let project = {};
      await _axios.get(`${api}/${username}/${item}`).then(function (response) {
        // handle success
        const raw_data = response.data;
        project.forks_count = raw_data.forks_count;
        project.stargazers_count = raw_data.stargazers_count;
        project.full_name = raw_data.full_name;
        project.description = raw_data.description;

        projects.push(project);
      }).catch(function (error) {
        console.log(error);
      });
    }
    setProjectData(projects);
    return () => {
    };
  }, [projectData.length]);

  return (
    <div id="project" styleName="projects">
      <div styleName="titleWrapper">
        <div styleName="title">Projects</div>
        <div styleName="line" />
      </div>
      <div styleName="projectWrapper">
        {_.map(projectData, (item, index)=>{
          return(
            <div styleName="project" key={index}>
              <div styleName="name">
                <span styleName="icon">&#xe638;</span>
                <a
                  styleName="content"
                  href={`https://github.com/${item.full_name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >{item.full_name}</a>
              </div>
              <div styleName="description">
                {item.description}
              </div>
              <div styleName="info">
                <span styleName="star">&#xe664;</span><span>{item.stargazers_count}</span>
                <span styleName="fork">&#xe625;</span><span>{item.forks_count}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a
        className="btn btn-outline-secondary btn-lg"
        styleName="more "
        href={personal_info.github}
        target="_blank"
        rel="noreferrer noopener"
      >More Projects</a>
    </div>
  );
}

Projects.defaultProps = {
};

Projects.propTypes = {
};

export default Projects;
