import React from 'react';

export default React.memo(function TravelPal() {
  return (
    <p className='project-summary'>
      This was the second of two projects for my Web Development class. The assignment was to build a complex
      application that uses an external web API from its server-side code. My teammates and I wanted to build something
      that was both useful and hip. So, we decided on a social flights application, since it was nearing the end of the
      semester (and the end of our college careers for 3/4 of us), and we wanted nothing more than to travel.<br/><br/>
      
      TravelPal allows users to search for and book flights and hotels, maintain a diary of past trips, and keep up with
      their friends' travels. The application aims to serve as a platform for travelers on a budget and provide a smooth
      trip-planning experience.<br/><br/>
      
      We decided to make TravelPal a single-page application (SPA) using all of the tools that we had learned throughout
      the semester, with an added bonus of the Bamboo library using the <a href='https://sendgrid.com/'>SendGrid</a>
      &nbsp;adapter so that we could send emails to registered users. We used&nbsp;
      <a href='https://www.booking.com/'>Booking.com</a> as our hotels API and&nbsp;
      <a href='https://docs.kiwi.com/'>Kiwi.com</a> as our flights API.
    </p>
  );
});