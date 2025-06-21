@echo off
echo ========================================
echo    Work With Wasim - Portfolio Deploy
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding all files to Git...
git add .

echo.
echo Step 3: Making initial commit...
git commit -m "Initial portfolio website - Work With Wasim"

echo.
echo ========================================
echo    NEXT STEPS:
echo ========================================
echo 1. Create a new repository on GitHub.com
echo 2. Copy the repository URL
echo 3. Run these commands (replace with your details):
echo.
echo git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
echo git branch -M main
echo git push -u origin main
echo.
echo 4. Enable GitHub Pages in repository settings
echo.
echo Your site will be live at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
echo ========================================
pause 