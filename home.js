$(document).ready(function(){
  $('.fetch').click(function(){
    var currentLink = $(this).prop('id'), len = currentLink.length;
    var contentBox = currentLink.substring(0, (len - 5));
    $('.box').hide();
    $('#' + contentBox).load(contentBox + ".html");
    $('#' + contentBox).show();
  });
});
