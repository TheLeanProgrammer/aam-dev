import React from "react";

const Card = ({ cardTitle, cardContent, cardImage, cardUrl }) => {
  return (
    <div className="col-md-3 col-lg-3 col-xs-12 mb-4">
      <div class="card" style={{ borderRadius: "25px" }}>
        <img class="card-img-top" src={cardImage} alt={cardTitle} />
        <div class="card-body">
          <h5 class="card-title">{cardTitle}</h5>
          <p class="card-text">{cardContent}</p>
          <a href={cardUrl} class="see-more" target="_blank" rel="noreferrer">
            Go somewhere -&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
