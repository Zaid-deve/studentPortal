**Development Process of Student Portal**

### Introduction
The Student Portal project was developed to streamline the process of student applications for course changes, semester changes, and scholarships. The application consists of a frontend built using React.js and Tailwind CSS, and a backend using Node.js, Express.js, and MongoDB. It includes authentication, data management, and a structured UI for students to manage their applications efficiently.

### Planning & Architecture
The project was divided into three primary modules:
1. **Frontend:** A responsive React-based UI for students to submit and track applications.
2. **Backend:** A RESTful API using Express.js to handle authentication and application processing.
3. **Database:** MongoDB for structured data storage, using Mongoose ORM for efficient data handling.

Authentication was implemented using JWT tokens, ensuring secure login and API access. The database schema was carefully designed to enforce constraints, including unique emails and phone numbers, ensuring data integrity.

### Development
#### **Frontend Development**
The frontend was designed using **React.js** for state management and component-based structure. **Tailwind CSS** was used for styling to ensure a modern and scalable UI. Key pages and components include:
- **Login/Register Page:** Secure authentication with form validation.
- **Dashboard:** Displays student applications.
- **Application Forms:** Dynamic forms for different application types.
- **API Handling:** Used **Axios** to connect with the backend API.

Routing was handled using **React Router**, ensuring a smooth navigation experience.

#### **Backend Development**
The backend was built using **Express.js** and structured into controllers, routes, and models. Key functionalities include:
- **User Authentication:** Implemented using **JWT** with secure password hashing via **bcryptjs**.
- **Application Handling:** CRUD operations for applications, ensuring only authenticated users can interact with their data.
- **Middleware & Security:** Added **CORS** handling and error handling mechanisms.

MongoDB was used for data storage, and **Mongoose** was employed for schema definition and database operations. **Indexes** were set on the email and phone fields to enforce uniqueness.

### Deployment
#### **Hosting Platforms**
- **Frontend:** Hosted on **Vercel** - [Live URL](https://student-portal-two-orcin.vercel.app/)
- **Backend:** Hosted on **Render** - [Live API URL](https://studentportal-dy58.onrender.com)
- **Database:** Hosted on **Railway**

#### **Backend Deployment on Render**
- Hosted the backend on **Render.com** with environment variables for MongoDB connection and JWT secret.
- Configured the database on **Railway** for cloud accessibility.

#### **Frontend Deployment on Vercel**
- Pushed the frontend code to **GitHub**.
- Connected the repository to **Vercel** and deployed with automatic CI/CD.
- Updated the API base URL to point to the Render-hosted backend.

### Challenges & Solutions
1. **Unique Field Enforcement:** Initially, unique constraints on email and phone fields were not working. The issue was resolved by adding MongoDB indexes and reapplying the schema.
2. **Backend Hosting Limitations:** Render required billing information, so the backend was instead hosted on Render's free plan.
3. **Database Connectivity Issues:** Initially faced issues connecting MongoDB with the deployed backend. This was fixed by properly configuring Railway's MongoDB access and ensuring the connection string was correct.

### Conclusion
The Student Portal project successfully achieved its objectives by providing an intuitive UI and a well-structured backend. The use of **React.js, Tailwind CSS, Express.js, MongoDB, Render, and Railway** allowed for a scalable and efficient system. The deployment ensured accessibility, making the platform available for students to use seamlessly. Future improvements could include role-based access for administrators and more advanced analytics on student applications.

**Live Demo Links:**
- **Frontend:** [Vercel Deployment URL](https://student-portal-two-orcin.vercel.app/)
- **Backend API:** [Render Deployment URL](https://studentportal-dy58.onrender.com)

