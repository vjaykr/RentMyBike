import React from 'react';
import SearchBar from '../components/SearchBar';
import MapView from '../components/MapView';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to the Future of Bike Rental</h1>
                    <p>
                        Rent bikes directly from owners and explore your city with ease, flexibility, and convenience.
                    </p>
                    <button className="cta-btn">Explore Bikes</button>
                </div>
            </header>

            <section className="features-section">
                <div className="features">
                    <div className="feature-card">
                        <h2>Peer-to-Peer</h2>
                        <p>Rent bikes directly from trusted bike owners in your area.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Flexible Pricing</h2>
                        <p>Set your price, your terms – and enjoy affordable bike rentals.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Secure & Transparent</h2>
                        <p>All transactions are safe and secured with real-time tracking.</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>Step 1: Browse</h3>
                        <p>Find bikes near you with detailed information about availability and pricing.</p>
                    </div>
                    <div className="step">
                        <h3>Step 2: Book</h3>
                        <p>Make a booking request or instantly rent a bike from the owner.</p>
                    </div>
                    <div className="step">
                        <h3>Step 3: Ride & Enjoy</h3>
                        <p>Pick up your bike, explore the city, and return it when you're done.</p>
                    </div>
                </div>
            </section>

            <section className="search-map-section">
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                <div className="map-view-container">
                    <MapView />
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2025 P2P Bike Rental Platform | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default HomePage;
