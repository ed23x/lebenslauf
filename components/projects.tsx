"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Hobby 1",
    period: "2010 bis 2019",
    description: "Musikschule in [Stadt]",
  },
  {
    title: "Hobby 2",
    period: "2009 bis 2020",
    description: "Sportverein in [Stadt]",
  },
  {
    title: "Hobby 3",
    period: "Aktiv",
    description: "Regelmäßiges Training",
  },
  {
    title: "Hobby 4",
    period: "Aktiv",
    description: "Verschiedene Projekte",
  },
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
              <h3 className="text-xl font-semibold mb-2 text-red-500">
                {activity.title}
              </h3>
              <p className="text-muted-foreground mb-2">{activity.period}</p>
              <p className="text-sm">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
