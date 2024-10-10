import React, { useState } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';

interface PointsSummaryProps {
  totalPoints: number;
  phoneNumber: string;
  onDone: () => void;
  onRedeem: (points: number) => void;
  onBack: () => void;
}

const PointsSummary: React.FC<PointsSummaryProps> = ({
  totalPoints,
  phoneNumber,
  onDone,
  onRedeem,
  onBack,
}) => {
  const [showRedeemOptions, setShowRedeemOptions] = useState(false);
  const [redeemed, setRedeemed] = useState(false);

  const handleRedeemClick = () => {
    setShowRedeemOptions(true);
  };

  const handleRedeemPoints = (points: number) => {
    onRedeem(points);
    setRedeemed(true);
    setShowRedeemOptions(false);
  };

  return (
    <div className="container my-4 p-4 bg-light rounded shadow-sm position-relative">
      {/* Back Button */}
      <button
        className="btn btn-link position-absolute top-0 start-0"
        onClick={onBack}
      >
        <i className="bi bi-arrow-left" style={{ fontSize: '1.5rem' }}></i>
      </button>

      <div className="text-center mt-5">
        <h4>Phone Number: {phoneNumber}</h4>
        <h5>Total Points: {totalPoints}</h5>
      </div>

      {!showRedeemOptions && !redeemed && (
        <div className="d-flex flex-column align-items-center mt-4">
          <button
            className="btn btn-primary btn-lg mb-3"
            style={{ width: '100%', maxWidth: '300px' }}
            onClick={handleRedeemClick}
          >
            Redeem
          </button>
          <button
            className="btn btn-secondary btn-lg"
            style={{ width: '100%', maxWidth: '300px' }}
            onClick={onDone}
          >
            Done
          </button>
        </div>
      )}

      {showRedeemOptions && (
        <div className="mt-4 text-center">
          <h6>Select an option to redeem:</h6>
          {totalPoints >= 500 && (
            <button
              className="btn btn-success btn-lg mb-2"
              style={{ width: '100%', maxWidth: '300px' }}
              onClick={() => handleRedeemPoints(500)}
            >
              Redeem 500 Points for 10 Ringgit
            </button>
          )}
          {totalPoints >= 1000 && (
            <button
              className="btn btn-success btn-lg mb-2"
              style={{ width: '100%', maxWidth: '300px' }}
              onClick={() => handleRedeemPoints(1000)}
            >
              Redeem 1000 Points for 25 Ringgit
            </button>
          )}
          {totalPoints < 500 && (
            <p className="mt-3 text-danger">Not enough points to redeem.</p>
          )}
          <button
            className="btn btn-secondary btn-lg p-3 mt-5 ms-3 mb-3"
            style={{ width: '100%', maxWidth: '60%' }}
            onClick={onDone}
          >
            Done
          </button>
        </div>
      )}

      {redeemed && (
        <div className="mt-4 text-center">
          <p className="text-success">Redemption successful!</p>
          <button
            className="btn btn-secondary btn-lg mt-3"
            style={{ width: '100%', maxWidth: '300px' }}
            onClick={onDone}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default PointsSummary;
