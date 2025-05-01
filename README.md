🎨 Greeting Card Generator

A React web app for creating personalized greeting cards with precise text overlay. Upload templates, customize messages, and download finished cards as PNGs. Built with **React 19**, **Vitest**, and **html2canvas**.

Demo: [Live Preview](https://prnt.sc/VXhsBQBSUAZo)
Template Asset: [Google Drive](https://drive.google.com/file/d/1exO_gxYNIX4IP1q68y47odWz6y762stt/view)

---

## 🚀 Quick Start

### Prerequisites

- Node.js v18+
- npm v9+

```bash
git clone https://github.com/Dikarahmanm/greeting-card-generator
cd greeting-card-generator
npm install
npm start
```

_Open <http://localhost:3000> in your browser_

---

## ✨ Key Features

| Feature                | Implementation Details                 |
|------------------------|----------------------------------------|
| **Image Upload**       | Drag & drop or file selector           |
| **Text Positioning**   | CSS absolute positioning with % values |
| **Form Validation**    | Real-time character/line checks        |
| **Responsive Design**  | Mobile-first CSS Grid/Flexbox          |
| **PDF Download**       | html2canvas integration                |

---

## 🛠️ Tech Stack

**Core**

- React 19.1.0 (Beta)
- Vite 5.2.0

**Testing**

- Vitest 3.1.2
- React Testing Library 16.3.0

**Libraries**

- html2canvas 1.4.1 (Image capture)
- react-hook-form 7.56.1 (Form management)

---

## 📂 Project Structure

```
greeting-card-generator/
├── src/
│   ├── components/
│   │   ├── GreetingForm/   # Form logic & validation
│   │   ├── CardPreview/    # Image overlay system
│   │   └── helpers/        # Utilities & constants
│   ├── assets/             # Default templates
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── __tests__/              # 10 unit tests
├── public/                 # Static assets
└── vitest.config.js        # Test configuration
```

---

## ✅ Acceptance Criteria

| Criteria                | Implementation Status | Details |
|-------------------------|-----------------------|---------|
| Clean, modular code     | ✅ Completed          | 4 core components + utility modules |
| Form validation         | ✅ Completed          | Real-time checks for all fields |
| 10 unit tests           | ✅ Completed          | 90% test coverage |
| Precise text placement  | ✅ Completed          | Pixel-perfect CSS positioning |
| Responsive layout       | ✅ Completed          | Mobile/tablet/desktop breakpoints |

---

## 🧪 Testing

**Run All Tests**

```bash
npm test
```

**Test Coverage Report**

```bash
npm run test:coverage
```

_Sample Output:_

```
File                | % Stmts | % Branch | % Funcs | % Lines 
-----------------------------------------------------
GreetingForm.jsx    |    100  |     92   |   100   |   100  
CardPreview.jsx     |    100  |    100   |   100   |   100  
helpers/            |    100  |    100   |   100   |   100  
```

---

## 🖼️ How It Works

1. **Image Upload**

```jsx
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (/image\/(png|jpeg)/.test(file.type)) {
    setTemplate(URL.createObjectURL(file));
  }
};
```

2. **Text Validation**

```js
// helpers/validation.js
export const validateMessage = (text) => {
  const charsWithoutSpaces = text.replace(/ /g, '').length;
  const lines = text.split('\n').length;
  
  return charsWithoutSpaces <= 30 && lines <= 2;
};
```

3. **Image Export**

```js
const exportCard = async () => {
  const canvas = await html2canvas(cardRef.current);
  canvas.toBlob((blob) => {
    saveAs(blob, 'card.png');
  });
};
```

---

## 🚨 Common Issues

**React 19 Compatibility**

```bash
# If encountering beta version errors
npm install react@beta react-dom@beta
```

**Image Loading Issues**

- Ensure images are served from same origin
- Add CORS headers if using external images

**Test Failures**

```bash
# Clear test cache
npm test -- --clearCache
```

---

## 🤝 Contribution Guide

1. Fork repository
2. Create feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit changes

```bash
git commit -m "Add amazing feature"
```

4. Push to branch

```bash
git push origin feature/amazing-feature
```

5. Open pull request

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.
