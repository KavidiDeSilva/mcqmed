

// ----------------------------count up--------------------------------
// $(".counterhover").scroll(function(){
  $('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// });


//navbar active
$('.navbar-nav .nav-item .nav-link').click(function(){
    $('.navbar-nav .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
})


// -------------------------back to top button------------------------
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });

  $('#toTopBtn').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});


// -----------------------password visibility-------------------------------
 function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}

$('[data-toggle="collapse"]').on('mouseenter', function() {
    $(this).parents('.card').find('.card-collapse').collapse('show');
});




//tabs-------------------------------
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    TabRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) TabAddClass(x[i], "show");
  }
}

function TabAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function TabRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



//notes search filter---------------------------------------------------
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList .subjectbox").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//subtopic notes search filter---------------------------------------------------
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList .subtopics").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//faq search filter---------------------------------------------------
$(document).ready(function(){
  $("#myInputFAQ").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myFAQ *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



//-------scroll to div questions page---------------------------------------------
$("#questionbtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#freequiz").offset().top
    }, 1000);
});


//blog reading prgressbar-------------------------------------------------------

  jQuery(window).scroll((function() {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  jQuery("#reading-progress-fill").css({width: w + "%"})
}));



//textarea editor
 $('#summernote').summernote({
        placeholder: 'Write down',
        tabsize: 2,
        height: 100
      });