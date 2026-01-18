# Node.js CRUD Application

A simple CRUD (Create, Read, Update, Delete) application built with **Node.js**, **Express**, and **MongoDB**.

## Features
- User/Data Management (CRUD operations)
- Environment variable configuration
- Session management
- Image uploading (via Multer)

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/snandan93/node_crud_app.git
   cd node_crud_app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=4000
   DB_URI=your_mongodb_connection_string
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **View Engine**: EJS
- **Middleware**: Multer, Express-Session
