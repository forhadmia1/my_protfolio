import { useEffect, useState } from "react";

const useProjects = () => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/forhadmia1/my_protfolio/main/public/Project.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
    }, [])
    console.log('from hook', projects);
    return [projects, loading]
};

export default useProjects;