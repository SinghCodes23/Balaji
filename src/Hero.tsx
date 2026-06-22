import './Hero.css';

function Hero() {
    return(
        <div className="hero">
            <div className="hero-content">
                <h1> Your trusted partner in premium plywood and door manufacturing.</h1>
                <p>Whether you're building a home, designing interiors, or managing a large-scale construction project.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Shop Now</button>
                    <button className="btn-secondary">View Product Catalog</button>
                </div>
            </div>
        </div>
        
    );
}
export default Hero;