var a = false;
function toggleSlide() {
  var element1 = document.getElementById("movev");
  if (a) setTimeout(function() {
      element1.style.top ="50px"; 
    }, 500); else setTimeout(function() {
    element1.style.top ="100px"; 
  },100);

  var element2 = document.getElementById("moveh");
  if (a) {
    setTimeout(function() {
      element2.style.left = "-50px"; 
    }, 100);
  } else setTimeout(function() {
    element2.style.left = "50px"
  },500);
  a = !a;
}
