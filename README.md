# CareerTrack Lite — Job Application Tracker

A full-stack job application tracking system designed to help users manage their job hunt, monitor application statuses, and view basic statistics in a secure, protected dashboard.

---

##   Live Links
* **Live Frontend:** https://career-track-lite-zeta.vercel.app/
* **Live Backend API:** https://career-track-lite.onrender.com
* **API Health Check:** https://career-track-lite.onrender.com/api/health

---

##  Main Features
* **Secure Authentication:** User registration and login powered by JWT and bcrypt password hashing.
* **Protected Routes:** Frontend and backend route protection ensuring users can only access and modify their own job applications.
* **Full Application CRUD:** Create, read, update, and delete job applications with fields like company name, job title, URL, source, status, application date, and notes.
* **Dashboard & Statistics:** Real-time summary cards tracking total applications, saved jobs, interviews, offers, and rejections.
* **Search, Filtering & Sorting:** Filter applications by status/source and sort them by date.
* **Responsive UI:** Clean and responsive layout built with React, featuring form validation, loading states, and error handling.

---

##  Technology Stack
* **Frontend:** React.js, Tailwind CSS / CSS, Axios
* **Backend:** Node.js, Express.js, TypeScript
* **Database & ORM:** PostgreSQL, Prisma ORM
* **Deployment:** Vercel (Frontend), Render (Backend), Neon (Database)

---

##  Test Login Credentials
You can use the following test account to evaluate the live application:
* **Email:** `testuser@example.com`
* **Password:** `password123`

---

##  Local Installation Instructions

Follow these steps to run the project locally on your machine.

### Prerequisites
* Node.js installed on your system
* PostgreSQL database instance (local or hosted like Neon)

### 1. Clone the Repository
```bash
git clone [https://github.com/Abdur-Razzaqe/career-track-lite.git](https://github.com/Abdur-Razzaqe/career-track-lite.git)
cd career-track-lite

---

### 2. Backend SetupBashcd server

npm install
Create a .env file inside the server directory based on .env.example:Code snippetPORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/careertrack?schema=public"
JWT_SECRET="your_jwt_secret_key"
CLIENT_URL="http://localhost:5173"
* Run Prisma migrations and start the server:
Bashnpx prisma migrate dev --name init
npm run dev

### 3. Frontend SetupBashcd ../client
npm install
Create a .env file inside the client directory:
Code snippet VITE_API_URL="http://localhost:5000/api"
Start the frontend development server:
Bash
npm run dev
📄 API Endpoint Summary
 Method | Endpoint | Description POST/api/auth/registerRegister a new user accountPOST/api/auth/loginLog in an existing userGET/api/auth/meGet currently logged-in user detailsPOST/api/applicationsCreate a new job applicationGET/api/applicationsList all applications belonging to the userGET/api/applications/:idView a single application by IDPATCH/api/applications/:idUpdate an existing applicationDELETE/api/applications/:idDelete an applicationGET/api/dashboard/statsGet dashboard summary statisticsGET/api/healthAPI health check endpoint🤖 AI Tools UsedAI tools were utilized during development for debugging TypeScript compilation errors, structuring Prisma database schemas, and optimizing frontend API integration patterns.🧗‍♂️ Challenges, Known Limitations & Future ImprovementsChallenges: Handling Express request parameter types in TypeScript (string | string[]) during controller updates and configuring proper CORS rules for production deployment.Limitations: Advanced data visualization charts are currently kept minimal as per MVP requirements.Future Improvements: Adding email reminders for upcoming interviews and integrating AI-powered resume and cover letter tailoring.
👤 AuthorName: Abdur Razzaqe MiaStudent ID: [Insert Student ID Here]
