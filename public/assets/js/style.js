function main(){
  $(".foto-lista").on("click", function(){
    $(this).siblings(".perfil-modal").toggle("blind");
  })
  $(".perfil-modal").on("click",function(){
    $(this).toggle("blind");
  })
  $(".perfil-modal").css({"height": $(window).height()+"px", "width": $(window).width()+"px"});
}

$(document).ready(main);
