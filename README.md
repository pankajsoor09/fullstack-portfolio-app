# Fullstack Portfolio Application

> A modern, production-ready fullstack portfolio application built with Next.js and Express.js

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

## 📖 About

A comprehensive fullstack portfolio application designed to showcase projects, skills, and professional experience. Built with modern web technologies and industry-standard development practices.

### ✨ Key Features

- 🎨 Modern UI/UX - Responsive design with Tailwind CSS
- 🔐 Secure Authentication - JWT-based auth system
- 📊 Admin Dashboard - Full CRUD operations for content management
- 🚀 REST API - Well-structured backend with Express.js
- 💾 Database Integration - PostgreSQL with Prisma ORM
- 🧪 Production Ready - Environment-based configuration
- 📱 Fully Responsive - Mobile-first design approach

---

## 🛠️ Tech Stack

### Frontend
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Linting: ESLint

### Backend
- Runtime: Node.js
- Framework: Express.js
- Language: JavaScript
- Middleware: CORS, dotenv

### Database (Planned)
- Database: PostgreSQL
- ORM: Prisma
- Migrations: Prisma Migrate

### DevOps (Planned)
- Version Control: Git & GitHub
- CI/CD: GitHub Actions
- Containerization: Docker
- Deployment: Vercel (Frontend), Railway (Backend)

---

## 📁 Project Structure

fullstack-portfolio-app/
│
├── frontend/                     # Next.js Application
│   ├── src/
│   │   ├── app/                 # App Router pages
│   │   │   ├── layout.tsx       # Root layout
│   │   │   ├── page.tsx         # Home page
│   │   │   └── globals.css      # Global styles
│   │   ├── components/          # Reusable components (planned)
│   │   ├── lib/                 # Utilities & helpers (planned)
│   │   └── types/               # TypeScript types (planned)
│   ├── public/                  # Static assets
│   ├── .eslintrc.json          # ESLint configuration
│   ├── next.config.js          # Next.js configuration
│   ├── tailwind.config.ts      # Tailwind configuration
│   ├── tsconfig.json           # TypeScript configuration
│   └── package.json            # Frontend dependencies
│
├── backend/                      # Express API
│   ├── src/
│   │   └── index.js            # Server entry point
│   ├── .env                     # Environment variables (gitignored)
│   ├── .env.example            # Example environment file
│   └── package.json            # Backend dependencies
│
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation
---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Installation

1. Clone the repository
  
   git clone https://github.com/yourusername/fullstack-portfolio-app.git
   cd fullstack-portfolio-app
   
2. Setup Frontend
  
   cd frontend
   npm install
   
3. Setup Backend
  
   cd backend
   npm install
   
4. Configure Environment Variables
   
   Create a .env file in the backend directory:
  
   cd backend
   cp .env.example .env
   
   
   Edit .env with your configuration:
  
   PORT=5000
   NODE_ENV=development
   # Add more variables as needed
   
### Running the Application

Development Mode:

Open two terminal windows:

Terminal 1 - Frontend:
cd frontend
npm run dev
Visit: [http://localhost:3000](http://localhost:3000)

Terminal 2 - Backend:
cd backend
npm run dev
API running at: [http://localhost:5000](http://localhost:5000)

---

## 📝 Available Scripts

### Frontend

| Command | Description |
|---------|-------------|
| npm run dev | Start development server |
| npm run build | Build for production |
| npm start | Start production server |
| npm run lint | Run ESLint |

### Backend

| Command | Description |
|---------|-------------|
| npm run dev | Start development server with nodemon |
| npm start | Start production server |

---

## 🔌 API Endpoints

### Current Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health check endpoint |

### Planned Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/login | User authentication |
| POST | /api/auth/register | User registration |
| GET | /api/projects | Get all projects |
| POST | /api/projects | Create new project |
| PUT | /api/projects/:id | Update project |
| DELETE | /api/projects/:id | Delete project |
| POST | /api/contact | Submit contact form |

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Initialize Next.js frontend
- [x] Setup Express.js backend
- [x] Configure project structure
- [x] Environment variables setup

### Phase 2: Database & Authentication 🚧
- [ ] Integrate PostgreSQL
- [ ] Setup Prisma ORM
- [ ] Implement JWT authentication
- [ ] Create user models

### Phase 3: Core Features 📋
- [ ] Build project CRUD operations
- [ ] Create admin dashboard
- [ ] Implement contact form
- [ ] Add file upload functionality

### Phase 4: Testing & Quality 🧪
- [ ] Unit tests (Jest)
- [ ] E2E tests (Playwright)
- [ ] API tests (Supertest)
- [ ] Code coverage reports

### Phase 5: DevOps & Deployment 🚀
- [ ] Docker containerization
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Deploy frontend (Vercel)
- [ ] Deploy backend (Railway)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

Pankaj Soor

- GitHub: [@pankajsoor09](https://github.com/pankajsoor09)
- LinkedIn: [Pankaj Soor](https://linkedin.com/in/pankajsoor)
- Email: pankajsoor09@gmail.com

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma Documentation](https://www.prisma.io/docs)

---

## 📊 Project Status

🚧 Currently in active development - This project is being built incrementally following industry best practices.

Last Updated: December 2024

---

⭐ Star this repo if you find it helpful!
