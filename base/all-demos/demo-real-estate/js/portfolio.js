$(function () {
    "use strict";
              // filter items on button click
                $('.filterby').on('click', 'a', function() {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                // init Isotope
                var $grid = $('.portfolio-box').isotope({
                    itemSelector: '.filter',
                    percentPosition: true,
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: 5,
                    }
                });
                //****************************
                  // Isotope Load more button
                  //****************************
                  var initShow = 6; //number of images loaded on init & onclick load more button
                  var counter = initShow; //counter for load more button
                  var iso = $grid.data('isotope'); // get Isotope instance

                  loadMore(initShow); //execute function onload

                  function loadMore(toShow) {
                    $grid.find(".hidden").removeClass("hidden");

                    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
                      return item.element;
                    });
                    $(hiddenElems).addClass('hidden');
                    $grid.isotope('layout');

                    //when no more to load, hide show more button
                    if (hiddenElems.length == 0) {
                      $("#load-more").hide();
                    } 
                    else {
                      $("#load-more").show();
                    };

                  }

                  //append load more button
                  $grid.after('');

                  
            });