import React from 'react'
import './Projects.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import trackstar from '../../images/trackstar.png'
import toerstore from '../../images/toerstore.png'
import { Carousel } from 'react-responsive-carousel'

const Projects = () => {
  return (
    <div className="carouselContainer">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        swipeable={false}
        showIndicators={false}
      >
        <div className="Project">
          <div className="projectHeader">
            <div className="projectTitle">TOER Store</div>
            <div>E-commerce app integrated with Stripe for payments</div>
            <div className="refLink">
              <a href="https://toerstore.com">View in Browser</a>
              <div className="refLinkSpacer"> / </div>
              <a href="http://github.com/rossmcomer/toer-store">
                View on Github
              </a>
            </div>
          </div>
          <a href="https://toerstore.com" className="projectPic">
            <img src={toerstore} className="carouselPic" alt="TOER-store" />
          </a>
          <ul className="projectDetails">
            <li>
              Single-page React app utilizing Google Cloud PaaS for hosting
              Postgres database
            </li>
            <li>
              Containerized via Docker utilizing Nginx for multi-stage build
            </li>
            <li>Okta/Auth0 SaaS for user management/SSO</li>
            <li>Responsive web design with dark mode feature</li>
            <li>React Context for complex state management</li>
            <li>Node/Express/Axios backend</li>
            <li>Deployed on Google Cloud using Nginx as reverse-proxy</li>
          </ul>
        </div>
        <div className="Project">
          <div className="projectHeader">
            <div className="projectTitle">Trackstar</div>
            <div>Cryptocurrency tracker with customized watchlists</div>
            <div className="refLink">
              <a href="http://trackstarapp.com">View in Browser</a>
              <div className="refLinkSpacer"> / </div>
              <a href="https://github.com/rossmcomer/trackstar">
                View on Github
              </a>
            </div>
          </div>
          <a href="https://trackstarapp.com" className="projectPic">
            <img src={trackstar} className="carouselPic" alt="Trackstar" />
          </a>
          <ul className="projectDetails">
            <li>
              Single-page React app utilizing AWS RDS cloud PaaS for hosting
              Postgres database
            </li>
            <li>
              Pulls data from Coingecko API and facilitates CRUD for
              watchlist/user management
            </li>
            <li>
              Containerized via Docker utilizing Nginx for multi-stage build
            </li>
            <li>Redux Thunk for complex state management</li>
            <li>Node/Express/Axios backend</li>
            <li>Responsive web design</li>
            <li>Deployed via AWS EC2 using Nginx as reverse-proxy</li>
          </ul>
        </div>
      </Carousel>
    </div>
  )
}

export default Projects
