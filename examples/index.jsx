import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { OTPInput } from '../src/OTPInput';

function App() {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const handleComplete1 = (otp) => {
    console.log('OTP Completed:', otp);
    alert(`OTP Entered: ${otp}`);
  };

  const handleVerify = (otp) => {
    console.log('Verifying OTP:', otp);
    
    // Simulate verification
    if (otp === '1234') {
      setVerified(true);
      setError(false);
      setTimeout(() => setVerified(false), 3000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          marginBottom: '30px',
        }}>
          <h1 style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: '36px',
            marginBottom: '10px',
            color: '#2d3748',
            textAlign: 'center',
          }}>
            🔐 React OTP Input Demo
          </h1>
          <p style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: '16px',
            color: '#718096',
            textAlign: 'center',
            marginBottom: '40px',
          }}>
            A beautiful and accessible OTP input component for React
          </p>

          {/* Example 1: Basic Usage */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '20px',
              color: '#2d3748',
              marginBottom: '15px',
            }}>
              1. Basic OTP Input (4 digits)
            </h2>
            <p style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '14px',
              color: '#718096',
              marginBottom: '20px',
            }}>
              Auto-focuses first input, moves to next on input, fires alert on completion
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <OTPInput
                length={4}
                onComplete={handleComplete1}
                onChange={(otp) => setOtp1(otp)}
              />
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              color: '#4299e1',
              textAlign: 'center',
              padding: '10px',
              background: '#f7fafc',
              borderRadius: '8px',
            }}>
              Current Value: {otp1 || '(empty)'}
            </div>
          </div>

          {/* Example 2: 6 Digit OTP */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '20px',
              color: '#2d3748',
              marginBottom: '15px',
            }}>
              2. Six Digit OTP
            </h2>
            <p style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '14px',
              color: '#718096',
              marginBottom: '20px',
            }}>
              Supports custom length - perfect for email/SMS verification codes
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <OTPInput
                length={6}
                onChange={(otp) => setOtp2(otp)}
              />
            </div>
            <div style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              color: '#4299e1',
              textAlign: 'center',
              padding: '10px',
              background: '#f7fafc',
              borderRadius: '8px',
            }}>
              Current Value: {otp2 || '(empty)'}
            </div>
          </div>

          {/* Example 3: Secure PIN */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '20px',
              color: '#2d3748',
              marginBottom: '15px',
            }}>
              3. Secure PIN (Password Mode)
            </h2>
            <p style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '14px',
              color: '#718096',
              marginBottom: '20px',
            }}>
              Uses password input type to hide entered digits
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <OTPInput
                length={4}
                secure={true}
                onChange={(otp) => console.log('Secure PIN:', otp)}
              />
            </div>
            <div style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '12px',
              color: '#a0aec0',
              textAlign: 'center',
              padding: '10px',
              background: '#f7fafc',
              borderRadius: '8px',
            }}>
              🔒 Digits are hidden for security
            </div>
          </div>

          {/* Example 4: With Verification */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '20px',
              color: '#2d3748',
              marginBottom: '15px',
            }}>
              4. OTP Verification Demo
            </h2>
            <p style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '14px',
              color: '#718096',
              marginBottom: '20px',
            }}>
              Try entering <strong>1234</strong> to see success state, or any other code to see error
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <OTPInput
                length={4}
                onComplete={handleVerify}
                onChange={(otp) => setOtp3(otp)}
                inputClassName={error ? 'error' : verified ? 'success' : ''}
              />
            </div>
            {verified && (
              <div style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '14px',
                color: '#48bb78',
                textAlign: 'center',
                padding: '15px',
                background: '#f0fff4',
                borderRadius: '8px',
                border: '2px solid #48bb78',
                fontWeight: 600,
              }}>
                ✅ OTP Verified Successfully!
              </div>
            )}
            {error && (
              <div style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '14px',
                color: '#f56565',
                textAlign: 'center',
                padding: '15px',
                background: '#fff5f5',
                borderRadius: '8px',
                border: '2px solid #f56565',
                fontWeight: 600,
              }}>
                ❌ Invalid OTP. Please try again.
              </div>
            )}
          </div>

          {/* Example 5: Disabled State */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '20px',
              color: '#2d3748',
              marginBottom: '15px',
            }}>
              5. Disabled State
            </h2>
            <p style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '14px',
              color: '#718096',
              marginBottom: '20px',
            }}>
              Shows disabled state with pre-filled value
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <OTPInput
                length={4}
                disabled={true}
                value="5678"
              />
            </div>
          </div>

          {/* Features */}
          <div style={{
            background: '#f7fafc',
            padding: '30px',
            borderRadius: '12px',
            marginTop: '40px',
          }}>
            <h2 style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '20px',
              color: '#2d3748',
              marginBottom: '20px',
            }}>
              ✨ Features
            </h2>
            <ul style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '15px',
              color: '#4a5568',
              lineHeight: '1.8',
              paddingLeft: '20px',
            }}>
              <li>✅ Auto-focus on first input</li>
              <li>✅ Auto-advance to next input on entry</li>
              <li>✅ Backspace moves to previous input</li>
              <li>✅ Arrow key navigation (← →)</li>
              <li>✅ Paste support (paste full OTP at once)</li>
              <li>✅ Customizable length (4, 6, or any number)</li>
              <li>✅ Secure mode (password input)</li>
              <li>✅ TypeScript support</li>
              <li>✅ Fully accessible (ARIA labels)</li>
              <li>✅ Responsive design (mobile-friendly)</li>
              <li>✅ Dark mode support</li>
              <li>✅ Custom styling support</li>
            </ul>
          </div>

          {/* Try It */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '30px',
            borderRadius: '12px',
            marginTop: '30px',
            color: 'white',
            textAlign: 'center',
          }}>
            <h3 style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '18px',
              marginBottom: '15px',
            }}>
              💡 Pro Tips
            </h3>
            <p style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '14px',
              lineHeight: '1.6',
              margin: 0,
            }}>
              Try pasting a 4-digit code like "1234" into any input above!<br />
              Use keyboard arrows to navigate between inputs.<br />
              Press Backspace to go back and clear digits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
