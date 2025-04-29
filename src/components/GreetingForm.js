import React from "react";

function GreetingForm({
  dear,
  message,
  from,
  error,
  onImageUpload,
  onDearChange,
  onMessageChange,
  onFromChange,
  onDownloadClick
}) {
  return (
    <div className="form-container">
      <div>
        <label className="label">Upload Template Image</label>
        <input type="file" accept="image/*" onChange={onImageUpload} />
      </div>
      <div>
        <label className="label">Dear (max 15 characters)</label>
        <input
          className="input"
          value={dear}
          onChange={onDearChange}
          maxLength={15}
        />
      </div>
      <div>
        <label className="label">Message (max 30 chars no spaces, 32 with spaces)</label>
        <textarea
          className="textarea message-input"
          rows="2"
          value={message}
          onChange={onMessageChange}
          maxLength={61}
        />
      </div>
      <div>
        <label className="label">From (max 18 characters)</label>
        <input
          className="input"
          value={from}
          onChange={onFromChange}
          maxLength={18}
        />
      </div>
      {error && <p className="error-text">{error}</p>}
      <button onClick={onDownloadClick} className="download-button">
        Download Card
      </button>
    </div>
  );
}

export default GreetingForm;
