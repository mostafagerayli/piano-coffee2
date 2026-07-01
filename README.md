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

The project is structured into three main layers:

🏪 Frontend (Storefront)
🧑‍💼 Admin Dashboard
⚙️ Backend (API + Supabase Layer)
🏪 Frontend — Storefront (Home Page)

The Home page is a modern and responsive storefront for browsing coffee products.

🔎 Product Filtering System

Products are dynamically filtered by product-type:

🔥 Hot Drinks
🧊 Cold Drinks
🍰 Cakes
🍵 Matcha Products

Filtering is fully client-side, fast, and updates instantly without page reload.

✨ Frontend Features
Instant category-based filtering
Responsive mobile-first design
Reusable product card components
Smooth UI interactions
Optimized state management using React hooks
Clean and minimal coffee shop UI design
🧑‍💼 Admin Dashboard

A secure and protected admin panel for managing all product data.

🛠️ Features
📦 View all products
➕ Create new products
✏️ Edit existing products
❌ Delete products
🔄 Full CRUD functionality
🔐 Protected routes using Supabase Auth
⚙️ Backend — API Layer

The backend is implemented using Next.js API Routes connected to Supabase.

📡 API Endpoints
GET /api/products → Fetch all products
POST /api/products → Create a new product
PUT /api/products/:id → Update product data
DELETE /api/products/:id → Remove product
🧠 Backend Design Highlights
Clean separation between frontend and backend logic
Supabase as the primary database layer
Safe JSON parsing and error handling
Optimized fetch strategy using no-store
Modular service-based architecture
🔐 Authentication System

Authentication is handled using Supabase Auth:

Email-based login system
Persistent user sessions
Protected admin routes
Automatic redirect for unauthorized users
🎨 UI / UX Design
Modern dark coffee-inspired theme
Fully responsive design (mobile-first approach)
Tailwind CSS utility-first styling
Smooth shadows and soft rounded components
Consistent design system across pages
Typography powered by Vazirmatn
🔔 Notifications System

User feedback is handled using React Toastify:

✅ Success notifications (create, update, delete)
❌ Error handling alerts
⚠️ Validation warnings
📁 Project Structure
/app
  /dashboard        → Protected admin dashboard
  /login            → Authentication page
  /api              → Backend API routes
  /error            → Global error page
  /not-found        → Custom 404 page
  /loading          → Global loading UI

/components
  /pages
    /dashboard      → Admin product management components
    /home           → Storefront components
  /layout           → Layout system (Navbar, Sidebar)

/hooks
  useProducts       → Fetch products
  useAddProduct     → Create product
  useUpdateProduct  → Update product
  useDeleteProduct  → Delete product

/services
  product.service.js → API service layer

/utils
  formatPrice.js
  handleResponse.js

/lib
  supabaseClient.js → Client-side Supabase config
  supabaseAdmin.js  → Server-side Supabase config
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
Clean and scalable layered architecture
Separation of UI, business logic, and data layer
Fully reusable component system
Custom hooks for data management
Secure authentication flow with Supabase
Optimized API communication
Production-level project structure (not tutorial-based)
📈 Future Improvements
🔐 Role-based access control (Admin / Editor)
📷 Product image upload system
🔍 Advanced filtering (price, availability, popularity)
📄 Pagination system for large datasets
📊 Admin analytics dashboard
🔄 Real-time updates with Supabase subscriptions
🛒 Shopping cart and order system
💡 Architecture Philosophy

This project is built with a production mindset:

Scalability over quick implementation
Clean and maintainable code structure
Reusable and modular components
Separation of concerns across layers
Performance-first data handling strategy
🧾 License

This project is intended for portfolio and educational purposes only.