
# Fullstack User Management App

This is a fullstack project built with **Spring Boot (backend)**, **React (frontend)**, and **MySQL (database)**.  
It provides user management features like **Add, View, Edit, and Delete users**.

---

## 🚀 Tech Stack
- **Frontend:** React, Bootstrap, Axios
- **Backend:** Spring Boot, REST API
- **Database:** MySQL
- **Tools:** Maven, Git, Postman

---

## 📂 Project Structure
```

fullstack-backend/   # Spring Boot backend
┣ src/
┣ pom.xml
┣ ...
┣ frontend/         # React frontend
┣ src/
┣ package.json

````

---

## ⚡ Getting Started

### Backend (Spring Boot)
1. Go to the backend folder:
   ```bash
   cd fullstack-backend
````

2. Configure your `application.properties` with MySQL credentials:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/yourdbname
   spring.datasource.username=yourusername
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Run the Spring Boot app:

   ```bash
   mvn spring-boot:run
   ```

   Server will start at: **[http://localhost:8089](http://localhost:8089)**

---

### Frontend (React)

1. Go to the frontend folder:

   ```bash
   cd fullstack-backend/frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run React app:

   ```bash
   npm start
   ```

   Frontend will start at: **[http://localhost:3000](http://localhost:3000)**

---

## ✅ Features

* Add new user
* View user details
* Edit existing user
* Delete user (with confirmation modal)

---


Would you like me to generate a **professional README.md file** and add it directly to your repo (so you just commit & push)?
```
