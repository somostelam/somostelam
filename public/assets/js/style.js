function main(){
  $(".desktop-menu").css({"height": $(window).height()+"px"});
  $(window).on("resize",function(){
    $(".desktop-menu").css({"height": $(window).height()+"px"});
  });
  $(".foto-lista").on("click", function(){
    $(this).siblings(".perfil-modal").toggle("bounce");
  })
  $(".perfil-modal").on("click",function(){
    $(this).toggle("bounce");
  })
  $(".perfil-modal").css({"height": $(window).height()+"px", "width": $(window).width()+"px"});
}

$(document).ready(main);
