import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  // Daftar posisi teks
  const positions = ["top", "bottom", "left", "right"];

  // Fungsi untuk mengatur posisi teks secara teratur
  const getPosition = (index: number): "top" | "bottom" | "left" | "right" => {
    return positions[index % positions.length] as "top" | "bottom" | "left" | "right";
  };

  // Daftar skill
  const skills = [
    { name: "JavaScript", images: "/images/javascript.jpeg" },
    { name: "HTML5", images: "/images/html5.jpeg" },
    { name: "CSS3", images: "/images/css3.jpeg" },
    { name: "TypeScript", images: "/images/typescript.jpeg" },
    { name: "Tailwind CSS", images: "/images/tailwind.jpeg" },
    { name: "Node.js", images: "/images/nodejs.jpeg" },
    { name: "React", images: "/images/react.jpeg" },
    { name: "MySQL", images: "/images/mysql.jpeg" },
    { name: "Express Js", images: "/images/expressjs.png" },
    { name: "Next Js", images: "/images/nextjs.png" },
    { name: "Vercel", images: "/images/Vercel.png" },
    { name: "PHP", images: "/images/php2.png" },
    { name: "Golang", images: "/images/go.png" },
    { name: "Dart", images: "/images/dart2.png" },
    { name: "Kotlin", images: "/images/kotlin.png" },
    { name: "Flutter", images: "/images/flutter.png" },
    { name: "Figma", images: "/images/figma.png" },
    { name: "PostgreSQL", images: "/images/postgresql.png" },
    { name: "Dbeaver", images: "/images/dbeaver.png" },
    { name: "Git", images: "/images/git.png" },
    { name: "Github", images: "/images/github.png" },
    { name: "Wordpress", images: "/images/wordpress.png" },
    { name: "Moodle", images: "/images/moodle.png" },
    { name: "Sequelize", images: "/images/sequelize.png" },
    { name: "SQL", images: "/images/sql.png" },
    { name: "Microsoft Office", images: "/images/microsoft-office.png" },
    { name: "XAMPP", images: "/images/xampp2.png" },
    { name: "Windows", images: "/images/windows.png" },
    { name: "Linux", images: "/images/linux.png" },
    { name: "Postman", images: "/images/postman.png" },
    { name: "Visual Studio Code", images: "/images/vsc.png" },
    { name: "Raiden", images: "/images/raiden.png" },
    { name: "Netlify", images: "/images/netlify2.png" },
    { name: "Supabase", images: "/images/supabase.png" },
    { name: "Vim", images: "/images/vim2.png" },
    { name: "Boostrap", images: "/images/boostrap.png" },
  ];

  return (
    <motion.div
      className="h-screen flex relative flex-col  text-white text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-9 gap-4"
      >
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            images={skill.images}
            position={getPosition(index)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
