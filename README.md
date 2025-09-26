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
- Resume Upload Section  
- HR Dashboard – Candidate List  

> Make sure you create a `screenshots/` folder inside your repo and save the PNG/JPG files there.  
> Example usage in Markdown:  
> ```markdown
> ![Candidate Form](./screenshots/candidate-form.png)
> ![HR Dashboard](./screenshots/hr-dashboard.png)
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

Create a .env file inside backend/ and add the following:

PORT=3000
MONGO_URI=your_mongo_connection_string

SENDGRID_API_KEY=your_sendgrid_api_key
SENDER_EMAIL=your_sender_email

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

JWT_SECRET=your_jwt_secret_key


Run the backend server:

npm start

🔹 Frontend Setup
cd frontend
npm install


Create a .env file inside frontend/ and add:

REACT_APP_API_URL=http://localhost:3000


Run the frontend:

npm start

📂 Project Structure
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

📸 Future Enhancements

📊 Visual dashboards for HR insights

🔎 Advanced candidate filtering (skills, experience, etc.)

🤝 Multi-HR collaboration with roles & permissions

👩‍💻 Author

Developed by Unnati Sharma for ColoredCow HR Problem Statement.

