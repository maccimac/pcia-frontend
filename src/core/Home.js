import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Template from '../template';
import Partners from '../template/Partners'

const Home = () => {
  const headerContent = () =>(
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 offset-lg-3 col-lg-6 mb-5 text-light text-center">
          <p>
            We are a network of construction companies and suppliers promoting the high standard of concrete products and services in the Philippines.
          </p>
          <p>
            PCIA strives to create meaningful seminars and events throughout the year to develop a sense of community for its registered members.
          </p>
          <div>
            <Link to="/about">About Us</Link> &nbsp; | &nbsp; <a href="">Facebook</a>

          </div>
        </div>

      </div>
    </div>

  )

  const fbEventIframe = () =>(
    <Fragment>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fphilconcrete%2F&tabs=events&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1053092818100507" style={{
        width: "100%",
        height: "24rem",
        border:"none",
        overflow:"hidden"}
      } scrolling="yes" frameborder="0" allowTransparency="true" allow="encrypted-media"
    >

      </iframe>
    </Fragment>
  )
  const fbTimelineIframe = () =>(
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fphilconcrete%2F&tabs=timeline&small_header=false&width=500&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1053092818100507"
    style={
      {
      border:"none",
      overflow:"hidden",
      height: "32rem",
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto"
      }
    }
      // height = "960"
      // width = "960"
     scrolling="yes" frameborder="0" allowTransparency="true" allow="encrypted-media"
     className="m-auto"></iframe>
  )

  return (
  <Template
    header = {{
      title: "PCIA",
      sub: "Philippine Concrete Industry Association",
      style: {
        backgroundImage: "url('/assets/img/home-concrete-pouring-bg_1600.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      children: headerContent()
    }}
    >

    <div className="container">
      <div className="minheight-8rem">&nbsp;</div>
      <div className="row p-5 align-items-center">
        <div className="col-12 col-sm-6 mb-5">
          <h4>RSVP to the Latest</h4>
          <h3>Upcoming Events</h3>
          <p>
            We hold seminars, tournaments, and other assemblies to bring together single minded connections through enjoyable activities.
          </p>
          <Link to="/events">
          <button className="btn btn-primary btn-lg">Register Here</button>
          </Link>
        </div>
        <div className="col-12 col-sm-6">
          {fbEventIframe()}
        </div>
      </div>
      <div className="minheight-8rem">&nbsp;</div>
    </div>
    <section className="bg-gradient">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div
            className="col-sm-6 minheight-50vh"
            style={{
              backgroundImage: "url('/assets/img/PCIA-team_1086.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
          </div>
          <div className="col-sm-6 p-5">
            <h4 className="text-yellow">Membership</h4>
            <h3>Why be a member</h3>
            <p className="text-white">
            Join our network of construction companies and suppliers promoting the high standard of concrete products and services in the Philippines.
            </p>
            <Link to="/membership">
            <button className="btn btn-success btn-lg">Apply as Member</button>
            </Link>

          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="minheight-8rem">&nbsp;</div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 p-5 text-center align-content-center">
            <h4>We are on Social Media</h4>
            <h3 className="mb-5">Follow Us on Facebook</h3>

              {fbTimelineIframe()}


          </div>
        </div>
        <div className="minheight-8rem">&nbsp;</div>
      </div>

    </section>
    <section className="bg-light p-5">
        <div className="minheight-8rem">&nbsp;</div>
        <Partners/>
        <div className="minheight-8rem">&nbsp;</div>
    </section>


  </Template>
)
}
export default Home;
