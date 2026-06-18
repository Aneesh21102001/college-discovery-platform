# EduPlatform

A full-stack education discovery platform built with Next.js, Express.js, MongoDB Atlas, and Tailwind CSS. The platform helps students explore colleges, universities, schools, junior colleges, courses, and exams through searchable listings and detailed profiles.

## Features

### Institution Discovery

* Browse colleges, universities, schools, and junior colleges
* Search institutions by name
* Filter and sort listings
* Dynamic institution detail pages
* Responsive user interface

### Courses & Exams

* Explore available courses
* Browse entrance exams
* Structured content organization

### Compare Functionality

* Compare multiple institutions
* Persistent client-side shortlist
* Side-by-side comparison workflow

### Backend APIs

* RESTful API architecture
* MongoDB-backed institution data
* Dynamic routing using slugs
* Search and filtering support

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Project Structure

frontend/
├── app/
├── components/
├── lib/
└── public/

backend/
├── src/
│ ├── models/
│ ├── routes/
│ ├── config/
│ └── server.js
└── package.json

## API Endpoints

### Colleges

GET /api/colleges
GET /api/colleges/:slug

### Universities

GET /api/universities
GET /api/universities/:slug

### Schools

GET /api/schools
GET /api/schools/:slug

### Junior Colleges

GET /api/junior-colleges
GET /api/junior-colleges/:slug

## Installation

### Clone Repository

git clone <repository-url>

### Backend Setup

cd backend

npm install

Create .env file

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start backend

npm run dev

### Frontend Setup

cd frontend

npm install

Create .env.local file

NEXT_PUBLIC_API_URL=http://localhost:5000

Start frontend

npm run dev

## Future Enhancements

* Authentication and authorization
* Admin dashboard
* Lead generation and counseling workflows
* Saved institutions
* Reviews and ratings
* Advanced search and filtering
* Pagination
* Analytics and monitoring

## Architecture

Frontend (Next.js)

↓

REST APIs (Express.js)

↓

MongoDB Atlas

## Author

Aneesh Nedunoori
