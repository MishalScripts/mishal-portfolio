# 🚀 Deployment Guide

## Quick Deploy to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Merge the Pull Request**
   - Go to: https://github.com/MishalScripts/mishal-portfolio/pull/2
   - Click "Merge pull request"
   - Confirm merge

2. **Enable GitHub Pages**
   - Go to: Settings → Pages
   - Source: Deploy from a branch
   - Branch: `react-portfolio`
   - Folder: `/ (root)`
   - Click Save

3. **Wait for Build**
   - GitHub Actions will automatically build and deploy
   - Check progress: Actions tab
   - Usually takes 2-3 minutes

4. **Access Your Site**
   - URL: https://mishalscripts.github.io/mishal-portfolio
   - May take a few minutes to go live

### Method 2: Manual Deployment

```bash
# Clone and setup
git clone https://github.com/MishalScripts/mishal-portfolio.git
cd mishal-portfolio
git checkout react-portfolio

# Install dependencies
npm install

# Test locally
npm start
# Opens at http://localhost:3000

# Build and deploy
npm run build
npm run deploy
```

## 🎯 What's Included

### ✅ All Your Information
- **Name:** Mishal
- **Title:** Information Science Engineering Student | AI Enthusiast
- **Current Role:** Game QA Tester @ Indium Software
- **Email:** officialzenvomart@gmail.com
- **Phone:** +91 9353653653
- **Location:** Bangalore, Karnataka, India

### 💼 Experience
1. **Game QA Tester** - Indium Software (Nov 2024 - Present)
2. **Intern - Artificial Intelligence** - Verzeo (Jun 2023 - Aug 2023)

### 🚀 Skills
- Programming Languages: Python, Java, C, C++, JavaScript, SQL
- AI & ML: TensorFlow, Scikit-learn, Pandas, NumPy
- Web Development: HTML, CSS, JavaScript, React, Node.js
- Tools: Git, GitHub, VS Code, Jupyter, Docker, Linux
- Game Testing: Bug Tracking, Test Cases, Regression Testing
- Soft Skills: Problem Solving, Team Collaboration

### 🎯 Projects
1. **Automated Attendance System** - Multi-method authentication
2. **AI-Powered Solutions** - ML models and data analysis
3. **Web Applications** - Full-stack development

### 🏆 Certifications
1. Artificial Intelligence - Verzeo (2023)
2. Python Programming (2022)
3. Web Development (2022)
4. Data Science Fundamentals (2023)

### ✨ Features
- 🎨 Dark/Light Theme Toggle
- 💡 Suggestions Box with Form Validation
- 📱 Fully Responsive Design
- 🎭 Animated Background
- 📄 Resume Viewer
- 🔗 GitHub Project Links

## 🛠️ Customization

### Update Resume
Edit `src/components/Resume.js`:
```javascript
const resumeUrl = 'YOUR_GOOGLE_DRIVE_PREVIEW_URL';
const downloadUrl = 'YOUR_GOOGLE_DRIVE_DOWNLOAD_URL';
```

### Update Photo
Replace the photo URL in `src/components/Hero.js`:
```javascript
src="https://raw.githubusercontent.com/MishalScripts/mishal-portfolio/main/photo.jpg"
```

### Modify Theme Colors
Edit `src/index.css`:
```css
:root {
  --netflix-red: #E50914;
  --bg-primary: #141414;
}
```

## 📱 Testing

### Local Development
```bash
npm start
```
Opens at http://localhost:3000

### Production Build
```bash
npm run build
```
Creates optimized build in `build/` folder

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Working
1. Check Settings → Pages is enabled
2. Verify branch is `react-portfolio`
3. Wait 5-10 minutes for DNS propagation
4. Clear browser cache

### Theme Not Saving
- Check browser localStorage is enabled
- Try incognito mode to test

## 📞 Support

Issues? Contact:
- Email: officialzenvomart@gmail.com
- GitHub: @MishalScripts

---

**Ready to deploy!** Follow Method 1 for easiest deployment. 🚀
