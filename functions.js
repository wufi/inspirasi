// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = { };

$(function () {

    function updatePageForBgImg() {
        $('#banner').css('background-image','url('+$('#banner__background').attr('src')+')').css('background-size','cover').css('background-position','center');
    }

    updatePageForBgImg();
    
    if ( typeof window.top.App === 'undefined' ) {
        // Published page
        $(window).on('load', function(){
            updatePageForBgImg();
        });
    } else {
        // within the builder
        setInterval( function(){
            if ( $( '#banner__background' ).css( 'display' ) == "none" ) {
                $( '#banner' ).css( 'background-image' , 'none' );
            }
            else {
                updatePageForBgImg();
            }
        }, 1000);
    }
    

    $('.share').click(function(event){
          event.preventDefault();
          var service = $(this).data('service');
          switch(service) {
              case 'facebook':
                  url = ( LeadPageData['facebookShareURL']['value'] ? LeadPageData['facebookShareURL']['value'] : document.URL);
                  window_size = "width=585,height=368";
                  go = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
                  break;
              case 'twitter':
                  url = ( LeadPageData['twitterShareURL']['value'] ? LeadPageData['twitterShareURL']['value'] : document.URL);
                  window_size = "width=585,height=261";
                  go = 'http://www.twitter.com/intent/tweet?url=' + url;
                  break;
              case 'google':
                  url = ( LeadPageData['googleShareURL']['value'] ? LeadPageData['googleShareURL']['value'] : document.URL);
                  window_size = "width=517,height=511";
                  go = 'http://plus.google.com/share?url=' + url;
                  break;
              case 'linkedin':
                  url = ( LeadPageData['linkedInShareURL']['value'] ? LeadPageData['linkedInShareURL']['value'] : document.URL);
                  window_size = "width=520,height=570";
                  go = 'http://www.linkedin.com/shareArticle?mini=true&url=' + url;
                  break;
              default:
                  return false;
          }
          window.open(go, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
      });


});
