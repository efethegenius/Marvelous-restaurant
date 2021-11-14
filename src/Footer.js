export const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="full-footer">
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/f54694842337d2c30e3c6b3e323d1cba/e830953d"
          alt="footer-logo"
          className="footer-logo"
        />
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/266e97185bb8efa1758ebd1b3f0dc2c0/bbab9423"
          alt="footer-logo2"
          className="footer-logo2"
        />
        <div className="opening-hours">
          <h2>opening hours</h2>
          <p>MON - FRI:8AM-8PM</p>
          <p>9AM - 5PM</p>
          <p>SUN: CLOSED</p>
        </div>
        <div className="book-footer">
          <h2 className="reservations-footer">Reservations</h2>
          <button className="cta">
            <span className="hover-underline-animation"> Book Now </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
        <div className="contact-us">
          <h2>contact us</h2>
          <p>(234)70 678 96171</p>
          <p>marvelous@gmail.com</p>
          <p>Osota, Ikorodu</p>
        </div>
      </div>
      <img
        src="https://dl.airtable.com/.attachmentThumbnails/362cc34b7f18f33eacc2a754b35d3c39/0b500e23"
        alt="ketchup"
        className="ketchup"
      />
    </section>
  );
};
