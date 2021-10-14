$(document).ready(function(){

    // Control carousel 
    $(".carousel").carousel({

        interval: 3000
    });


    // Filters doctors data for services providers page
    // isotope filter 
    var grid = $('.grid').isotope({

        itemSelector: '.grid-item',
        layoutmethod: 'fitRows'

    });
    
    // Filter items on botton click
    $('.button-group').on("click", "button", function(){

        var filterValue = $(this).attr('data-filter'); 
        grid.isotope({filter: filterValue});
    });



});