import React from "react";

const WhoAreWe = () => {
  return (
    <>
      <Quotes />
      <div className="wwe-container">
        <div>
          <div className="wwe-head">
            <h1 className="heading">Who are we</h1>
          </div>
          <div className="wwe-content">
            <span>D</span>warf. Incorporation is a organization which is
            operating in the field of Construction, Fabrication, Smart Gardens,
            Smart Library, Smart parking Solutions and various other smart city
            goals. We started our journey in the year 2019 at New Delhi with a
            small team of achievers. People behind Dwarf have remarkable
            experience in Fabrication, Designing, Finance and Marketing.
          </div>
        </div>
      </div>
    </>
  );
};

const Quotes = () => {
  const quotesList = [
    {
      id: 1,
      author: "Frank Tyger",
      desc:
        "Learn to listen. Opportunity could be knocking at your door very softly.",
    },
    {
      id: 2,
      author: "Leo Tolstoy",
      desc: "The two most powerful warriors ae patience and time.",
    },
    {
      id: 3,
      author: "Frank Wright",
      desc: "Respect should be earned by actions and not acquired by years.",
    },
    {
      id: 4,
      author: "Ralph Emerson",
      desc: "Nothing great was ever achieved without enthusiasm.",
    },
    {
      id: 5,
      author: "Pablo Picasso",
      desc: "Action is foundational key to all success.",
    },
    {
      id: 6,
      author: "Buddha",
      desc:
        "Your work is discover your work and then with all your heart to give yourself to it.",
    },
  ];
  const randColor = ["#fc5c65", "#fd9644", "#fed330", "#26de81", "#4b7bec"];
  const rand5 = Math.floor(Math.random() * Math.floor(5));
  const rand = Math.floor(Math.random() * Math.floor(4));
  return (
    <div className="quote" style={{ backgroundColor: randColor[rand5] }}>
      <div className="quote-container">
        <div className="quote">
          <i className="fa fa-quote-left" aria-hidden="true"></i>
          <span>{quotesList[rand].desc}</span>
        </div>
        {/* <div className="q-btn">
          <div className="button">Next</div>
        </div> */}
        <div className="author">
          <div>
            <i class="fas fa-line    "></i>
            {quotesList[rand].author}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoAreWe;
