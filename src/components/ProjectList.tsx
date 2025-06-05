import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/data/projects';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      <div className='grid grid-cols-3 gap-10'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </>
  );
}
