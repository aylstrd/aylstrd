import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "../ui/CanvasRevealEffect";
import AboutGlobeAnimate from "./AboutGlobeAnimate";
import AnimateParagraph from "./AnimateParagraph";
import AnimateTitle from "./AnimateTitle";
import GithubGraph from "./GithubGraph";
import SocialMedia from "./SocialMedia";

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-[16rem] w-full mx-auto p-3 relative lg:h-[10rem] rounded-2xl ml-[-25px]"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-3xl font-bold text-center text-black transition duration-200 opacity-0 dark:text-white group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2">
          {title}
        </h2>
        <p
          className="relative z-10 mt-4 text-sm text-center transition duration-200 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex items-center justify-center w-full h-full px-5 py-2 text-2xl font-bold rounded-full cursor-pointer bg-slate-950 text-purple backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="relative flex items-center justify-center w-full min-h-screen mb-10 overflow-hidden">
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="flex items-center justify-between w-full mb-10 gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>


        <div className="mx-auto flex w-full flex-col lg:max-w-[1500px] lg:flex-row lg:gap-20">
          <div className="lg:mg-18 mb-30 flex w-full flex-col gap-4 text-[90px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[300px] md:leading-relaxed lg:max-w-[120%] lg:text-base">
          <br></br>
            <AnimateParagraph
              paragraph="Saya lulusan Pendidikan Teknologi Informasi dengan keahlian di bidang pengembangan perangkat lunak, manajemen basis data, dan solusi teknologi modern. Saya memiliki kemampuan untuk menganalisis kebutuhan sistem, merancang arsitektur perangkat lunak, dan mengimplementasikan solusi yang efisien sesuai kebutuhan pengguna."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="Berpengalaman dalam proyek teknologi, saya telah membangun aplikasi monitoring skripsi menggunakan metode SDLC Waterfall serta mengembangkan aplikasi absensi karyawan dan e-arsip surat berbais web. Proyek-proyek ini mengintegrasikan pendekatan teknis dan inovatif untuk menciptakan solusi yang efektif dan berdampak positif."
              delay={1.8}
            />
              <AnimateParagraph
              paragraph="Didukung dengan sertifikasi di bidang keamanan informasi, pemrograman, dan perangkat lunak perkantoran, saya berkomitmen untuk terus mengembangkan kemampuan serta berkontribusi secara signifikan pada proyek-proyek teknologi yang relevan dengan kebutuhan industri dan masyarakat."
              delay={2.0}
            />
          </div>
    
          <div className="mb-24 flex w-full flex-col gap-4 leading-relaxed tracking-wide sm:mb-32 md:mb-50 md:gap-6 md:leading-relaxed lg:mb-16 lg:max-w-[100%]">
            <div className="flex flex-col gap-4 md:gap-1">
              <p className="mb-2 text-4xl font-extrabold tracking-tight sm:text-2xl text-ternary-dark dark:text-ternary-light">
                Bidang Diminati
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2"> {/* Tambahkan grid layout di sini */}
                <Card
                  title="Software Development"
                  icon={<AceternityIcon order="1" />}
                  des=""
                >
                  <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
                  />
                </Card>
                <Card
                  title="Data Management & Database Analysis"
                  icon={<AceternityIcon order="2" />}
                  des=""
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
                    colors={[[255, 166, 158], [221, 255, 247]]}
                    dotSize={2}
                  />
                </Card>
                <Card
                  title="General Administration"
                  icon={<AceternityIcon order="3" />}
                  des=""
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
                    colors={[[125, 211, 252]]}
                  />
                </Card>
                <Card
                  title="Office Administration"
                  icon={<AceternityIcon order="4" />}
                  des=""
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-purple-600 rounded-3xl overflow-hidden"
                    colors={[[125, 211, 252]]}
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
