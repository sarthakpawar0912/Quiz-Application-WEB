```markdown
# Quiz Application - Online Examination Portal

## 🎯 Overview
The **Quiz Application** is a full-stack online examination platform designed using **Spring Boot, Angular, and MySQL**. It allows users to take quizzes while providing admins with tools to create and manage tests. The system supports real-time monitoring, automatic submission, and performance tracking, offering a seamless experience for both students and administrators.

## 🚀 Tech Stack
- **Backend:** Java Spring Boot
- **Frontend:** Angular
- **Database:** MySQL
- **Additional:** REST APIs, JSON

## 📌 Features
### 🛠 Admin Features
- ✅ **Automatic Admin Creation** – A default admin account (`admin@gmail.com / admin`) is created upon startup.
- ✅ **Test & Question Management** – Admins can create tests with multiple-choice questions and correct answers.
- ✅ **View Test Results** – Admins can track user performance, correct answers, and overall test scores.

### 👩‍🎓 User Features
- ✅ **User Signup & Login** – Users can register and log in to access quizzes.
- ✅ **Taking Tests** – Users can attempt quizzes consisting of multiple-choice questions.
- ✅ **⏳ Real-Time Monitoring** – A countdown timer ensures users stay within the allocated time.
- ✅ **⚡ Automatic Submission** – Answers are automatically submitted if time runs out.
- ✅ **📊 View Results** – Users can see their scores and performance analytics after completing a quiz.

## 🏗️ Installation & Setup
### 1️⃣ Backend (Spring Boot)
#### Prerequisites:
- Install **Java 17**
- Install **Maven**
- Install **MySQL Server**

#### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/quiz-application.git
   cd quiz-application/backend
   ```
2. Configure the database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/quizdb
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### 2️⃣ Frontend (Angular)
#### Prerequisites:
- Install **Node.js** and **Angular CLI**

#### Steps:
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the Angular development server:
   ```sh
   ng serve --open
   ```

## 📂 Database Schema
### Users Table:
| ID  | Name | Email | Password |
|-----|------|-------|----------|
| 1   | John Doe | john@example.com | hashed_password |

### Questions Table:
| ID  | Test ID | Question Text | Option A | Option B | Option C | Option D | Correct Answer |
|-----|---------|--------------|----------|----------|----------|----------|----------------|
| 1   | 101     | What is Java? | A | B | C | D | A |

### Test Results Table:
| ID  | User ID | Test ID | Score |
|-----|---------|--------|-------|
| 1   | 1       | 101    | 85%   |

## 🔗 API Endpoints
### Authentication
- `POST /api/auth/signup` – Register a new user
- `POST /api/auth/login` – Login user/admin

### Admin Actions
- `POST /api/admin/create-test` – Create a new test
- `POST /api/admin/add-question` – Add a question to a test
- `GET /api/admin/results/{testId}` – View results of a test


## 🛠️ Future Enhancements
- 📱 Mobile-friendly UI
- 🎤 Voice-based quiz interaction
- 📡 WebSocket-based real-time monitoring
- 📊 Advanced analytics dashboard

