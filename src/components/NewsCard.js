import React from "react";
import "./NewsCard.css";

function NewsCard(props) {
  let d = new Date();
  return (
    <div className="news-card">
      <section className="news-card-header">
        <div className="time-stamp-col">
          <p id="time-stamp">{`${d}`} </p>
          <p>3 minutes read</p>
        </div>
        <div className="news-title">
          <h2>News Section - Food</h2>

          <h1>
            Canada's Alberta confirms first death linked to AstraZeneca vaccine
          </h1>

          <h4 className="author">Khoon Lew</h4>

          <div className="socila-media-links">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-google"></a>
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-youtube"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-pinterest"></a>
          </div>
        </div>
      </section>
      <section className="news-card-image">
        <img src={props.newsCardPicture} alt="news-card" />
      </section>

      <article className="article-section">
        <div className="col-1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            consequuntur itaque alias quos accusantium voluptates nesciunt vel
            quia nam, amet, quo quae asperiores dolores esse.
          </p>
        </div>
        <div className="col-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            illo tempore sunt est alias omnis ea libero voluptatibus doloremque.
            Aliquid?
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            suscipit cupiditate deserunt ipsum quam consequatur enim ab.
            Obcaecati ipsum ab nesciunt, maxime quo sapiente beatae.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos
            deserunt repudiandae aliquid accusantium ipsa quaerat ab ea amet?
            Quis id illum ut nulla rerum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            perspiciatis illum velit earum neque animi suscipit sint, eaque
            doloremque ut sequi quae laudantium repudiandae non obcaecati illo
            ratione nemo dicta?
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatem nulla explicabo porro. Rem dolorum cum consectetur
            obcaecati tempora inventore quasi aliquam quis odio suscipit?
          </p>
        </div>
      </article>
    </div>
  );
}

export default NewsCard;
