# My Portfolio

A modern, professional portfolio website built with React, Vite, and Tailwind CSS. Features dynamic content management through Contentful CMS and is deployable to GitHub Pages.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast build times with Vite
- 📱 Mobile-friendly navigation
- 🔄 Dynamic content management with Contentful CMS
- 🚀 Easy deployment to GitHub Pages
- 📊 Project showcase
- 💼 Skills section
- 📧 Contact form

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **CMS**: Contentful (optional)
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/self_portfolio.git
cd self_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Configuration

### Contentful Setup (Dashboard for Editing Content)

To manage your portfolio content through a dashboard (without touching code):

1. **Follow the complete guide**: See [CONTENTFUL_SETUP.md](CONTENTFUL_SETUP.md) for detailed step-by-step instructions

2. **Quick Summary**:
   - Create a free Contentful account
   - Set up 3 content types: About, Skills, Projects
   - Add your content through the dashboard
   - Get your API keys
   - Add them to a `.env` file
   - Restart the dev server

**What you can edit through the dashboard:**
- ✏️ Name, title, and bio
- 🖼️ Profile picture
- 💼 Skills (Frontend, Backend, Database, Tools)
- 🚀 Projects (with descriptions, technologies, images, links)
- 📧 Contact information

### Manual Editing (Without Dashboard)

If you don't want to use Contentful, you can edit these files directly:
   - `src/components/About.jsx` - Your name and bio
   - `src/components/Contact.jsx` - Your contact information
   - `src/components/Footer.jsx` - Footer text

2. **Skills**: Edit the skills array in `src/components/Skills.jsx`

3. **Projects**: Update the projects array in `src/components/Projects.jsx`

4. **Styling**: Modify `tailwind.config.js` for custom colors and styling

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

1. Update the `base` field in `vite.config.js` with your repository name:
```javascript
base: '/your-repo-name/',
```

2. Deploy:
```bash
npm run deploy
```

Your portfolio will be live at `https://yourusername.github.io/your-repo-name/`

## Project Structure

```
self_portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── contentful.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Customizing Content Without Code

Once Contentful is configured, you can manage your portfolio content through the Contentful dashboard:

1. Log in to Contentful
2. Navigate to "Content"
3. Add/edit your skills, projects, and about information
4. Changes will automatically reflect on your website

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you encounter any issues, please open an issue on GitHub.

---

Built with ❤️ using React, Vite, and Tailwind CSS
