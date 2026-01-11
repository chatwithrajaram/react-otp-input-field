import React, { useRef, useState, useEffect, KeyboardEvent, ClipboardEvent, ChangeEvent } from 'react';
import './OTPInput.css';

export interface OTPInputProps {
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

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 4,
  onComplete,
  onChange,
  autoFocus = true,
  disabled = false,
  secure = false,
  className = '',
  inputClassName = '',
  containerClassName = '',
  placeholder = '',
  type = 'number',
  value = '',
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize OTP from value prop
  useEffect(() => {
    if (value) {
      const otpArray = value.split('').slice(0, length);
      setOtp([...otpArray, ...Array(length - otpArray.length).fill('')]);
    }
  }, [value, length]);

  // Auto focus first input
  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    
    // Only allow single character
    if (val.length > 1) return;

    // For number type, validate numeric input
    if (type === 'number' && val && !/^\d$/.test(val)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Call onChange callback
    const otpString = newOtp.join('');
    if (onChange) {
      onChange(otpString);
    }

    // Move to next input if value entered
    if (val && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onComplete if all fields filled
    if (newOtp.every((digit) => digit !== '') && onComplete) {
      onComplete(otpString);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Move to next input on arrow right
    if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Move to previous input on arrow left
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Clear current input on backspace
    if (e.key === 'Backspace' && otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      
      if (onChange) {
        onChange(newOtp.join(''));
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Validate pasted data
    if (type === 'number' && !/^\d+$/.test(pastedData)) {
      return;
    }

    const pastedArray = pastedData.split('').slice(0, length);
    const newOtp = [...pastedArray, ...Array(length - pastedArray.length).fill('')];
    setOtp(newOtp);

    // Focus last filled input or last input
    const lastFilledIndex = Math.min(pastedArray.length, length - 1);
    inputRefs.current[lastFilledIndex]?.focus();

    // Call onChange callback
    const otpString = newOtp.join('');
    if (onChange) {
      onChange(otpString);
    }

    // Call onComplete if all fields filled
    if (newOtp.every((digit) => digit !== '') && onComplete) {
      onComplete(otpString);
    }
  };

  const handleFocus = (index: number) => {
    // Select all text on focus for easy replacement
    inputRefs.current[index]?.select();
  };

  return (
    <div className={`otp-input-wrapper ${className}`}>
      <div className={`otp-input-container ${containerClassName}`}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type={secure ? 'password' : 'text'}
            inputMode={type === 'number' ? 'numeric' : 'text'}
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={() => handleFocus(index)}
            disabled={disabled}
            className={`otp-input ${inputClassName} ${digit ? 'has-value' : ''}`}
            placeholder={placeholder}
            autoComplete="off"
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
