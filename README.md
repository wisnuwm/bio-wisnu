# Wisnu Munawar - Personal Website

A modern, professional personal website for Wisnu Munawar, Senior QA Automation Engineer. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Professional, clean interface inspired by Vercel, Linear, and Stripe
- **Dark Mode**: System-aware dark mode with smooth transitions
- **Responsive Design**: Perfect display on mobile, tablet, desktop, and ultrawide monitors
- **Smooth Animations**: Professional animations using Framer Motion
- **SEO Optimized**: Metadata API, Open Graph, Twitter Cards, robots.txt, sitemap.xml
- **Fast Performance**: Optimized for 95+ Lighthouse scores
- **Content Management**: JSON-based content files for easy updates
- **Type Safety**: Full TypeScript implementation

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📁 Project Structure

```
bio-wisnu/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and theme configuration
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page with all sections
├── components/            # React components
│   ├── navigation.tsx     # Sticky navigation bar
│   ├── sections/          # Page sections
│   │   ├── hero.tsx
│   │   ├── statistics.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── qa-approach.tsx
│   │   ├── certifications.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── theme/            # Theme provider and toggle
│   └── ui/               # shadcn/ui components
├── content/              # JSON content files
│   ├── profile.json
│   ├── experience.json
│   ├── projects.json
│   ├── certifications.json
│   └── skills.json
├── public/               # Static assets
└── lib/                  # Utility functions
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wisnuwm/bio-wisnu.git
   cd bio-wisnu
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

All content is stored in JSON files in the `/content` directory. You can update your information without touching React components:

### Profile Information
Update `content/profile.json`:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your.email@example.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourusername"
}
```

### Experience
Add or update work experience in `content/experience.json`

### Projects
Showcase your work in `content/projects.json`

### Skills
Update your technical skills in `content/skills.json`

### Certifications
Add certifications in `content/certifications.json`

## 🎨 Customization

### Colors
Edit the color system in `app/globals.css`:
```css
:root {
  --primary: #2563EB;
  --secondary: #0F172A;
  --accent: #38BDF8;
  /* ... more colors */
}
```

### Sections
Each section is a separate component in `components/sections/`. You can:
- Remove sections by deleting imports in `app/page.tsx`
- Reorder sections by rearranging the imports and JSX elements
- Modify section content by editing individual components

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Your site is live!**
   - Vercel will provide a URL like `https://bio-wisnu.vercel.app`
   - You can add a custom domain in project settings

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build plugin
- **Railway**: Direct deployment with auto-detection
- **Cloudflare Pages**: Requires additional configuration
- **Self-hosted**: Build with `npm run build` and serve the `.next` folder

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📊 Performance Optimization

The site is optimized for:
- **Performance**: 95+ Lighthouse score
- **Accessibility**: 95+ Lighthouse score
- **Best Practices**: 95+ Lighthouse score
- **SEO**: 95+ Lighthouse score

### Optimization Techniques Used:
- Static generation for fast page loads
- Optimized images and fonts
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind CSS v4
- Proper meta tags and structured data

## 🔍 SEO

The site includes comprehensive SEO optimization:
- Metadata API for dynamic meta tags
- Open Graph tags for social media
- Twitter Card integration
- robots.txt for search engine guidance
- sitemap.xml for search engine crawling
- Semantic HTML structure

## 🌙 Dark Mode

The site features system-aware dark mode:
- Automatically detects system preference
- Manual toggle with smooth transitions
- Persistent theme selection
- Optimized color contrast for both modes

## 📱 Responsive Design

The site is fully responsive:
- **Mobile-first approach**
- **Breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Touch-friendly interactions**
- **Optimized typography scaling**

## 🤝 Contributing

This is a personal website, but feel free to:
- Fork the repository
- Use it as a template for your own site
- Star the repository if you find it helpful

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Wisnu Munawar**
- LinkedIn: [https://id.linkedin.com/in/wisnuwm](https://id.linkedin.com/in/wisnuwm)
- GitHub: [https://github.com/wisnuwm](https://github.com/wisnuwm)

## 🙏 Acknowledgments

- Design inspiration from Vercel, Linear, and Stripe
- Built with modern web technologies
- Icons by Lucide React
- Components by shadcn/ui

---

Made with ❤️ using Next.js and TypeScript
