"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Bildung",
    company: "Landfermann Gymnasium Duisburg",
    period: "2019 - heute",
    description: "Gymnasiale Ausbildung",
  },
  {
    title: "Bildung",
    company: "GGS Astrid-Lindgren-Schule Duisburg",
    period: "2015 - 2019",
    description: "Grundschulausbildung",
  },
  {
    title: "Praktikum",
    company: "Hanna-Zürndorfer-Schule Düsseldorf",
    period: "27.04.2023",
    description: "Schulpraktikum",
  },
  {
    title: "Praktikum",
    company: 'Kunstwerkstatt "CITYARTSUKOV" Duisburg',
    period: "14.02.2023",
    description: "Kunstpraktikum",
  },
  {
    title: "Praktikum",
    company: "Thomas Blatt Rechtsanwaltskanzlei Duisburg",
    period: "30.01.2023",
    description: "Rechtspraktikum",
  },
  {
    title: "Praktikum",
    company: "Krankikom GMBH",
    period: "13.01 - 17.01.2025",
    description: "Einwöchiges Praktikum bei einer Softwarefirma",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Bildung & Erfahrung
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-red-500">
                {exp.title}
              </h3>
              <p className="text-muted-foreground mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
