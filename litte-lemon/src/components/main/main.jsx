import React from 'react';
import './main.css';

const Main = () => {
  return (
    <>
        <main>
        {/* Hero Section */}
        <section className="hero">
            <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo erat sit amet erat pulvinar, non interdum nisl sodales.</p>
            <button>Reserve a Table</button>
            </div>
            <div className="hero-image">
            <img src="path/to/your-hero-image.png" alt="Little Lemon Restaurant" />
            </div>
        </section>

        {/* Specials Section */}
        <section className="specials">
            <h2>Specials</h2>
            <div className="specials-container">
            <div className="special-item">
                <img src="path/to/greek-salad.png" alt="Greek Salad" />
                <h3>Greek Salad</h3>
                <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <span>$12.99</span>
                <button>Order delivery</button>
            </div>
            <div className="special-item">
                <img src="path/to/bruschetta.png" alt="Bruschetta" />
                <h3>Bruschetta</h3>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <span>$5.99</span>
                <button>Order delivery</button>
            </div>
            <div className="special-item">
                <img src="path/to/lemon-dessert.png" alt="Lemon Dessert" />
                <h3>Lemon Dessert</h3>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <span>$5.00</span>
                <button>Order delivery</button>
            </div>
            </div>
            <button className="menu-button">Online Menu</button>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
            <div className="testimonial">
                <h4>Rating: ⭐⭐⭐⭐⭐</h4>
                <p>“Amazing food, will definitely come back!”</p>
                <p>- John Doe</p>
            </div>
            <div className="testimonial">
                <h4>Rating: ⭐⭐⭐⭐⭐</h4>
                <p>“Best Mediterranean food in the city.”</p>
                <p>- Jane Smith</p>
            </div>
            <div className="testimonial">
                <h4>Rating: ⭐⭐⭐⭐</h4>
                <p>“Great service, loved the ambience!”</p>
                <p>- Alex Brown</p>
            </div>
            </div>
        </section>
        </main>
    </>
  );
}

export default Main;
