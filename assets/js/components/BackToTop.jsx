import React from 'react';

// Renders the back-to-top button in the footer
export default function BackToTop(props) {
  /*
  Scrolls back to the top;
  SOURCE: https://bootsnipp.com/snippets/featured/link-to-top-page
  */
  $(document).ready(function(){
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });
    // Scroll body to 0px on click
    $('#back-to-top').click(function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    $('#back-to-top').tooltip('show');
  });

  return (
    <div className="footer">
      <a href="#" className="back-to-top" id="back-to-top">
        {/* IMAGE SOURCE: http://tich-outsourcing.blogspot.com/2014/08/5-best-back-to-top-button-code-for.html */}
        <img src="/images/back-to-top.png" alt="Back to Top" />
      </a>
    </div>
  );
}
