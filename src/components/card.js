import React from 'react';

function CustomCard({ imageUrl, title, text }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid rounded-start" alt="Card" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-start">{title}</h5>
              <p className="card-text text-start">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
