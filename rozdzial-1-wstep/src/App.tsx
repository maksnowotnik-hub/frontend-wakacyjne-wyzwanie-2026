import {ProjectCard} from './ProjectCard';

export default function App(){
  const techList = [
    {id: "1", name: "React" },
    {id: "2", name: "TypeScript" },
    {id: "3", name: "Git"}
  ];

  return(
    <main style = {{padding: '2rem'}}>
      <h1>Zadanie 1</h1>

    <ProjectCard
      title = "Wizytówka Projektu"
      description = "Pierwsze zadanie z wakacyjnego wyzwania!"
      technologies = {techList}
    />
    </main>
  );
}