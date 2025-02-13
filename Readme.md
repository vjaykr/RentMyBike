# P2P Bike Rental Platform

## Overview

The P2P Bike Rental Platform is a decentralized online marketplace that connects bike owners with renters. It allows individuals to rent bikes from private owners, providing a flexible, cost-effective, and secure way to explore cities. The platform is built using the **MERN stack** (MongoDB, Express, React, Node.js) and provides a seamless experience for users and bike owners.

### Features
- Peer-to-peer bike rental
- Flexible pricing and rental terms
- Secure payment integration
- Real-time GPS tracking for bikes
- Reviews and feedback for both renters and bike owners
- Admin dashboard for managing users, bikes, and transactions
- User authentication and secure registration

## Technologies Used
- **Frontend**: React.js, Tailwind CSS (or Bootstrap for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Firebase Authentication (optional)
- **Payment Gateway**: Stripe / Razorpay
- **Real-time Tracking**: Google Maps API (for bike locations)
- **Deployment**: Docker (optional for containerization)

## Installation

To run the project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/p2p-bike-rental.git
cd p2p-bike-rental
```

### 2. Set up the Backend (API)
Navigate to the backend directory and install the dependencies.
```bash
cd backend
npm install
```

### 3. Set up the Frontend
Navigate to the frontend directory and install the dependencies.
```bash
cd frontend
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in both the frontend and backend directories.

#### Backend `.env`
```ini
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
FIREBASE_CONFIG=<Your Firebase Config>
```

#### Frontend `.env`
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

### 5. Run the Project
Start the backend server and frontend development server.

#### Start Backend
```bash
cd backend
npm start
```

#### Start Frontend
```bash
cd frontend
npm start
```

Visit `http://localhost:3000` to see the frontend and `http://localhost:5000` for the backend API.

## Features

1. **User Registration and Authentication**
    Users can sign up, log in, and manage their profiles. Authentication is handled securely via JWT (JSON Web Tokens).

2. **Bike Owner Module**
    Bike owners can list their bikes for rent by providing necessary details like bike type, pricing, availability, etc. They can also manage bookings and track earnings.

3. **Renter Module**
    Renters can search for bikes by location, price, and availability. They can book bikes, make payments, and leave reviews.

4. **Payment Integration**
    The platform integrates with Stripe or Razorpay for secure online payments.

5. **Real-Time GPS Tracking**
    Bike owners and renters can track the rented bikes in real-time via Google Maps API.

6. **Admin Dashboard**
    The admin can manage users, bikes, transactions, and handle disputes.

## Folder Structure
Here is the general folder structure of the project:

```plaintext
/p2p-bike-rental
|-- /backend
|   |-- /controllers
|   |-- /models
|   |-- /routes
|   |-- server.js
|   |-- .env
|-- /frontend
|   |-- /public
|   |-- /src
|   |   |-- /components
|   |   |-- /pages
|   |   |-- /services
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- .env
|-- .gitignore
|-- README.md
|-- package.json
```

## Contributing
We welcome contributions to improve the platform! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.