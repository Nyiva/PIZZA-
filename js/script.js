$(document).ready(function(){
    $("table").hide();
    $(".additional-buttons").hide();
    $(".additional-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $(".additional-info h4").hide();




















    $(".btn.check-out").click(function() {
    $(".btn.add-pizza").hide();
    $(".btn.check-out").hide();
    $(".additional-info").show();
    $(".btn.yes").show();
    $(".btn.no").show();
    $(".additional-info .location").hide();
    grandTotal = grandTotal + total;

    $(".additional-info h3 span").html(grandTotal);
});

$(document).ready(function(){


    $('#submit').click(function () {
    var name = $('#name').val();
    var Email = $('#email').val();
    var Message = $('#message');
    event.preventDefault();
    if (name == '' || Email == '' || Message == '' ){
      alert('Please make sure you have filled in correctly ');
    } else {
      alert ('Hi' + name +  'we have received your mesage. Thank you for reacting out to us.');
    }
    
    });

    $("#submitOrder").click(function(){
    if ()
    });

});