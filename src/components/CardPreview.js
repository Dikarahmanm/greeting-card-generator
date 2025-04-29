import React from "react";

function CardPreview({ image, dear, message, from, cardRef }) {
  if (!image) return null;

  return (
    <div
      ref={cardRef}
      className="card-preview"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-dear">{dear}</div>
      <div className="text-message">
        {message.split("\n").map((line, index) => (
          <div key={index} className="message-line">{line}</div>
        ))}
      </div>
      <div className="text-from">{from}</div>
    </div>
  );
}

export default CardPreview;
