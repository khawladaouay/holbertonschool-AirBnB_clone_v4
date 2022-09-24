$(document).ready(function () {
let dict = {};
var ckbox =$('input[type=checkbox]');

$('input').click(function () {
	if(ckbox.is(':checked')) {
		dict[$(ckbox).data('id')] = $(ckbox).data('name');
			$('.amenities h4').text(Object.values(dict).join(', '));
	} else  {
		delete dict[$(ckbox).data('id')];
	$('.amenities h4').text(Object.values(dict).join(', '));
	}
});
});