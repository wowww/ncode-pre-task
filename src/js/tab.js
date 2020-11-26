function changeImg(url, e) {
  document.getElementById("show").src = url;
  let nodes = document.getElementById("thumb_img");
  let img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}

jQuery(document).ready(function($){
  $(".show-more-btn").click(function(e){
    $(".show-more-item:hidden").slice(0,4).fadeIn();
    if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
  })
})