# FUTURE_FS_03
 a professional website for a real local business
# OwnBrand Website

## Overview

OwnBrand is a modern business website designed to help brands establish a strong digital presence. The platform showcases services, company information, brand identity, and customer engagement opportunities through a clean and responsive user experience.

The website is built with modern web technologies to ensure high performance, scalability, and accessibility across desktop and mobile devices.

**Live Website:** https://ownbrand.space-z.ai

---

## Key Features

* Responsive design for desktop, tablet, and mobile devices
* Modern and intuitive user interface
* Fast page loading and optimized performance
* SEO-friendly architecture
* Brand and service showcase
* Contact and customer inquiry functionality
* Scalable component-based architecture
* Secure environment configuration

---

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* JavaScript
* Tailwind CSS
* shadcn/ui
* Lucide React Icons

### Development Tools

* ESLint
* Bun / npm
* Git & GitHub

### Deployment

* Next.js Standalone Build
* Caddy Server (via Caddyfile configuration)

---

## Prerequisites

Before running the project locally, ensure you have:

* Node.js 18.x or later
* npm or Bun
* Git

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ownbrand
```

### 2. Install Dependencies

Using Bun:

```bash
bun install
```

Using npm:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL=your_database_url
```

Configure additional environment variables as required by your application.

---

## Running the Project

### Development Mode

Using Bun:

```bash
bun run dev
```

Using npm:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Building for Production

```bash
bun run build
```

or

```bash
npm run build
```

---

## Starting Production Server

```bash
bun run start
```

or

```bash
npm run start
```

---

## Project Structure

```text
ownbrand/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── styles/
│
├── public/
│
├── .env
├── .gitignore
├── components.json
├── next.config.ts
├── eslint.config.mjs
├── Caddyfile
├── bun.lock
└── README.md
```

### Structure Overview

* **src/app/** – Application routes and pages
* **src/components/** – Reusable UI components
* **src/hooks/** – Custom React hooks
* **src/lib/** – Utility functions and shared logic
* **public/** – Static assets
* **Caddyfile** – Web server configuration
* **next.config.ts** – Next.js configuration

---

