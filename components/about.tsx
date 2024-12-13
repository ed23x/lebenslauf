"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Über Mich
        </motion.h2>
        <motion.div
          className="space-y-6 text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sprachen</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Sprache 1 (Muttersprache)</li>
                <li>Sprache 2 (Muttersprache)</li>
                <li>Sprache 3 (Fortgeschritten)</li>
                <li>Sprache 4 (Mittelstufe)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Technische Fähigkeiten
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Fähigkeit 1</li>
                <li>Fähigkeit 2</li>
                <li>Fähigkeit 3</li>
                <li>Fähigkeit 4</li>
                <li>Fähigkeit 5</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
