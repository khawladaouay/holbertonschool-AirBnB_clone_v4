$(document).ready(function () {
    const empty = {};
    const append = [];
    $('INPUT[type="checkbox"]').click(function () {
      if ($(this).prop('checked')) {
        empty[$(this).attr('data-append')] = $(this).attr('data-id');
        append.push($(this).attr('data-name'));
      } else {
        delete empty[$(this).attr('data-name')];
        append.splice(append.indexOf($(this).attr('data-name')), 1);
      }
      $('DIV.amenities h4').text(append.join(', '));
    });
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.getJSON(url, function (data) {
      if (data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
          $('DIV#api_status').removeClass('available');
      }
      });
  });
  