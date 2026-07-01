☕ Piano Coffee — Full-Stack Coffee Shop Platform

A modern, production-ready coffee shop web application built with Next.js (App Router), Supabase, and Tailwind CSS.
It includes a fully functional admin dashboard, secure authentication, and a dynamic product storefront with advanced filtering.

🚀 Tech Stack
⚡ Next.js 14+ (App Router)
🗄️ Supabase (Auth + PostgreSQL Database)
🎨 Tailwind CSS
⚛️ React (Hooks, Server & Client Components)
🔐 Supabase Authentication
📡 Next.js API Routes
🔔 React Toastify
🧩 Reusable Component Architecture
🧠 Custom Hooks (useProducts)
🇮🇷 Persian font support (Vazirmatn)
📌 Project Overview

This project is a full-stack coffee shop system with two main layers:

🏪 Public Storefront

A fast and responsive UI where users can browse and filter products.

🧑‍💼 Admin Dashboard

A secure control panel for managing products with full CRUD functionality.

🏠 Storefront (Home Page)

The Home page is designed as a modern product showcase for a coffee shop.

🔎 Product Filtering System

Products are dynamically filtered by product category/type:

🔥 Hot Drinks
🧊 Cold Drinks
🍰 Cakes
🍵 Matcha-based products

Filtering is fully client-side and updates instantly without page reload.

✨ Key Features
Instant filtering by product type
Smooth and responsive UI
Optimized state management with React hooks
Reusable product card components
Clean and minimal coffee-shop UI design
🧑‍💼 Admin Dashboard

A protected admin panel for managing all product data.

🛠️ Features
📦 View all products
➕ Create new products
✏️ Edit existing products
❌ Delete products
🔄 Full CRUD operations
🔐 Protected routes using Supabase Auth
🔐 Authentication System

Authentication is handled via Supabase Auth:

Email-based login system
Session persistence
Protected dashboard routes
Auto redirect for unauthorized users
🧠 Backend Architecture

The backend is built using Next.js API Routes connected to Supabase.

API Endpoints
GET /api/products → Fetch all products
POST /api/products → Create product
PUT /api/products/:id → Update product
DELETE /api/products/:id → Delete product
Design Notes
Clean separation between frontend and data layer
Supabase used as primary database
Safe JSON parsing and error handling
Optimized fetch strategy (no-store where needed)
🎨 UI / UX Design
Modern dark-themed UI
Coffee-inspired aesthetic
Fully responsive design (mobile-first)
Tailwind CSS utility-first styling
Smooth shadows, rounded cards, and soft contrasts
Typography powered by Vazirmatn font
🔔 Notifications

User feedback is handled using React Toastify:

✅ Success messages (create/update/delete)
❌ Error handling alerts
⚠️ Validation warnings
📁 Project Structure
/app
  /dashboard        → Admin panel (protected)
  /login            → Authentication page
  /api              → Backend API routes
  /error            → Global error UI
  /not-found        → 404 page
  /loading          → Loading UI

/components
  /ui               → Reusable UI components
  /layout           → Layout system (Navbar/Sidebar)
  /products         → Product-related components

/hooks
  useProducts       → Product state & logic

/lib
  supabaseClient    → Supabase configuration
⚙️ Environment Variables

Create a .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
▶️ Getting Started
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
🧠 Key Engineering Highlights
Clean and scalable folder structure
Separation of UI, logic, and API layers
Reusable components across the project
Efficient state management using hooks
Secure authentication flow with Supabase
Optimized data fetching strategy
Error-safe API responses
Fully modular architecture
📈 Future Improvements
🔐 Role-based access control (Admin / Editor)
📷 Product image upload system
🔍 Advanced filtering (price, availability, popularity)
📄 Pagination system for large datasets
📊 Admin analytics dashboard
🔄 Real-time updates via Supabase subscriptions
🛒 Shopping cart & order system
💡 Architecture Philosophy

This project is built with a focus on:

Scalability over quick hacks
Clean and readable code structure
Reusable and maintainable components
Performance-first data handling
Real-world production patterns (not tutorial code)
🧾 License

This project is intended for portfolio and educational use.