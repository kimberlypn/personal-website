import React from 'react';

// Renders the "About" section
export default function BackToTop(props) {
  // Scrolls back to the top
  $(document).ready(function(){
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });
    // scroll body to 0px on click
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
      <a id="back-to-top" href="#" class="back-to-top">
        <img src="/images/back-to-top.png" />
      </a>
    </div>
  );
}
