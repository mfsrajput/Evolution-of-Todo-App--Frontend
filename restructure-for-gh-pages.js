#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// This script restructures the Next.js output for GitHub Pages project site deployment
// When using basePath, Next.js generates paths like /repo-name/_next/...
// We need to ensure the site structure matches GitHub Pages project site expectations

const outDir = path.join(__dirname, 'out');
const repoName = 'Evolution-of-Todo-App--Frontend';
const ghPagesDir = path.join(__dirname, 'gh-pages-out');

// Ensure the gh-pages-out directory exists
if (fs.existsSync(ghPagesDir)) {
  // Remove existing content
  const items = fs.readdirSync(ghPagesDir);
  for (const item of items) {
    const itemPath = path.join(ghPagesDir, item);
    if (fs.lstatSync(itemPath).isDirectory()) {
      fs.rmSync(itemPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(itemPath);
    }
  }
} else {
  fs.mkdirSync(ghPagesDir);
}

// Copy all files from out directory to gh-pages-out directory
function copyRecursive(source, destination) {
  if (fs.lstatSync(source).isDirectory()) {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
    const items = fs.readdirSync(source);
    for (const item of items) {
      copyRecursive(
        path.join(source, item),
        path.join(destination, item)
      );
    }
  } else {
    fs.copyFileSync(source, destination);
  }
}

copyRecursive(outDir, ghPagesDir);

// Create .nojekyll file to prevent Jekyll processing
fs.writeFileSync(path.join(ghPagesDir, '.nojekyll'), '# Disable Jekyll');

console.log('Restructured output for GitHub Pages deployment');
console.log('Deploy the "gh-pages-out" directory to GitHub Pages');