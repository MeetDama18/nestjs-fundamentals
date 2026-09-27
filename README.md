# NestJS Fundamentals (Assignment 2)

A REST API demonstrating NestJS core concepts: Modules, Controllers, Services, DTOs with `class-validator`, query parameter filtering, and global validation pipes.

## Live Deployment
https://nestjs-fundamentals-5tu1.onrender.com

---

## API Endpoints
- `GET /users` — Retrieve all users
- `GET /users?role=admin` — Retrieve users filtered by role query parameter
- `POST /users` — Create a user with DTO validation

---

## Deliverables & Screenshots

### 1. GET /users (All Users)
<img width="1892" height="1027" alt="Screenshot 2026-09-24 221725" src="https://github.com/user-attachments/assets/d7fd9d20-3321-45ff-b340-f50e59e7575d" />


### 2. POST /users (Success - 201 Created)
<img width="1890" height="1056" alt="Screenshot 2026-09-24 221649" src="https://github.com/user-attachments/assets/54dd8bc2-185f-4805-ba44-ad523f5027b5" />


### 3. POST /users (Validation Failure - 400 Bad Request)
<img width="1881" height="1033" alt="Screenshot 2026-09-24 222304" src="https://github.com/user-attachments/assets/0ce35716-4e51-491d-9a0e-43feb6b75e87" />


### 4. GET /users?role=admin (Filtered by Role Query Parameter)
<img width="1917" height="1078" alt="Screenshot 2026-09-24 222430" src="https://github.com/user-attachments/assets/70a206c4-acde-4ab3-a270-264118fea773" />
