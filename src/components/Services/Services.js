import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="service">
      <div className="singular">
        <div className="head">
          <h4>My Basic</h4>
          <h5>Services</h5>
        </div>
        <br />
        <p>
          I offer Professional and well detailed socio-content articles, that
          would grip your readers. I also offer Technical writing services,
          providing you with Technical but quite easy to understand articles and
          works. As a tech-savy individual who has seasoned knowledge, abou the
          tech space, I can offer you well written, easy to understand, and
          simple technical articles. Other of my writing services includes:
          Script writing, Content writing, Ghost writing and academic writing.
        </p>{" "}
        <br />
        <h3 className="buttons">Book now</h3>
      </div>
      <div className="triple">
        <div className="step">
          <h2>Technical Writing</h2>
          <p>
            The art of Technical writing is to be able to simplify any technical
            lingua or process into easy and understandable english. Having over
            5 years in the Tech space, I have gained vast knowledge on the
            different fields, band can comfortably write any Technical piece
          </p>
        </div>
        <div className="step">
          <h2>Socio-Content Writing</h2>
          <p>
            Writing is an art, meaning it is as spontaneous as it is rigid.
            Socio-content writing, is basically articlesabout the society and
            societal premises on differnt issues. This includes, psychological
            and emotional effects of certain matrixes. Political, Religious and
            Inspirational writings are under this category.
          </p>
        </div>
        <div className="step">
          <h2> Other Writing Services</h2>
          <p>
            Other writing Services include academic writing, Content writing
            Ghost book writing, Storytelling, blogs and ad services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
