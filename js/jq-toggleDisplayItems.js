$(document).ready(function(){
    $(".showInsurance").click(function(){
        $(".xpIns-item").show();
        $("#moreIns-trig").hide();
        $("#lessIns-trig").show();
    });
    $(".hideInsurance").click(function(){
        $(".xpIns-item").hide();
        $("#moreIns-trig").show();
        $("#lessIns-trig").hide();
    });
    $(".showContent").click(function () {
        $(".xpContent-item").show();
        $("#moreContent-trig").hide();
        $("#lessContent-trig").show();
    });
    $(".hideContent").click(function () {
        $(".xpContent-item").hide();
        $("#moreContent-trig").show();
        $("#lessContent-trig").hide();
    });
});
