☕ Piano Coffee — Full Stack Coffee Shop Admin & Store

A modern coffee shop web application built with Next.js App Router, Supabase, and Tailwind CSS, featuring a complete admin dashboard and a dynamic product storefront with filtering capabilities.

🚀 Tech Stack
⚡ Next.js (App Router)
🗄️ Supabase (Auth + Database)
🎨 Tailwind CSS
⚛️ React (Hooks & Client Components)
🔔 React Toastify
🔐 Authentication (Supabase Auth)
📡 Next.js API Routes
🧩 Reusable Components Architecture
🧠 Custom Hooks (e.g. useProducts)
🇮🇷 Persian UI Support (Vazirmatn Font)
📦 Project Overview

This project is divided into two main parts:

🏠 Frontend Store (Home Page)

A public-facing coffee shop interface where users can browse products.

🧑‍💼 Admin Dashboard

A protected admin panel for managing products (CRUD operations).

🏠 Home Page Features

The Home page is the main storefront where products are displayed dynamically.

🔎 Product Filtering

Products can be filtered based on:

product-type

Filtering is fully dynamic without page reload.

Example:

☕ Espresso
🫘 Coffee Beans
🥤 Cold Drinks
🍰 Desserts (extensible)
⚙️ Key Features
Fast client-side filtering
Optimized state management with hooks
Responsive UI for mobile & desktop
Reusable product card components
Smooth UX with loading states
🧑‍💼 Admin Dashboard

A secure panel accessible only to authenticated users.

🛠️ Features
📦 View all products
➕ Add new product
✏️ Edit product
❌ Delete product
🔄 Full CRUD system
🔐 Protected routes (Supabase session-based auth)
🔐 Authentication (Supabase)

Authentication is handled using Supabase Auth:

Email-based login system
Session persistence
Protected dashboard routes
Auto redirect if not logged in
🧠 API Architecture (Next.js API Routes)

Backend logic is handled via Next.js API routes connected to Supabase.

Endpoints:
GET /api/products → Fetch all products
POST /api/products → Create product
PUT /api/products/:id → Update product
DELETE /api/products/:id → Remove product
Notes:
All routes are connected to Supabase
Error-safe JSON parsing implemented
Request caching disabled where needed (no-store)
🎨 UI / UX Design
Dark modern UI theme
Tailwind CSS utility-first styling
Rounded cards with soft shadows
Responsive layout (mobile-first)
Persian typography using Vazirmatn
Consistent design system across pages
🔔 Notifications System

Using React Toastify:

✅ Success messages (create/update/delete)
❌ Error handling alerts
⚠️ Warnings for invalid actions
⚙️ Pages Structure
Public Pages
/ → Home (Product listing + filter by type)
/login → Authentication page
Protected Pages
/dashboard → Admin panel
System Pages
/error → Global error handler
/not-found → Custom 404 page
/loading → Global loading UI
🧩 Reusable Architecture

The project is built with scalability in mind:

Reusable UI components
Shared layout system
Centralized hooks (useProducts)
Separation of concerns (UI / logic / API)
🧠 Key Features Summary
Full CRUD product system
Supabase backend integration
Secure authentication flow
Dynamic filtering on Home page
Admin dashboard with protected access
Reusable component architecture
Optimized API handling
Global error & loading handling
📁 Project Structure
/app
  /dashboard        → Admin panel
  /login            → Authentication page
  /api              → API routes (products CRUD)
  /error            → Error boundary page
  /not-found        → 404 page
  /loading          → Global loading UI

/components
  /ui               → Reusable UI components
  /layout           → Layout components (Sidebar/Navbar)
  /products         → Product-related components

/hooks
  useProducts       → Product data management

/lib
  supabaseClient    → Supabase configuration
🔧 Environment Variables

Create .env.local:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
▶️ Getting Started
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
📈 Future Improvements (Roadmap)
🔐 Role-based access control (Admin / Editor)
📷 Product image upload system
🔍 Advanced filtering (price, category, availability)
📄 Pagination for products
📊 Analytics dashboard for admin
🔄 Real-time updates with Supabase subscriptions
🧾 Order system (cart + checkout)
💡 Design Philosophy

This project follows:

Clean Architecture principles
Separation of UI and business logic
Scalable folder structure
Minimal but powerful UI design
Performance-first data fetching strategy
🧾 License

This project is open for learning and portfolio use.