**Mini E-Commerce Store (React + i18n)**
 - This project is a mini e-commerce web application built with React, TypeScript, Tailwind CSS, and react-i18next (i18n) for multilingual support. It demonstrates a simple setup for managing product listings
 - The app currently supports 3 products and 3 languages: English, French, and German.

**Features**
- Built with react-i18next for dynamic language switching.
- Supports English (EN), French (FR), and German (DE).
- React-i18next manages translation hooks (t()) for components.

**Project Structure
- src/
-  ├─ i18n/
- │   ├─ index.ts         
-  │   └─ locales/
-  │       ├─ en/products.json
-  │       ├─ fr/products.json
-  │       └─ de/products.json
-  ├─ components/
-  │   ├─ ProductCard.tsx
-  │   └─ LanguageSwitcher.tsx
-  ├─ App.tsx
-  └─ main.tsx

**Usage**
1.Install Dependencies
- npm install
2.Run the Project
- npm run dev

3.Switch the Languages
- Use the buttons at the top to toggle between EN, FR, DE.

4.Interact with Products:
- Click Add to Cart or Buy Now to trigger an alert
