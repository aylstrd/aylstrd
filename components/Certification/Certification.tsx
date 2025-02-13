import { useState, useEffect } from "react";
import ProjectSingle from "../Certification/CertificationSingle";
import { projectsData } from "../../lib/projectData2";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const ProjectsGrid: React.FC = () => {
  // Membagi data ke dalam grup dengan 4 item per baris
  const groupedProjects = [];
  for (let i = 0; i < projectsData.length; i += 4) {
    groupedProjects.push(projectsData.slice(i, i + 4));
  }

  return (
    <section id="certification" className="py-5 mt-5 sm:py-10 sm:mt-10">
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <p className="mb-2 text-4xl font-extrabold tracking-tight text-white sm:text-7xl text-ternary-dark dark:text-ternary-light">
          Certification
        </p>
        <br />
        <br />
      </motion.div>

      {/* Container untuk grid dengan ukuran yang lebih bersih */}
      <div className="w-full max-w-[1500px] px-5 mx-auto">
        {groupedProjects.map((group, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="grid w-full grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: rowIndex * 0.2, // Delay sedikit untuk setiap baris
            }}
          >
            {group.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, y: 20 }} // Animasi muncul dari bawah
                animate={{
                  opacity: 1,
                  y: 0, // Bergerak ke posisi normal
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="w-full"
              >
                {/* Direct scroll-triggered animation */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <ProjectSingle {...project} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
