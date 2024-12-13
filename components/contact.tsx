"use client";

import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Kontakt
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Sie können uns gerne per E-Mail kontaktieren und unsere anderen
          Projekte auf Github anschauen.
        </motion.p>
        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:beispiel@domain.de"
            className="hover:text-red-500 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/beispielnutzer"
            className="hover:text-red-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
