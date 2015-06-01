$(document).ready(function(e) {
  $( ".inner" ).hover(
    function() {
      $(this).find('img').addClass('opacity')
      $(this).find('h2').addClass('visible');
    }, function() {
      $(this).find('img').removeClass('opacity')
      $(this).find('h2').removeClass('visible');
    }
  );
});



// $(document).ready(function(e) {
//   $( ".featuredArticle" ).hover(
//     function() {
//       $(this).addClass('opacity').next('h2').addClass('visible');
//     }, function() {
//       $(this).removeClass('opacity').next('h2').removeClass('visible');
//     }
//   );
// });

// $(document).ready(function(e) {
//   $( ".featuredArticle" ).hover(
//     function() {
//       $( this ).next('h2').addClass( "visible" );
//     }, function() {
//       $( this ).next('h2').removeClass( "visible" );
//     }
//   );
// });
