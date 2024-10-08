import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

interface PhoneInputProps {
  onCollectPhoneNumber: (phone: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onCollectPhoneNumber }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const appendNumber = (num: string) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber((prev) => prev + num);
    }
  };

  const deleteLast = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const clearAll = () => {
    setPhoneNumber('');
  };

  const handleCollectPhoneNumber = () => {
    if (phoneNumber.length === 10) {
      onCollectPhoneNumber(phoneNumber);
      clearAll();
    }
  };

  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <div className="mb-3">
        <input
          type="tel"
          className="form-control form-control-lg text-center"
          value={phoneNumber}
          readOnly
          placeholder="Enter 10-digit Phone Number"
          maxLength={10}
          style={{ 
            userSelect: 'none', 
            backgroundColor: '#f8f9fa', 
            fontSize: '1.5rem',
          }}
        />
      </div>
      <div className="d-flex flex-wrap justify-content-between mb-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} className="col-4 mb-2" style={{ padding: '0.5rem' }}>
            <button
              className="btn btn-outline-primary w-100"
              style={{ 
                height: '60px', 
                fontSize: '1.5rem', 
                padding: '0.5rem' 
              }}
              onClick={() => appendNumber(String(num))}
            >
              {num}
            </button>
          </div>
        ))}
        <div className="col-4 mb-2" style={{ padding: '0.5rem' }}>
          <button
            className="btn btn-outline-danger w-100"
            style={{ 
              height: '60px', 
              fontSize: '1.5rem', 
              padding: '0.5rem' 
            }}
            onClick={clearAll}
          >
            Clear
          </button>
        </div>
        <div className="col-4 mb-2" style={{ padding: '0.5rem' }}>
          <button
            className="btn btn-outline-primary w-100"
            style={{ 
              height: '60px', 
              fontSize: '1.5rem', 
              padding: '0.5rem' 
            }}
            onClick={() => appendNumber('0')}
          >
            0
          </button>
        </div>
        <div className="col-4 mb-2" style={{ padding: '0.5rem' }}>
          <button
            className="btn btn-outline-warning w-100"
            style={{ 
              height: '60px', 
              fontSize: '1.5rem', 
              padding: '0.5rem' 
            }}
            onClick={deleteLast}
          >
            Delete
          </button>
        </div>
      </div>
      <button
        className="btn btn-success w-100"
        style={{ 
          height: '60px', 
          fontSize: '1.5rem', 
          padding: '0.75rem' 
        }}
        onClick={handleCollectPhoneNumber}
        disabled={phoneNumber.length !== 10}
      >
        Collect Phone Number
      </button>
    </div>
  );
};

export default PhoneInput;
