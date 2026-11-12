# 📚 Tundra - Bookstore Marketplace

> A minimalist and premium dummy bookstore marketplace built for frontend portfolio purposes. Designed with an "Apple-style" glassmorphism aesthetic and smooth micro-interactions.

## 🔗 Live Demo
[**View Live Demo**](https://tundra-marketplace.vercel.app/)

---

## ✨ Features
- 🎨 **Modern UI/UX**: Glassmorphism effects, interactive mouse spotlight, and smooth scroll animations.
- 🛣️ **Dynamic Routing**: Multi-page navigation using React Router DOM.
- 🛒 **Global State Management**: Cart state managed seamlessly using React Context API.
- 💾 **Persistent Storage**: Cart data is saved in `localStorage`, so it doesn't disappear on page refresh.
- 🔍 **Smart Filtering**: Filter books by category and "Best Seller" status dynamically.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop views.

---

## 🛠️ Tech Stack
- **Framework**: [React.js](https://reactjs.org/) (via Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: Inline SVG (Heroicons style)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📸 Screenshots

### Home Page
<img width="1541" height="796" alt="image" src="https://github.com/user-attachments/assets/2a2e9f7e-5cae-4499-a1c8-1ffc848d6e23" />


### Cart Page
<img width="1546" height="796" alt="image" src="https://github.com/user-attachments/assets/750ea2a8-b6ab-46bf-b541-2ba40693e80b" />


---

## 🚀 How to Run Locally

1. **Clone this repository**
   git clone https://github.com/username/tundra-bookstore.git
   
3. Navigate into the directory
   cd tundra-bookstore


3. Install dependencies
npm install

4. Start the development server
npm run dev


📂 Project Structure

src/
├── assets/         # Images and static files
├── components/     # Reusable UI components (Navbar, Footer, ProductCard)
├── context/        # React Context for Cart state
├── data/           # Dummy database (products.js)
├── pages/          # Page components (Home, Katalog, Keranjang, etc.)
├── App.jsx         # Main app routing
└── main.jsx        # Entry point


