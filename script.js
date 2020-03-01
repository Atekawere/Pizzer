
$(document).ready(function(){
    $("form#delivery").submit(function(event){
        var name = $("input#name").val();
        var location = $("input#location").val();
        var number = $("input#numer").val();
        alert("Hello" + name + "we have received your order and will be delivered to you" + location + "in an hour thankyou for chosing home of pizzerians")
    });
});