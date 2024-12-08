# **To-Doing Web Application**  
A full-stack To-Do List application to manage tasks efficiently, built with **React.js** for the frontend, **Node.js/Express.js** for the backend, and **MongoDB** as the database. The application will be containerized using **Docker** and deployed using **AWS ECS Fargate**.

---

## **Features**
- 📝 **CRUD Operations**: Add, Read, Update, and Delete tasks.  
- 🎨 **Modern UI**: Built using React.js for a responsive and interactive user experience.  
- 🚀 **Backend API**: RESTful APIs built with Node.js and Express.js.  
- 🗄️ **Database**: MongoDB for seamless data storage.  
- 🐳 **Containerization**: Dockerized application for portability.  (WIP)
- ☁️ **Deployment**: Hosted on AWS ECS Fargate.  (WIP)

---

## **Tech Stack**
### **Frontend**:
- React.js
- HTML, CSS, JavaScript

### **Backend**:
- Node.js
- Express.js

### **Database**:
- MongoDB

### **Deployment & Tools**:
- Docker (WIP)
- AWS ECS Fargate (WIP)
- GitHub

---

## **Installation Instructions**
Follow these steps to set up and run the project locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/Rohith-Potana/To-Doing-WebApp.git
cd To-Doing-WebApp
```

---

### **2. Run Backend**
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Start the server:
   ```bash
   node server.js
   ```
   Backend will run on **`http://localhost:5000`**.
---

### **3. Run Frontend**
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Start the React app:
   ```bash
   npm start
   ```
   Frontend will run on **`http://localhost:3000`**.
---

## **API Endpoints**
| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/tasks`      | Fetch all tasks          |
| POST   | `/api/tasks`      | Add a new task           |
| PUT    | `/api/tasks/:id`  | Update a specific task   |
| DELETE | `/api/tasks/:id`  | Delete a specific task   |


## **Contact**
**Rohith Potana**  
Email: [potanarohith@gmail.com](mailto:potanarohith@gmail.com)🚀
