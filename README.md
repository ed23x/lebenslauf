# Modern Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a dark theme, smooth animations, and a clean, professional design.

## Features

- 🌙 Dark theme by default
- 🎨 Modern, responsive design
- 🚀 Built with Next.js 14
- 💨 Tailwind CSS for styling
- 🎭 Framer Motion animations
- 📱 Mobile-friendly navigation
- 🎯 Smooth scroll behavior
- ⚡ Optimized performance

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.17 or higher)
- npm (v9.0 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ed23x/resume.git
cd resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

```
resume/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact section
│   ├── experience.tsx    # Experience section
│   ├── hero.tsx          # Hero section
│   ├── navigation.tsx    # Navigation component
│   ├── projects.tsx      # Projects section
│   └── theme-provider.tsx # Theme provider component
├── lib/                   # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind CSS configuration
```

## Customization

1. Personal Information:
   - Update the content in each component under the `components/` directory
   - Modify the metadata in `app/layout.tsx`

2. Styling:
   - Colors and theme can be adjusted in `app/globals.css`
   - Tailwind configuration can be modified in `tailwind.config.ts`

3. Projects:
   - Edit the projects array in `components/projects.tsx`
   - Add your own projects and links

4. Experience:
   - Update work history in `components/experience.tsx`
   - Modify the experiences array with your own work experience

5. Contact:
   - Update social links in `components/contact.tsx`
   - Add or remove social media platforms as needed

## Deployment

This project can be deployed to any platform that supports Next.js:

1. Build the project:
```bash
npm run build
```

2. The project uses Next.js static export, making it suitable for static hosting platforms like:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Firebase Hosting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
