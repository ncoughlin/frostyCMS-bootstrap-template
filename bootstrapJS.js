// test script connectivity
console.log("bootstrapJS is connected");

// make active link show active
$(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});