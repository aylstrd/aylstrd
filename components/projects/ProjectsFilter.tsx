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
      className="px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-lg sm:px-6"
    >
      <option value="" className="text-sm text-gray-700 bg-gray-100 sm:text-md">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className="text-gray-700 bg-gray-100 text-normal sm:text-md" key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default ProjectsFilter;