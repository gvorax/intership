import React from 'react';

const WorkShop = () => {
  return (
    <div>
      {' '}
      <section class="section-4">
        <div class="main-container">
          <h2  class="section--title">
            Upcoming Free Workshops
          </h2>
          <p  class="section--subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button  class="btn">
            View All Workshops
          </button>
          <div  class="section--cards">
            <div class="item">
              <div class="card">
                <h3 class="card--title">Photography Basics</h3>
                <p class="card--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
                </p>
                <a href="#" class="learn--link">
                  Learn More
                </a>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <h3 class="card--title">Business 101</h3>
                <p class="card--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
                </p>
                <a href="#" class="learn--link">
                  Learn More
                </a>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <h3 class="card--title">Social Networking Camp</h3>
                <p class="card--text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
                </p>
                <a href="#" class="learn--link">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkShop;
