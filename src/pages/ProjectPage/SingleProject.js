import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';

const SingleProject = () => {
    // const [project] = useSingleProject()
    // const [projects] = useProjects()
    // const { id } = useParams()
    // const [project, setProject] = useState({})
    // console.log(projects);

    useEffect(() => {
        fetch('Project.json')
            .then((response) => response.json())
            .then((messages) => { console.log("messages"); });
    }, [])

    return (
        <div>
            single project
        </div>
    );
};

export default SingleProject;