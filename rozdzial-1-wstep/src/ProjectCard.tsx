import {useState} from 'react';

interface Technology{
    id: string;
    name: string;
}

interface ProjectCardProps{
    title: string;
    description: string;
    technologies: Technology[];
}

export function ProjectCard({ title, description, technologies}: ProjectCardProps){

    const [status, setStatus] = useState("W trakcie");

    const toggleStatus = () => {
        if(status === "W trakcie"){
            setStatus("Ukończony");
        }
        else{
            setStatus("W trakcie");
        }
    }

    return(
        <div style = {{border: '1px solid black', padding: '16px', margin: '16px'}}>
            <h2>{title}</h2>
            <p>{description}</p>

            <h3>Użyte technologie:</h3>
            <ul>
                {technologies.map((tech) => (
                    <li key = {tech.id}>{tech.name}</li>
                ))}
            </ul>

            <button onClick = {toggleStatus}>
                Status: {status}
            </button>
        </div>
    );
}