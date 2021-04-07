import React from "react";
import "./Course.css";

const Card = ({ cardTitle, cardContent, cardImage, cardUrl }) => {
  return (
    <div className="col-md-3 col-lg-3 col-xs-12 mb-4">
      <div className="card" style={{ borderRadius: "25px" }}>
        <img className="card-img-top" src={cardImage} alt={cardTitle} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardContent}</p>
          <a href={cardUrl} className="see-more" target="_blank" rel="noreferrer">
            Watch More -&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
