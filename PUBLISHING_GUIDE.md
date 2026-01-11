# Publishing Guide - React OTP Input Field

## 📋 Pre-Publishing Checklist

Before you publish to npm, complete these steps:

### 1. Update Your Information

**package.json:**
```json
{
  "name": "react-otp-input-field",  // Change if taken
  "author": "Your Name <your.email@example.com>",  // ← Update this
  "repository": {
    "url": "https://github.com/yourusername/react-otp-input-field.git"  // ← Update this
  }
}
```

**README.md:**
- Replace "Your Name" with your actual name
- Update GitHub links with your username

**LICENSE:**
- Replace "Your Name" with your actual name

### 2. Test Everything

```bash
# Install dependencies
npm install

# Test in development
npm run dev
# ✅ Check all examples work

# Build the package
npm run build
# ✅ No errors, dist/ folder created

# Test the build
npm pack
# ✅ Creates .tgz file successfully
```

---

## 🚀 Publishing Steps

### Step 1: Create npm Account

If you don't have one:
1. Go to https://www.npmjs.com/signup
2. Create your account
3. Verify your email

### Step 2: Login to npm

```bash
npm login
```

Enter your credentials:
- Username
- Password
- Email
- (Optional) 2FA code

Verify login:
```bash
npm whoami
# Should show your username
```

### Step 3: Check Package Name

```bash
# Search to see if name is available
npm search react-otp-input-field
```

If taken, choose a different name:
- `otp-input-react`
- `react-otp-field`
- `react-pin-input`
- `@yourusername/react-otp-input` (scoped package)

Update in `package.json`:
```json
{
  "name": "your-chosen-name"
}
```

### Step 4: Build for Production

```bash
npm run build
```

Verify `dist/` folder contains:
- `index.js`
- `index.esm.js`
- `index.d.ts`

### Step 5: Dry Run

```bash
npm publish --dry-run
```

This shows what will be published **without actually publishing**.

Check the output:
- ✅ Only includes necessary files (dist/, README, LICENSE)
- ✅ Excludes src/, examples/, node_modules/
- ✅ Package size is reasonable (<50KB)

### Step 6: Publish!

```bash
npm publish
```

For scoped packages (if you used `@yourusername/package-name`):
```bash
npm publish --access public
```

---

## 🎉 Success!

Your package is now live! 

**View it at:**
- `https://www.npmjs.com/package/react-otp-input-field`

**Anyone can install it:**
```bash
npm install react-otp-input-field
```

---

## 📦 Post-Publishing

### Create GitHub Repository

```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: React OTP Input Field v1.0.0"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/react-otp-input-field.git
git branch -M main
git push -u origin main
```

### Add Badges to README

Update your README.md:

```markdown
![npm version](https://img.shields.io/npm/v/react-otp-input-field)
![npm downloads](https://img.shields.io/npm/dm/react-otp-input-field)
![license](https://img.shields.io/npm/l/react-otp-input-field)
![bundle size](https://img.shields.io/bundlephobia/minzip/react-otp-input-field)
```

### Share Your Package

- Post on Reddit: r/reactjs
- Tweet/Post on X
- Share on LinkedIn
- Add to your portfolio
- Write a blog post about building it

---

## 🔄 Updating Your Package

When you make changes:

### 1. Update Version

Follow [Semantic Versioning](https://semver.org/):

```bash
# Bug fixes (1.0.0 → 1.0.1)
npm version patch

# New features (1.0.0 → 1.1.0)
npm version minor

# Breaking changes (1.0.0 → 2.0.0)
npm version major
```

Or manually edit `package.json`:
```json
{
  "version": "1.0.1"
}
```

### 2. Build & Test

```bash
npm run build
npm run dev  # Test your changes
```

### 3. Commit Changes

```bash
git add .
git commit -m "Version 1.0.1: Fix bug with paste functionality"
git push
```

### 4. Publish Update

```bash
npm publish
```

### 5. Tag Release (Optional)

```bash
git tag v1.0.1
git push --tags
```

---

## 🐛 Common Issues & Solutions

### Issue: Package name already exists
```
npm ERR! 403 Forbidden - PUT https://registry.npmjs.org/react-otp-input-field
```

**Solution:** Choose a different name in package.json

### Issue: Not logged in
```
npm ERR! need auth
```

**Solution:** Run `npm login`

### Issue: Permission denied (scoped packages)
```
npm ERR! 402 Payment Required
```

**Solution:** Publish as public:
```bash
npm publish --access public
```

### Issue: Build errors
```
npm ERR! Failed at the prepublishOnly script
```

**Solution:**
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Wrong files published
**Solution:** Check `.npmignore` file excludes:
- src/
- examples/
- node_modules/
- Test files

---

## 📊 Monitor Your Package

### npm Stats
- Package page: `https://www.npmjs.com/package/your-package-name`
- Weekly downloads
- Dependencies
- Versions

### npm Commands
```bash
# View package info
npm view react-otp-input-field

# List all versions
npm view react-otp-input-field versions

# Check who's downloading
npm info react-otp-input-field
```

---

## 🎯 Growth Tips

### 1. Good Documentation
- Clear README with examples
- CodeSandbox/StackBlitz demos
- Screenshots or GIFs

### 2. Good Developer Experience
- TypeScript support ✅
- Clear error messages
- Helpful console warnings

### 3. Maintenance
- Fix bugs quickly
- Respond to issues
- Keep dependencies updated

### 4. Marketing
- Post on Reddit (r/reactjs, r/webdev)
- Share on Twitter/X with #reactjs
- Write blog post
- Add to awesome-react lists

---

## 🆘 Need Help?

### Resources
- npm docs: https://docs.npmjs.com/
- Semantic versioning: https://semver.org/
- Publishing guide: https://docs.npmjs.com/creating-and-publishing-scoped-public-packages

### Questions?
- npm support: https://www.npmjs.com/support
- Stack Overflow: [npm] tag
- Reddit: r/npm

---

## ✅ Final Checklist

Before publishing:

- [ ] Tested with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Updated package.json author
- [ ] Updated README with your info
- [ ] Chose unique package name
- [ ] Created npm account
- [ ] Logged in with `npm login`
- [ ] Tested with `npm publish --dry-run`
- [ ] Ready to publish! 🚀

---

## 🎊 Congratulations!

You've published your first npm package! 

This is a great achievement and shows:
- ✅ React component development skills
- ✅ TypeScript proficiency
- ✅ npm package creation
- ✅ Open source contribution

Add it to your resume and portfolio! 💼

**Next Steps:**
1. Share your package
2. Get user feedback
3. Add new features
4. Help others who use it
5. Build more packages!

Good luck! 🌟
