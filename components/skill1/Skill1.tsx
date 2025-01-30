"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "react",
  "express",
  "next",
  "nodedotjs",
  "vercel",
  "javascript",
  "php",
  "go",
  "dart",
  "kotlin",
  "html5",
  "css3",
  "flutter",
  "figma",
  "framework",
  "mysql",
  "postgresql",
  "sequelize",
  "dbeaver",
  "git",
  "github",
  "postman",
  "xampp",
  "wordpress",
  "moodle",
  "linux",
  "supabase",
  "vim",
  "netlify"
];

function Skills() {
  return (
    <div id="skills"  className="py-10 my-10">
       <p className="mb-2 text-4xl font-extrabold tracking-tight sm:text-7xl text-ternary-dark dark:text-ternary-light">
        Skills & Technologies
      </p>
      <br></br>
      <br></br>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
