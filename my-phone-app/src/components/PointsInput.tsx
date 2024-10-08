import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import PointsSummary from './PointsSummary'; // Import the PointsSummary component

interface PointsInputProps {
  onSubmitPoints: (points: number) => void;
  totalPoints: number;
  phoneNumber: string;
  onDone: () => void; // Add this prop to handle the Done action
  onBack: () => void; // Add a prop for the Back action
}

const PointsInput: React.FC<PointsInputProps> = ({
  onSubmitPoints,
  totalPoints,
  phoneNumber,
  onDone,
  onBack,
}) => {
  const [points, setPoints] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const appendPoints = (num: string) => {
    setPoints((prev) => prev + num);
  };

  const clearPoints = () => {
    setPoints('');
  };

  const handleSubmitPoints = () => {
    if (points) {
      onSubmitPoints(parseInt(points, 10));
      clearPoints();
      setShowSummary(true);
    }
  };

  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm position-relative">
      {!showSummary ? (
        <>
          <div className="mb-3 text-center">
            <h4>Phone Number: {phoneNumber}</h4>
            <h5>Total Points: {totalPoints}</h5>
            <h6>Points Entered: {points}</h6>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="col-4 mb-2" style={{ padding: '0.5rem' }}>
                <button
                  className="btn btn-outline-primary w-100"
                  style={{
                    height: '60px',
                    fontSize: '1.5rem',
                    padding: '0.5rem',
                  }}
                  onClick={() => appendPoints(String(num))}
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
                  padding: '0.5rem',
                }}
                onClick={clearPoints}
              >
                Clear
              </button>
            </div>
            <div className="col-4 mb-2" style={{ padding: '0.5rem' }}>
              <button
                className="btn btn-outline-secondary w-100"
                style={{
                  height: '60px',
                  fontSize: '1.5rem',
                  padding: '0.5rem',
                }}
                onClick={() => appendPoints('0')}
              >
                0
              </button>
            </div>
            <div className="col-4 mb-2" style={{ padding: '0.5rem' }}>
              <button
                className="btn btn-outline-success w-100"
                style={{
                  height: '60px',
                  fontSize: '1.5rem',
                  padding: '0.5rem',
                }}
                onClick={handleSubmitPoints}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      ) : (
        <PointsSummary
          totalPoints={totalPoints}
          phoneNumber={phoneNumber}
          onDone={onDone}
          onRedeem={onSubmitPoints}
          // onBack={onBack}
        />
      )}
    </div>
  );
};

export default PointsInput;
