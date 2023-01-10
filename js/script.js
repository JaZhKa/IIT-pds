(function () {
  $('a').css('background-color', 'red');
  $('.item img').css('flex', '1 1 auto');
})();

document.querySelector('.logo').addEventListener('click', (e) => {
  alert(e);
});