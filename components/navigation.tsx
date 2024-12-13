'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Über Mich', href: '#about' },
  { name: 'Bildung & Erfahrung', href: '#experience' },
  { name: 'Aktivitäten', href: '#projects' },
  { name: 'Kontakt', href: '#contact' },
];

export function Navigation() {
  return (
    <motion.header
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-500">
              ED
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-red-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}