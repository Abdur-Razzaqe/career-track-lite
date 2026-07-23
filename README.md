# CareerTrack Lite — Job Application Tracker

A full-stack job application tracking system designed to help users manage their job hunt, monitor application statuses, and view basic statistics in a secure, protected dashboard.

---

##   Live Links
* **Live Frontend:** https://career-track-lite-zeta.vercel.app/
* **Live Backend API:** https://career-track-lite.onrender.com
* **API Health Check:** https://career-track-lite.onrender.com/api/health
* **GitHub Reposatory:** https://github.com/Abdur-Razzaqe/career-track-lite 

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
* **Email:** `newuser@gmail.com`
* **Password:** `123456`

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

###  2. Backend Setup  
Bash
cd server
npm install

--- 

###  Create a .env file inside the server directory based on .env.example:
Code snippetPORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/careertrack?schema=public"
JWT_SECRET="your_jwt_secret_key"
CLIENT_URL="http://localhost:5173"

--- 

### Run Prisma migrations and start the server:
Bashnpx prisma migrate dev --name init
npm run dev

### 3. Frontend Setup
Bash
cd ../client
npm install
---  
 
## Create a .env file inside the client directory:
Code snippet VITE_API_URL="http://localhost:5000/api"
Start the frontend development server:
Bash
npm run dev

---
###  API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login |
| GET | /api/auth/me | Current User |

---

## Applications

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/applications | Create Application |
| GET | /api/applications | Get All Applications |
| GET | /api/applications/:id | Get Single Application |
| PATCH | /api/applications/:id | Update Application |
| DELETE | /api/applications/:id | Delete Application |

---

## Dashboard

| Method | Endpoint |
|---------|----------|
| GET | /api/dashboard/stats |

---

## Health Check

| Method | Endpoint |
|---------|----------|
| GET | /api/health |

---

#  AI Tools Used

The following AI tools were used during development:

- ChatGPT & Gemini (Debugging & Learning)


AI was used only to assist learning, debugging, and code explanation. All implementation and understanding were completed by the developer.

---

#  Challenges Faced

- Setting up PostgreSQL with Prisma
- Prisma Migration
- JWT Authentication
- Route Protection
- Render Deployment
- Environment Variable Configuration
- Vercel API Connection
- CORS Configuration

---

#  Future Improvements

- Resume Upload
- Company Logo
- Email Reminder
- Calendar Integration
- AI Resume Review
- AI Interview Questions
- Dark Mode
- Analytics Charts

---

#  Student Information

**Student Name**

Abdur Razzaqe Mia

**Student ID**

WEB12-5163

---

## Database Used

 PostgreSQL

---

## Language Used

 TypeScript

---

## AI Feature Added

 No

---

#  Short Note

CareerTrack Lite is a secure full-stack job application tracker developed using React, TypeScript, Node.js, Express, Prisma ORM, and PostgreSQL. It allows authenticated users to manage only their own job applications through complete CRUD functionality, JWT authentication, dashboard statistics, search, filtering, sorting, and a responsive user interface. The application is fully deployed and follows modern full-stack development practices.

