import { Dispatch, SetStateAction } from 'react';

interface ProjectsFilterProps {
  setSelectProject: Dispatch<SetStateAction<string>>;
}

const selectOptions = [
  'Web Application',
  'Mobile Application'
];

function ProjectsFilter({ setSelectProject }: ProjectsFilterProps) {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="px-4 py-2 text-sm text-white border rounded-lg sm:px-6 dark:border-secondary-dark sm:text-md dark:font-medium bg-secondary-dark dark:bg-ternary-dark text-primary-dark text-ternary-dark ark:border-secondary-dark light:border-secondary-dark light:font-medium light:bg-ternary-dark"
    >
      <option value="" className="text-sm text-white sm:text-md">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className="text-white light:text-black text-normal sm:text-md" key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default ProjectsFilter;