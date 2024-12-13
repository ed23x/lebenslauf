"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Klavier",
    period: "6. Lebensjahr bis 2019",
    description: "Sankt Petersburger Musikschule Duisburg",
  },
  {
    title: "Eishockey",
    period: "5. Lebensjahr bis 2020",
    description: "Eissport-Verein Duisburg",
  },
  {
    title: "Kampfsport",
    period: "Aktiv",
    description: "Regelmäßiges Training",
  },
  {
    title: "Softwareentwicklung",
    period: "Aktiv",
    description: "Von Scripts bis NextJS projekten, wie dieses",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Aktivitäten & Hobbys
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg border border-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-red-500">{activity.title}</h3>
              <p className="text-muted-foreground mb-2">{activity.period}</p>
              <p className="text-sm">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}