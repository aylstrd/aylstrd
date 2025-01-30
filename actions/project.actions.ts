// Define the type for a project
type Project = {
    id: string;
    title: string;
    liveURL: string;
    thumbnail: string;
};

// Static list of projects
const projects: Project[] = [
    {
        id: "1",
        title: "Personal Portfolio",
        liveURL: "https://portfolio.example.com",
        thumbnail: "https://example.com/images/portfolio-thumbnail.png",
    },
    {
        id: "2",
        title: "E-Commerce Platform",
        liveURL: "https://ecommerce.example.com",
        thumbnail: "https://example.com/images/ecommerce-thumbnail.png",
    },
    {
        id: "3",
        title: "Blog Platform",
        liveURL: "https://blog.example.com",
        thumbnail: "https://example.com/images/blog-thumbnail.png",
    },
];

// Function to fetch all projects
export function getAllProjectsAction(): { projects: Project[] } {
    return { projects };
}

// Function to shuffle projects
function shuffleProjects(projects: Project[]): Project[] {
    const shuffledProjects = [...projects];
    for (let i = shuffledProjects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledProjects[i], shuffledProjects[j]] = [shuffledProjects[j], shuffledProjects[i]];
    }
    return shuffledProjects;
}

// Function to fetch a random selection of projects
export function getRandomProjectsAction(): { title: string; link: string; thumbnail: string }[] {
    const shuffledProjects = shuffleProjects(projects);
    return shuffledProjects.slice(0, 3).map(project => ({
        title: project.title,
        link: project.liveURL,
        thumbnail: project.thumbnail,
    }));
}

// Function to fetch a single project by ID
export function getSingleProjectAction(id: string): Project | null {
    const project = projects.find(project => project.id === id);
    return project || null;
}

// Example usage in logs
console.log("All Projects:", getAllProjectsAction());
console.log("Random Projects:", getRandomProjectsAction());
console.log("Single Project:", getSingleProjectAction("1"));
