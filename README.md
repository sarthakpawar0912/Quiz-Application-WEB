<<<<<<< HEAD
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

=======
# QuizWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> a3feb07 (Initial commit for Quiz Application)
