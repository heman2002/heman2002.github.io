AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "AI Research and Development Intern",
    cardImage: "assets/images/experience-page/thinksense.png",
    place: "ThinkSense Inc.",
    time: "(Jan - May, 2023)",
    desp: "<li>Solving Human Activity Recognition using Machine Learning</li>",
  },
  {
    title: "Software Development Engineer Intern",
    cardImage: "assets/images/experience-page/amazon.jpeg",
    place: "Amazon Web Services",
    time: "(May - Aug, 2022)",
    desp: "<li>Worked with the AWS SCOS DC-Rack Provisioning team on optimizing the RATS tool and aggregating data into ElasticSearch using Scala, Ruby on Rails and Java that reduced the latency by 25%.</li>",
  },
  {
    title: "Software Engineer - II",
    cardImage: "assets/images/experience-page/lynks.jpeg",
    place: "Lynks Logistics Ltd",
    time: "(Apr - Jul, 2021)",
    desp: "<li>Led a team of 5 to develop Merlin, by building an ETL pipeline, leveraging Change Data Capture, Debezium, Apache Kafka, KSQL, Mongodb which helped the business gain real-time insights into the distribution of goods, by capturing events from Warehouse Management, Order taking, Delivery and Payment collection systems and improve operational efficiency.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/lynks.jpeg",
    place: "Lynks Logistics Ltd",
    time: "(Aug, 2019 - Apr, 2021)",
    desp: "<li>Played a major role in designing and developing the Distribution as a service model in GO language with a Postgres database and deployed it using NGINX server which helped grow the business revenue by 500%.</li><li>Worked on the Vehicle Tracking module and integrated it with the existing systems leading to a reduction of around 2 million transactions daily in the primary database and improving the system-wide performance.</li><li>Set up a new production environment in AWS and wrote scripts to automate integration and deployment of various servers.</li><li>Assessed the performance of the existing solutions and pioneered the revamp of Gandalf, improving its performance by approximately 10%.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/iitm.jpeg",
    place: "Indian Institute of Technology, Madras",
    time: "(Nov, 2017 - Oct, 2018)",
    desp: "<li>Researched on various data imputation techniques such as K-nearest neighbors, SVD decompositions, multivariate imputation by chained equations and last observation carried forward for prognostics and diagnostic applications under the guidance of Dr. N.Arunachalam.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
