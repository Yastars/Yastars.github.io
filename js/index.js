$(document).ready(function () {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById('myBtn');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Scroll change navbar to fixed
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var documentHeight = $(window).height();
    if (
      document.body.scrollTop > documentHeight ||
      document.documentElement.scrollTop > documentHeight
    ) {
      document.getElementById('navbar').style.position = 'fixed';
    } else {
      document.getElementById('navbar').style.position = 'relative';
    }
  }

  // Toggle Links Active Nav
  var home = document.getElementById('navbar');
  var btns = home.getElementsByClassName('btn');
  console.log({
    btns,
  });
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      var current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
    });
  }

  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
