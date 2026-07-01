☕ Piano Coffee — Full-Stack Coffee Shop Platform

A modern, production-ready coffee shop web application built with Next.js (App Router), Supabase, and Tailwind CSS.

It includes a fully functional admin dashboard, secure authentication system, and a dynamic storefront with category-based product filtering.

🚀 Tech Stack

⚡ Next.js 14+ (App Router)
🗄️ Supabase (Authentication + PostgreSQL Database)
🎨 Tailwind CSS
⚛️ React (Hooks, Server & Client Components)
🔐 Supabase Authentication
📡 Next.js API Routes
🔔 React Toastify (Notifications)
🧠 Custom Hooks Architecture
🧩 Reusable Component System
🇮🇷 Vazirmatn Font Support

📌 Project Architecture

The project is divided into three main layers:

🏪 Frontend (Storefront)
🧑‍💼 Admin Dashboard
⚙️ Backend (API + Supabase)
🏪 Frontend — Storefront (Home Page)

A fast and responsive UI for browsing coffee products.

🔎 Product Filtering System

Products are filtered by product-type:

🔥 Hot Drinks
🧊 Cold Drinks
🍰 Cakes
🍵 Matcha Products

Filtering is fully client-side and updates instantly without page reload.

✨ Features
Instant filtering by category
Responsive mobile-first design
Reusable product cards
Smooth UI interactions
Optimized React state management
🧑‍💼 Admin Dashboard

A secure admin panel for managing products.

🛠️ Features
📦 View all products
➕ Create new products
✏️ Edit products
❌ Delete products
🔄 Full CRUD system
🔐 Protected routes (Supabase Auth)
⚙️ Backend — API Layer

Built using Next.js API Routes connected to Supabase.

📡 API Endpoints
GET /api/products → Fetch all products
POST /api/products → Create product
PUT /api/products/:id → Update product
DELETE /api/products/:id → Delete product
🧠 Backend Highlights
Clean separation of logic
Supabase as database layer
Safe JSON parsing
Error handling system
Optimized fetch strategy (no-store)
🔐 Authentication System

Handled via Supabase Auth:

Email login system
Session persistence
Protected dashboard routes
Auto redirect for unauthorized users
🎨 UI / UX Design
Dark coffee-inspired theme
Fully responsive design
Tailwind CSS utility-first styling
Smooth shadows and rounded components
Vazirmatn typography
🔔 Notifications
✅ Success messages
❌ Error alerts
⚠️ Validation warnings
📁 Project Structure
/app
  /dashboard        → Admin dashboard (protected)
  /login            → Authentication page
  /api              → Backend API routes
  /error            → Error page
  /not-found        → 404 page
  /loading          → Loading UI

/components
  /pages
    /dashboard      → Admin components
    /home           → Storefront components
  /layout           → Layout system

/hooks
  useProducts
  useAddProduct
  useUpdateProduct
  useDeleteProduct

/services
  product.service.js

/utils
  formatPrice.js
  handleResponse.js

/lib
  supabaseClient.js
  supabaseAdmin.js
⚙️ Environment Variables
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
▶️ Getting Started
npm install
npm run dev
npm run build
🧠 Key Engineering Highlights
Clean layered architecture
Separation of UI and business logic
Reusable component system
Custom hooks for data handling
Secure authentication flow
Optimized API communication
Production-ready structure
📈 Future Improvements
Role-based access (Admin / Editor)
Product image upload system
Advanced filtering (price, popularity)
Pagination system
Admin analytics dashboard
Real-time updates with Supabase
Shopping cart system
💡 Architecture Philosophy
Scalability over shortcuts
Clean and maintainable code
Reusable components
Real-world production patterns
Performance-first design
🧾 License

This project is for portfolio and educational purposes.
