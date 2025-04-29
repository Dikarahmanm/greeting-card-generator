import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";
import GreetingForm from "./components/GreetingForm";
import CardPreview from "./components/CardPreview";
import { validateMessage } from "./components/helpers";

function App() {
  const [image, setImage] = useState(null);
  const [dear, setDear] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [error, setError] = useState("");
  const cardRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
      setError("");
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleDearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 15) {
      setDear(value);
      setError("");
    } else {
      setError("Dear field cannot exceed 15 characters.");
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    const errorMsg = validateMessage(value);
    if (errorMsg) {
      setError(errorMsg);
    } else {
      setMessage(value);
      setError("");
    }
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    if (value.length <= 18) {
      setFrom(value);
      setError("");
    } else {
      setError("From field cannot exceed 18 characters.");
    }
  };

  const handleDownload = async () => {
    if (!image || !dear || !from) {
      setError("Please fill in all fields and upload an image.");
      return;
    }

    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const link = document.createElement("a");
    link.download = "greeting-card.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="app-container">
      <h1 className="title">Greeting Card Generator</h1>

      <GreetingForm
        dear={dear}
        message={message}
        from={from}
        error={error}
        onImageUpload={handleImageUpload}
        onDearChange={handleDearChange}
        onMessageChange={handleMessageChange}
        onFromChange={handleFromChange}
        onDownloadClick={handleDownload}
      />

      <CardPreview
        image={image}
        dear={dear}
        message={message}
        from={from}
        cardRef={cardRef}
      />
    </div>
  );
}

export default App;
