# react-otp-input-field

A beautiful, accessible, and customizable OTP (One-Time Password) input component for React with TypeScript support.

![npm version](https://img.shields.io/npm/v/react-otp-input-field)
![license](https://img.shields.io/npm/l/react-otp-input-field)

## ✨ Features

- 🎯 **Auto-focus & Auto-advance** - Automatically focuses first input and advances to next on entry
- ⌨️ **Keyboard Navigation** - Arrow keys (← →) and Backspace support
- 📋 **Paste Support** - Paste complete OTP code at once
- 🔢 **Customizable Length** - Support for 4, 6, or any number of digits
- 🔒 **Secure Mode** - Password input type for sensitive PINs
- 💪 **TypeScript Support** - Full type definitions included
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 📱 **Responsive** - Mobile-friendly design
- 🎨 **Customizable** - Custom styling support
- 🌙 **Dark Mode** - Built-in dark mode support
- 🪶 **Lightweight** - Zero dependencies (except React)

## 📦 Installation

```bash
npm install react-otp-input-field
```

or

```bash
yarn add react-otp-input-field
```

## 🚀 Quick Start

```jsx
import React, { useState } from 'react';
import { OTPInput } from 'react-otp-input-field';

function App() {
  const [otp, setOtp] = useState('');

  const handleComplete = (otp) => {
    console.log('OTP Completed:', otp);
    // Verify OTP here
  };

  return (
    <OTPInput
      length={4}
      onComplete={handleComplete}
      onChange={(otp) => setOtp(otp)}
    />
  );
}
```

## 📖 Usage Examples

### Basic 4-Digit OTP

```jsx
<OTPInput
  length={4}
  onComplete={(otp) => console.log('OTP:', otp)}
/>
```

### 6-Digit Email/SMS Verification

```jsx
<OTPInput
  length={6}
  onChange={(otp) => setOtp(otp)}
  onComplete={verifyOTP}
/>
```

### Secure PIN Input

```jsx
<OTPInput
  length={4}
  secure={true}
  onComplete={validatePIN}
/>
```

### With Custom Styling

```jsx
<OTPInput
  length={4}
  className="my-otp-wrapper"
  containerClassName="my-otp-container"
  inputClassName="my-otp-input"
/>
```

### Controlled Component with Verification

```jsx
function VerificationForm() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);

  const verifyOTP = async (code) => {
    try {
      await api.verify(code);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <OTPInput
      length={4}
      value={otp}
      onChange={setOtp}
      onComplete={verifyOTP}
      inputClassName={error ? 'error' : ''}
    />
  );
}
```

## 🎛️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `length` | `number` | `4` | Number of OTP input fields |
| `onComplete` | `(otp: string) => void` | `undefined` | Callback when all fields are filled |
| `onChange` | `(otp: string) => void` | `undefined` | Callback on every change |
| `autoFocus` | `boolean` | `true` | Auto-focus first input on mount |
| `disabled` | `boolean` | `false` | Disable all inputs |
| `secure` | `boolean` | `false` | Use password input type |
| `type` | `'number' \| 'text'` | `'number'` | Input type (number validates digits only) |
| `value` | `string` | `''` | Controlled value |
| `placeholder` | `string` | `''` | Placeholder for each input |
| `className` | `string` | `''` | Class for wrapper div |
| `containerClassName` | `string` | `''` | Class for container div |
| `inputClassName` | `string` | `''` | Class for each input |

## ⌨️ Keyboard Controls

- **Type digit** - Enters digit and moves to next input
- **Backspace** - Clears current digit or moves to previous input
- **Arrow Left (←)** - Moves to previous input
- **Arrow Right (→)** - Moves to next input
- **Paste** - Pastes complete OTP code at once

## 🎨 Custom Styling

You can customize the appearance using CSS classes:

```css
/* Wrapper */
.my-otp-wrapper {
  /* Your styles */
}

/* Container holding all inputs */
.my-otp-container {
  gap: 16px; /* Space between inputs */
}

/* Individual input boxes */
.my-otp-input {
  width: 60px;
  height: 60px;
  font-size: 28px;
  border-radius: 16px;
}

/* Error state */
.my-otp-input.error {
  border-color: red;
}
```

Or use inline styles:

```jsx
<OTPInput
  length={4}
  containerClassName="flex gap-4"
  inputClassName="w-16 h-16 text-2xl"
/>
```

## 🔧 TypeScript

Full TypeScript support with type definitions:

```typescript
import { OTPInput, OTPInputProps } from 'react-otp-input-field';

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  onChange?: (otp: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  secure?: boolean;
  className?: string;
  inputClassName?: string;
  containerClassName?: string;
  placeholder?: string;
  type?: 'number' | 'text';
  value?: string;
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The component is fully responsive and works great on:
- Desktop
- Tablet
- Mobile devices

## ♿ Accessibility

- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Proper input types for mobile keyboards

## 💡 Best Practices

1. **Use `onComplete` for validation** - Wait for all digits before verifying
2. **Provide feedback** - Show success/error states using custom classes
3. **Mobile optimization** - Component uses `inputMode="numeric"` for numeric keyboard
4. **Paste support** - Users can paste codes from SMS/Email
5. **Auto-focus** - Enabled by default for better UX

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Your Name]

## 🙏 Support

If you find this package helpful, please give it a ⭐ on [GitHub](https://github.com/yourusername/react-otp-input-field)!

## 📮 Feedback

Found a bug or have a feature request? Please open an issue on [GitHub](https://github.com/yourusername/react-otp-input-field/issues).
