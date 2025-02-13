import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectSingleProps {
  id: string | number;
  img: string;
  title: string;
  category: string;
  link?: string;
}

const ProjectSingle: React.FC<ProjectSingleProps> = ({ id, img, title, category, link }) => {
  const targetUrl = link || `/projects/${id}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.7 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link
        href={targetUrl}
        passHref
        aria-label="Single Project"
        target={link ? "_blank" : undefined}
        rel={link ? "noopener noreferrer" : undefined}
      >
        <div className="max-w-screen-lg mx-auto text-white transition-all duration-300 rounded-md cursor-pointer mb-9 hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <Image
              src={img}
              alt={title}
              className="rounded-t-md"
              layout="responsive"
              width={1920}
              height={500}
            />
          </div>
          <div className="px-3 py-3 text-center">
            <p className="mb-3 text-2xl font-general-medium md:text-xl text-ternary-dark dark:text-ternary-light">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
