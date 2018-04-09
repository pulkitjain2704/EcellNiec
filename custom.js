
$("#upcomingEventBtn").click(function () {
    $("#up1").slideDown();
    $(".upTitle").show();

    $("#prev1").slideUp();
    $("#prev2").slideUp();
    $("#prev3").slideUp();
    $("#prev4").slideUp();
    $("#prev5").slideUp();
    $(".prevTitle").hide();
EventScroll


});

$("#previousEventBtn").click(function () {
    $("#up1").slideUp();
    $("#prev1").slideDown();
    $("#prev2").slideDown();
    $("#prev3").slideDown();
    $("#prev4").slideDown();
    $("#prev5").slideDown();
    $(".prevTitle").show();
    $(".upTitle").hide();


});
$("#allEventBtn").click(function () {
    $("#up1").slideDown();
    $("#prev1").slideDown();
    $("#prev2").slideDown();
    $("#prev3").slideDown();
    $("#prev4").slideDown();
    $("#prev5").slideDown();
    $(".prevTitle").show();
    $(".upTitle").show();



});




    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    function myMap() {

        var mapOptions = {
            center: new google.maps.LatLng(28.677782, 77.261272),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(document.getElementById("mapNIEC"), mapOptions);


        var marker = new google.maps.Marker({
            position: {lat: 28.677782, lng: 77.261272},
            map: map
        });
    }


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[769,1],
        pagination:true,
        transitionStyle:"goDown",
        autoplay:true
    });
});