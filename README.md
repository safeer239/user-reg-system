# 🚀 User Management API

This is a RESTful API for managing users, built with **Node.js**, **Express.js**, and **MongoDB**. It provides endpoints to **create, read, update, and delete** users with proper authentication and error handling. The API is documented using **Swagger** for easy access and testing.

---

## 📋 **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [API Documentation](#api-documentation)

---

## 🌟 **Features**

- Create, Read, Update, Delete (CRUD) users.
- Authentication using **JWT** tokens.
- API documentation with **Swagger**.
- Error handling and validation.
- Organized code structure with MVC pattern.

---

## 🛠 **Tech Stack**

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Documentation:** Swagger
- **Authentication:** JWT (JSON Web Tokens)

---

## ⚙️ **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/safeer239/user-reg-system.git

2. **Navigate to project directory:**

        cd user-reg-system

3. **Install dependencies:**

    npm install


 ## 🛠 **Environment Variables**

PORT ,
MONGO_URI,
JWT_SECRET


## 🛠 **Running the API**

npm start


## 🛠 **API Endpoints**

Create user - POST  /api/auth/createUser

View user - GET  /api/auth/getUser

update user - PUT  /api/auth/updateUser

delete user - DELETE  /api/auth/deleteUser


## 🛠 **API Documentation**

Access Swagger API docs at: http://localhost:8080/api-docs

