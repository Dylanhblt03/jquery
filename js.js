$('#bienvenue').click(function() { 
    var nom = prompt('Quel est votre nom ?');
    if(nom) {
        $('#nomAffiche').text('Bonjour ' + nom + ' !');
    }
});

    //   Photos

    $(".imghover").hover(function() {
    $(this).after("<h2> "+ $(this).attr("alt") + "</h2>");
} , function() {
    $("h2").remove();
});

    //   Animations

$('.boutonAnimation').on('click', function(){
    var animation = $(this).data('animation');
    var $img = $('#imageAnimee');
    $img.removeClass();
    $img.addClass('img-fluid animate__animated animate__' + animation);
});

    //   Scroll


$(window).on('scroll', function(){
    if(isScrolledIntoView("#bandeau")) {
        $('#bandeau').removeClass('opacity-0'); 
        $('#bandeau').addClass('animate__animated animate__fadeInUp'); 
} 
    // else {
    //     $('#bandeau').addClass('opacity-0'); 
    //     $('#bandeau').removeClass('animate__animated animate__fadeInUp'); 
    // }
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

// Formulaire

$('#formEval').on('submit', function(e) {
    e.preventDefault();
    var prenom = $('#prenom').val();
    var nom = $('#nom').val();
    $('#messageForm').html(
        'Bienvenue dans l\'évaluation monsieur '  + prenom + ' ' +  nom
    );
});

 // div 12

$('.maDiv').each(function(i) {
    $(this).html(i + 1);
});