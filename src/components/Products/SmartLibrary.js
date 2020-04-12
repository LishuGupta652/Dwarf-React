import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const SmartLibrary = () => {
  return (
    <div>
      <Header backgroundColor="#58B19F">
        <h1 className="text-black">Smart Library</h1>
      </Header>

      <div className="content-wrapper">
        <section>
          <h1>Introduction of Digital Library?</h1>
          <p>
            It has been man’s continual quest to be able to access all the
            records of human intellectual appeared anywhere, which might be of
            interest to him. Libraries are always being social institutions.
            They offer public access to information and knowledge representing
            diverse source and view point. But access to public knowledge, in
            traditional libraries, was limited to those who could travel to
            physical site of that library.
          </p>
          <p>
            Access to library collection for remote users has long been a
            challenge for librarians. For centuries, they have managed warehouse
            of documents by acquiring, cataloguing and classifying books,
            journals and other materials and circulating them to their
            clientele. But computer and communication technologies have improved
            the new breed of information professionals to select, organize,
            retrieve and transfer digital content effectively and efficiently to
            the users Advancement in information and communication technologies
            (ICTs) has changed the concept of library as a physical artifact to
            digital library as a library without walls.
          </p>
        </section>
      </div>

      <div className="content-image h600">
        <video
          src={require("../../images/products/elearning/library.mp4")}
          alt="Smart Library"
          autoPlay
          muted
        />
      </div>

      <div className="content-wrapper">
        <section>
          <h1>DIGITAL LIBRARY: MEANING AND NATURE</h1>
          <p>
            The terms, electronic library, digital library and virtual library
            have been used interchangeably and now widely accepted as a
            description of the use of digital technology by libraries to
            acquire, store, conserve and make available their content to remote
            users. In a broad sense, a digital library may be treated as an
            organized and managed collection of highly quality information
            content in a variety of media (text, still image, moving image,
            sound but all in digital forms, accessible over different electronic
            networks The concept of digital library is routed in the age-old
            dream of creating a virtual library. The main component of a virtual
            library is a vast, ideally universal collection of information and
            instantaneous access to that information wherever it physically
            resides but digital library is different form virtual library
            because of its physical identification in some aspects.
          </p>
        </section>
      </div>

      <div className="content-image h600">
        <img
          src={require("../../images/products/elearning/learn1.jpeg")}
          alt="StayHome"
        />
      </div>

      <div className="content-wrapper">
        <section>
          <h1>CHARACTERSTICS OF DIGITAL LIBRARIES </h1>
          <p>
            Digital libraries, like traditional ones, select, acquire,
            catalogue, make available, and preserve collections. A digital
            library contains digital representation of the objects found in it,
            and will be accessible via Internet, though not necessarily to
            everyone. But the idea of digitization is perhaps the only
            characteristic of a digital library on which there is universal
            agreement. The common characteristics in the various definitions of
            digital library, identified by Association of Research are as
            follows:
          </p>
          <ul>
            <li>the digital library is not a single entity</li>
            <li>
              the digital library requires networking technology to connect many
              entities
            </li>
            <li>all linkages are transparent to end users</li>
            <li>
              universal access to digital content and information is a goal
            </li>
            <li>
              digital library collections are not limited to documents
              surrogates
            </li>
          </ul>
        </section>
      </div>

      <div className="content-image h600">
        <img
          src={require("../../images/products/elearning/learn2.jpeg")}
          alt="StayHome"
        />
      </div>

      <div className="content-wrapper">
        <section>
          <h1>MANAGING DIGITAL LIBRARY CONTENT</h1>
          <p>
            Contents in a digital library are organized and managed for the
            purpose of immediate access to the target audience. How contents are
            developed and managed, is a critical issue to the long term success
            of digital library services, especially when technical resources are
            limited. Content management includes the following key functions
          </p>
          <ul>
            <li>Selection and acquisition</li>
            <li>Indexing</li>
            <li>Indexing</li>
            <li>Retrieval</li>
            <li>Maintenance</li>
            <li>Maintenance</li>
          </ul>
        </section>
      </div>

      <section>
        <div className="content-wrapper">
          <h1>OTHER SERVICES </h1>
        </div>
        <Link to="/products/digital_classes">
          <div className="products">
            <div className="card">
              <div className="wrapper">
                <h3>
                  Digital Classes
                  <span>
                    <i
                      className="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/products/health_center">
          <div className="products">
            <div className="card">
              <div className="wrapper">
                <h3>
                  Health Center
                  <span>
                    <i
                      className="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default SmartLibrary;
