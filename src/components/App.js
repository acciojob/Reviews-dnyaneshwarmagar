// App.js
import React from 'react';
import Review from './Review';
import './../styles/App.css';

function App() {
  return (
    <section className="container">
      <h2 id="review-heading">Our Reviews</h2>
      <main>
        <Review />
      </main>
    </section>
  );
}

export default App;
