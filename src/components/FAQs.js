import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import 'aos/dist/aos.css';

const FAQs = () => {
  useEffect(() => {
    function handleClick(event) {
      const index = event.target.getAttribute('data-index');
      const panel = document.getElementById(`panel${index}`);

      event.target.classList.toggle('active11');

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }

    const buttons = document.querySelectorAll('.accordion11');
    buttons.forEach((button, index) => {
      button.addEventListener('click', handleClick);
      button.setAttribute('data-index', index);
    });

    return () => {
      // Cleanup: remove event listeners when the component unmounts
      buttons.forEach((button) => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <>
      <Header faq="FAQs" terms="Term & Conditions" privacy="Privacy & Policy" />
      <div className="container my-5" data-aos="fade-up"
        data-aos-duration={1000}>
        <div className="row mb-3">
          <div className="text-center">
            <h2>FAQs</h2>
            <div className="shape2" />
          </div>
        </div>
        <button className="accordion11">
          1. What topics does your blog cover in the Home Furnishing category?
        </button>
        <div className="panel11" id="panel0">
          <p>
            Our Home Furnishing category explores a wide range of topics,
            including interior design tips, furniture recommendations, home decor
            ideas, and advice on creating a comfortable and stylish living space.
          </p>
        </div>

        <button className="accordion11" >
          2. Can I find travel recommendations or guides on your blog?
        </button>
        <div className="panel11" id="panel1">
          <p>
            Absolutely! Our Travel section offers travel guides, destination
            recommendations, packing tips, and travel stories to inspire and assist
            you in planning your next adventure.
          </p>
        </div>
        <button className="accordion11" >
          3. What kind of technology content can I expect on your blog?
        </button>
        <div className="panel11" id="panel2">
          <p>
            In our Technology category, we delve into the latest tech trends, gadget
            reviews, software recommendations, and provide insights on how
            technology impacts our daily lives.
          </p>
        </div>
        <button className="accordion11" >
          4. Do you have content related to architecture and home design?
        </button>
        <div className="panel11" id="panel3">
          <p>
            Yes, we do! Our Architecture category covers architectural styles, home
            design principles, building tips, and architectural innovations to help
            you create your dream living space.
          </p>
        </div>
        <button className="accordion11" >
          5. How does your blog address topics related to lifestyle?
        </button>
        <div className="panel11" id="panel4">
          <p>
            Our Lifestyle category explores a variety of lifestyle aspects,
            including wellness, personal development, fitness, fashion, and general
            life advice to help you live your best life.
          </p>
        </div>
        <button className="accordion11" >
          6. Do you provide product recommendations for home furnishing, technology,
          and lifestyle products?
        </button>
        <div className="panel11" id="panel5">
          <p>
            Yes, we often share product recommendations and reviews in our
            respective categories. You'll find suggestions for top-quality home
            furnishing items, the latest gadgets, and lifestyle products to enhance
            your everyday living.
          </p>
        </div>
        <button className="accordion11" >
          7. How frequently is new content published in each category?
        </button>
        <div className="panel11" id="panel6">
          <p>
            We strive to provide fresh content regularly. New articles are typically
            published in each category [mention your posting schedule, e.g., "once a
            week"] to keep you updated on the latest trends, tips, and advice in the
            respective fields. These FAQs provide a clear overview of what your blog
            covers in each category and offer information on how users can engage
            with your content or collaborate with your platform. Feel free to
            customize and expand upon these questions as needed to suit your blog's
            unique focus and audience.
          </p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default FAQs;




<div className="row mb-5">
  <button className="accordion11" >
    1. What topics does your blog cover in the Home Furnishing category?
  </button>
  <div className="panel11" id="panel0">
    <p>
      Our Home Furnishing category explores a wide range of topics, including
      interior design tips, furniture recommendations, home decor ideas, and
      advice on creating a comfortable and stylish living space.
    </p>
  </div>

</div>