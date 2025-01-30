// Definisi tipe untuk proyek
type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
};

// Data proyek
const projects: Project[] = [
  {
    id: "1",
    title: "Project 1",
    description: "Description of Project 1",
    link: "https://example.com/project1",
    thumbnail: "/images/raiden.png"
  },
  {
    id: "2",
    title: "Project 2",
    description: "Description of Project 2",
    link: "https://example.com/project2",
    thumbnail: "/images/project2.jpg"
  },
  {
    id: "3",
    title: "Project 3",
    description: "Description of Project 3",
    link: "https://example.com/project3",
    thumbnail: "/images/project3.jpg"
  },
  {
    id: "4",
    title: "Project 4",
    description: "Description of Project 4",
    link: "https://example.com/project4",
    thumbnail: "/images/project4.jpg"
  },
  {
    id: "5",
    title: "Project 5",
    description: "Description of Project 5",
    link: "https://example.com/project5",
    thumbnail: "/images/project5.jpg"
  }
];

export default projects;
