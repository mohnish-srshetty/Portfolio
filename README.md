# Portfolio App

A simple responsive web application with secure user authentication and portfolio display.

## 🔗 Live Demo

- **Deployed App**: [Coming Soon - Will be added after Vercel deployment]
- **GitHub Repository**: https://github.com/mohnish-srshetty/potfolio

## Features

- ✅ User registration and login with secure password hashing
- ✅ JWT-based authentication with HTTP-only cookies
- ✅ Dynamic portfolio page displaying user information
- ✅ Responsive premium design with smooth animations
- ✅ MongoDB for persistent data storage
- ✅ Server-side rendering with EJS templates

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (local) / MongoDB Atlas (production)
- **Authentication**: bcryptjs, JSON Web Tokens (JWT)
- **Frontend**: HTML, CSS, JavaScript, EJS
- **Deployment**: Vercel

## Installation & Local Development

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation) OR MongoDB Atlas account

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohnish-srshetty/potfolio.git
   cd potfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the root directory (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and update the values:
   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
   JWT_SECRET=your_secure_random_key_here
   PORT=3000
   ```
   
   **Generate a secure JWT secret:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

4. **Start MongoDB (if using local)**
   
   - **Windows**: Start MongoDB service from Services
   - **Mac/Linux**: `mongod` or `sudo systemctl start mongod`

5. **Run the application**
   ```bash
   npm start
   ```
   
   For development with auto-restart:
   ```bash
   npm run dev
   ```

6. **Access the app**
   
   Open your browser to http://localhost:3000

## MongoDB Atlas Setup (For Production)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/atlas
   - Sign up for a free account

2. **Create a Cluster**
   - Create a new cluster (free tier M0 is sufficient)
   - Choose a cloud provider and region

3. **Configure Database Access**
   - Go to "Database Access" → Add New Database User
   - Create username and password
   - Grant "Read and Write" permissions

4. **Configure Network Access**
   - Go to "Network Access" → Add IP Address
   - For development: Add your current IP
   - For production: Add `0.0.0.0/0` (allow from anywhere)

5. **Get Connection String**
   - Go to "Databases" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Update `MONGODB_URI` in your `.env` or Vercel environment variables

   Example:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

## Deployment on Vercel

### Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- MongoDB Atlas cluster (see above)

### Deployment Steps

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/potfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Configure project settings

3. **Set Environment Variables in Vercel**
   
   Add these environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your secure random key (same as local)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at `https://your-project.vercel.app`

5. **Update README with live URL**
   - Once deployed, update the "Live Demo" section with your Vercel URL

## Usage

1. **Register a new account**
   - Open the landing page
   - Click "Register" tab
   - Enter your email, name, and password
   - Click "Register"

2. **Login**
   - After registration, you'll be switched to the login form
   - Enter your credentials
   - Click "Login"

3. **View Portfolio**
   - You'll be redirected to your portfolio page
   - Your name and email will be displayed
   - Portfolio sections show example content

4. **Logout**
   - Click your profile avatar (first letter of your name) in the top right
   - Click "Logout"
   - You'll be redirected to the landing page

## Project Structure

```
potfolio/
├── models/
│   └── User.js              # Mongoose user schema
├── public/
│   ├── css/
│   │   └── styles.css       # Main stylesheet
│   ├── js/
│   │   ├── script.js        # Landing page logic
│   │   └── portfolio.js     # Portfolio page logic
│   └── index.html           # Landing page
├── views/
│   └── portfolio.ejs        # Portfolio page template
├── server.js                # Express application
├── package.json             # Dependencies
├── vercel.json              # Vercel configuration
└── README.md                # This file
```

## Security Features

- Passwords are hashed using bcryptjs
- JWT tokens stored in HTTP-only cookies
- Environment variables for sensitive data
- Secure session management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Author

Mohnish S Shetty
