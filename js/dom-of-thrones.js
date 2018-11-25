let time = 0;

function frame(actions) {

  setTimeout(() => {
    actions();
  }, time);

  time += 500;

}

document.addEventListener('DOMContentLoaded', function() {
  scene3();
})
