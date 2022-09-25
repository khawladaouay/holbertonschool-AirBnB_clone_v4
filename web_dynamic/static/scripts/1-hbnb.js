const $ = window.$;
$(document).ready(function () {
  const ckbox= {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      ckbox [$(this).data('id')] = $(this).data('name');
    } else if ($(this).prop('checked') === false) {
      delete ckbox [$(this).attr('data-id')];
    }
    $('div.amenities H4').text(Object.values(ckbox).join(', '));
  });
});
