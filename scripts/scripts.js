$(document).ready(function(){
    $('#mycar').carousel({interval: 2000});
    $('#carbutton').click(function(){
        if($('#carbutton').children('span').hasClass('fa-pause')){
            $('#mycar').carousel('pause');
            $('#carbutton').children('span').removeClass('fa-pause');
            $('#carbutton').children('span').addClass('fa-play');
        }
        else if($('#carbutton').children('span').hasClass('fa-play')){
            $('#mycar').carousel('cycle');
            $('#carbutton').children('span').removeClass('fa-play');
            $('#carbutton').children('span').addClass('fa-pause');
        }
    });
});

$('#rsvbutton').click(function(){
    $('#reservemodal').modal('show');
});
$('#rsvclose').click(function(){
    $('#reservemodal').modal('hide');
});

$('#logbutton').click(function(){
    $('#loginmodal').modal('show');
});

$('#logclose').click(function(){
    $('#loginmodal').modal('hide');
});

$('#rsvcancel').click(function(){
    $('#reservemodal').modal('hide');
});

$('#logcancel').click(function(){
    $('#loginmodal').modal('hide');
});