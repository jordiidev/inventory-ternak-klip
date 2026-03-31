# Inventory Management Dashboard

A simple Inventory Management Dashboard built with **React** and **Supabase**. This project is a learning MVP focused on product management, real-time updates, and clean UI structure.

---

# Project Structure

The project is organized in a modular and scalable way:

```
src/
├── components/                 # Reusable UI components (Sidebar, StatsCard, etc.)
│   ├── layouts/
│   │   ├── Sidebar.jsx
│   │   └── Navbar.jsx
│   ├── common/                 # Reusable UI Utility (Loader, Skeleton, etc.)
│   │   ├── Loader.jsx
│   ├── dashboard/
│   │   ├── StatsCard.jsx
│   │   └── RecentProducts.jsx
│   └── products/
│       └── ProductTable.jsx
├── pages/                      # Page-level components (Dashboard, Products)
│   ├── Dashboard.jsx
│   └── Products.jsx
├── services/                   # Supabase client configuration
│   └── supabaseClient.js
├── hooks/                      # Custom React hooks (useProducts)
│   └── useProducts.js
├── utils/                      # Custom Helper Function 
│   └── formatDate.js
│
├── App.jsx                     # Main application routing
└── main.jsx

---

# Features

* 📊 Dashboard with product statistics cards
* 📦 Product listing with real-time updates (Supabase Realtime)
* 🧭 Sidebar navigation with active route highlighting
* 🔄 Auto refresh on database changes
* 🎨 Clean UI with hover animations, modern layout, and responsive design

---

# 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/jordiidev/inventory-ternak-klip.git
cd inventory-ternak-klip
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the project

```bash
npm run dev
```

### 5. Dont forget to turn on "Enable Realtime" in Supabase Table Configuration for Handle Realtime Data Changes .


The app will be running at:

```
http://localhost:5173
```

---

# AI Assistance

This project was developed with the help of AI tools (Claude).

AI was used to:

* Suggest best practices for frontend architecture

All final decisions, implementation, and customization were done manually to ensure understanding and maintain control over the codebase.

---

This project is built as a **learning MVP** and can be extended into a full SaaS-level system.

Future improvements:

* Pagination for products
* Authentication system
* Role-based access control
* Advanced analytics dashboard like Chart Statistic
* Create , Edit, Delete Feature
