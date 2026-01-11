# Testing Guide - React OTP Input Field

## 🚀 Quick Test (Development Mode)

The **fastest way** to test your OTP component:

```bash
# 1. Navigate to project
cd react-otp-input-field

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

✅ **That's it!** Your browser will open at http://localhost:3000 with a live demo.

---

## 🧪 What You'll See

The demo includes **5 interactive examples**:

1. **Basic 4-Digit OTP** - Auto-focus, auto-advance, alert on completion
2. **6-Digit OTP** - Shows custom length support
3. **Secure PIN** - Password mode (hidden digits)
4. **Verification Demo** - Try entering `1234` for success, anything else for error
5. **Disabled State** - Pre-filled, non-editable inputs

---

## ✨ Features to Test

### Auto-Focus & Navigation
- [ ] First input auto-focuses on load
- [ ] Typing moves to next input automatically
- [ ] Backspace moves to previous input
- [ ] Arrow keys (← →) navigate between inputs

### Paste Functionality
- [ ] Copy `1234` and paste into any input
- [ ] All 4 digits fill automatically
- [ ] Works with 6-digit OTP too

### Keyboard Controls
- [ ] Type numbers (0-9)
- [ ] Backspace clears and moves back
- [ ] Delete key clears current input
- [ ] Tab key moves to next input (browser default)

### Callbacks
- [ ] `onChange` fires on every keystroke
- [ ] `onComplete` fires when all digits entered
- [ ] Values update in real-time

### Edge Cases
- [ ] Try typing letters (blocked in number mode)
- [ ] Try typing multiple characters (blocked)
- [ ] Try selecting and replacing digits
- [ ] Clear all digits with backspace

### Visual States
- [ ] Empty inputs (gray border)
- [ ] Filled inputs (green border)
- [ ] Focused input (blue border + shadow)
- [ ] Disabled inputs (grayed out)
- [ ] Error state (red border + shake)
- [ ] Success state (green background)

### Responsive Design
- [ ] Resize browser window
- [ ] Check on mobile (if possible)
- [ ] Test with browser zoom (Ctrl/Cmd + Plus)

---

## 📱 Mobile Testing

If you want to test on your phone:

```bash
# Start dev server
npm run dev

# In terminal, look for:
# "Network: http://192.168.x.x:3000"
```

Open that URL on your phone (must be on same WiFi).

**Mobile-specific tests:**
- [ ] Numeric keyboard appears
- [ ] Touch interactions work
- [ ] Paste from SMS works
- [ ] Auto-fill from SMS (if supported)

---

## 🔧 Build and Test Package

Test the actual npm package build:

```bash
# Build the package
npm run build

# Check build output
ls -la dist/

# You should see:
# - index.js (CommonJS)
# - index.esm.js (ES Module)
# - index.d.ts (TypeScript definitions)
```

---

## 📦 Test in Another Project

### Option 1: Using npm pack (Recommended)

```bash
# In react-otp-input-field folder
npm pack

# This creates: react-otp-input-field-1.0.0.tgz
```

Then in your test React app:

```bash
npm install /path/to/react-otp-input-field-1.0.0.tgz
```

Use it:

```jsx
import { OTPInput } from 'react-otp-input-field';

function App() {
  return <OTPInput length={4} onComplete={(otp) => console.log(otp)} />;
}
```

### Option 2: Using npm link

```bash
# In react-otp-input-field folder
npm link

# In your test project
npm link react-otp-input-field
```

**Unlink when done:**
```bash
npm unlink react-otp-input-field
```

---

## 🎯 Testing Checklist

Before publishing, verify:

### Functionality
- [x] Component renders without errors
- [x] All 5 examples work in demo
- [x] Auto-focus works
- [x] Auto-advance works
- [x] Backspace navigation works
- [x] Arrow key navigation works
- [x] Paste works correctly
- [x] onChange callback fires
- [x] onComplete callback fires
- [x] Secure mode hides digits
- [x] Disabled state works
- [x] Custom length works (4, 6, 8 digits)

### Build
- [x] `npm run build` completes successfully
- [x] dist/ folder contains all files
- [x] TypeScript definitions generated
- [x] No console errors in demo

### Package
- [x] README is clear and helpful
- [x] package.json has correct info
- [x] LICENSE file exists
- [x] .npmignore excludes dev files
- [x] Keywords are relevant

---

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
Edit `vite.config.js`:
```js
server: {
  port: 3001,  // Change port
  open: true,
}
```

### Build fails
```bash
# Make sure TypeScript is installed
npm install -D typescript

# Try building again
npm run build
```

### React version mismatch
```bash
# Check React version
npm list react

# If needed, update
npm install react@latest react-dom@latest
```

### Component doesn't work in test project
- Make sure you built the package: `npm run build`
- Check that dist/ folder exists
- Verify you're importing correctly: `import { OTPInput } from 'react-otp-input-field'`

---

## 💡 Pro Tips

1. **Hot Reload** - When running `npm run dev`, changes auto-reload instantly
2. **Console Logs** - Open browser DevTools to see console.log outputs
3. **Paste Testing** - Use this test OTP: `1234`
4. **Mobile Testing** - Use your phone's camera to scan QR code (if Vite shows one)
5. **TypeScript** - If using TypeScript in test project, types should auto-complete

---

## 📝 Common Test Scenarios

### Test 1: SMS Verification Flow
```
1. User receives SMS with code: 1234
2. User taps OTP input
3. User pastes code
4. All 4 digits fill instantly
5. onComplete fires
6. Backend verifies code
```

### Test 2: Manual Entry
```
1. User types: 1
2. Focus moves to input 2
3. User types: 2
4. Focus moves to input 3
5. User types: 3
6. Focus moves to input 4
7. User types: 4
8. onComplete fires
```

### Test 3: Correction
```
1. User enters: 1234
2. Realizes mistake
3. User presses backspace
4. Digit 4 clears, focus moves to input 3
5. User types correct digit
```

---

## ✅ Ready to Publish?

When all tests pass:

```bash
# Update version if needed
npm version patch  # 1.0.0 -> 1.0.1

# Build
npm run build

# Dry run (see what will be published)
npm publish --dry-run

# Publish!
npm publish
```

🎉 **Congratulations!** Your package is live on npm!

---

## 🆘 Need Help?

- Check the demo: `npm run dev`
- Read the README.md
- Check browser console for errors
- Verify all dependencies installed
- Make sure React version is compatible

Good luck! 🚀
