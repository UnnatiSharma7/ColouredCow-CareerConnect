# 🎯 ColoredCow HR Dashboard

A full-stack HR management solution built with the **MERN stack** to streamline candidate applications, resume handling, and HR decision-making.

---

## ✨ Features

- 📝 Candidate application form with card-based UI and resume upload  
- ☁️ Resume storage integrated with **Cloudinary**  
- 👩‍💼 HR Dashboard to view candidate details and download resumes  
- 🔒 Secure **JWT authentication** for HR users  
- 📊 Application tracking (approved / rejected / pending)  
- 📧 Email notifications to candidates via **SendGrid**  
- 📈 Scope for enhanced analytics with visual dashboards  

---

## 📸 Screenshots

- Candidate Application Form
  <img width="2524" height="1186" alt="image" src="https://github.com/user-attachments/assets/c24f857a-08b4-4357-be15-4fc878ab38d5" />

- Application Overview Section
  <img width="2511" height="1207" alt="image" src="https://github.com/user-attachments/assets/0c9c8210-ab98-433b-a43b-596af7dfe603" />

- HR Dashboard – Applications List
  <img width="2505" height="1215" alt="image" src="https://github.com/user-attachments/assets/7f1fe75f-500f-4f84-b046-c2b8e3220a49" />

- HR Reports
  <img width="2519" height="1193" alt="image" src="https://github.com/user-attachments/assets/2439dabc-a65b-45e7-98a7-16dce5b1b8a8" />
> ```

---

## 🚀 Tech Stack

**Frontend:** React.js, Material-UI  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Atlas)  
**Authentication:** JWT + bcrypt  
**File Storage:** Cloudinary  
**Email Service:** SendGrid  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/UnnatiSharma7/ColouredCow-CareerConnect.git
cd ColouredCow-CareerConnect
```
---
## 🔹 Backend Setup
```bash
cd backend
npm install 
```

## 🔹 Create a .env file inside backend/ and add the following:
```
PORT=3000
MONGO_URI=your_mongo_connection_string

SENDGRID_API_KEY=your_sendgrid_api_key
SENDER_EMAIL=your_sender_email

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

JWT_SECRET=your_jwt_secret_key
```
---

## 🔹 Run the backend server:
```
npm start
```
---

## 🔹 Frontend Setup
```
cd frontend
npm install
```
---

## 🔹 Create a .env file inside frontend/ and add.
```
REACT_APP_API_URL=http://localhost:3000
```
---

## 🔹 Run the frontend.
```
npm start
```
---
## 📂 Project Structure
```
ColouredCow-CareerConnect/
│
├── backend/
│ ├── src/
│ │ ├── config/ # Configuration files (e.g., DB connection, cloud services)
│ │ ├── controllers/ # API controllers
│ │ ├── middlewares/ # Authentication, validation & upload middlewares
│ │ ├── models/ # MongoDB schemas
│ │ ├── routes/ # Express routes
│ │ └── utils/ # Utility/helper functions
│ │
│ ├── .env # Environment variables (not committed)
│ ├── package.json # Backend dependencies & scripts
│ ├── package-lock.json
│ └── server.js # Entry point
│
├── frontend/
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── components/ # Reusable React components
│ │ ├── context/ # Context API for state management
│ │ ├── pages/ # Application pages (Dashboard, Forms, etc.)
│ │ ├── App.css
│ │ ├── App.js
│ │ ├── App.test.js
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── logo.svg
│ │ ├── reportWebVitals.js
│ │ └── setupTests.js
│ │
│ ├── .env # Frontend environment variables
│ ├── package.json # Frontend dependencies & scripts
│ ├── package-lock.json
│ └── .gitignore
```
---

## 📸 Future Enhancements
• 📊 Visual dashboards for HR insights  
• 🔎 Advanced candidate filtering (skills, experience, etc.)  
• 🤝 Multi-HR collaboration with roles & permissions.

---

## 👩‍💻 Author
• Developed by Unnati Sharma for ColoredCow HR Problem Statement.

