import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectSingleProps {
  id: number | string;
  img: string;
  title: string;
  category: string;
  onClick?: () => void;
}

const ProjectSingle: React.FC<ProjectSingleProps> = ({
  id,
  img,
  title,
  category,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7, delay: 0.15 }}
      onClick={onClick}
      className="relative group"
      style={{ perspective: 1200 }} // Perspektif untuk efek 3D yang lebih halus
    >
      <Link href={`/projects/${id}`} passHref>
        {/* Grid & Border Menyatu */}
        <motion.div
          className="relative overflow-hidden border border-white rounded-xl"
          whileHover={{
            rotateX: 50, // Slight rotation for depth
            translateZ: -20, // Move the element backwards without scaling
            transformOrigin: "center", // Maintain centered rotation
          }}
          transition={{
            type: "spring",
            stiffness: 50, // More soft
            damping: 20, // Reduce bounce
          }}
        >
          {/* Gambar */}
          <Image
            src={img}
            alt="Single Project"
            className="border-none rounded-t-xl"
            layout="responsive"
            width={1200}
            height={800}
          />

          {/* Deskripsi */}
          <div className="px-4 py-6 text-center bg-whitebg-gray-900">
            <p className="mb-2 text-xl font-semibold text-white light:text-black">
              {title}
            </p>
            <span className="text-lg text-white">
              {category}
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
