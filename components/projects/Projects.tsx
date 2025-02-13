import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../lib/projectData';
import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid() {
  const [searchProject, setSearchProject] = useState<string>('');
  const [selectProject, setSelectProject] = useState<string>('');

  // Filter project by category and search query
  const filteredProjects = projectsData.filter((item) => {
    const categoryMatch = selectProject
      ? item.category.toLowerCase().includes(selectProject.toLowerCase())
      : true;

    const titleMatch = searchProject
      ? item.title.toLowerCase().includes(searchProject.toLowerCase())
      : true;

    return categoryMatch && titleMatch;
  });

  return (
    <section id="projects" className="py-5 mt-5 sm:py-10 sm:mt-10">
      <div className="text-center">
        <p className="mb-2 text-4xl font-extrabold tracking-tight text-white sm:text-7xl text-ternary-dark">
          Project
        </p>
      </div>

      <div className="mt-9 sm:mt-16">
        <h3 className="mb-3 text-center text-white font-general-regular text-secondary-dark text-ternary-dark text-md sm:text-xl">
          Search projects by title or filter by category
        </h3>
        <div className="flex justify-between gap-2 pb-2 border-b">
          <div className="flex justify-between gap-2">
            <span className="hidden sm:block p-2.5 shadow-sm rounded-xl cursor-pointer">
              <FiSearch className="w-5 h-5 text-white" />
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="py-2 pl-3 pr-1 text-sm text-white border border-gray-200 rounded-lg font-general-medium sm:px-4"
              id="name"
              name="name"
              type="search"
              required
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className="grid text-white grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 max-w-[1200px]">
        {filteredProjects.map((project) => (
          <ProjectSingle key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;