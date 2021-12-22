(function () {
  const keys = [97, 115, 100, 102, 103, 104, 106, 107, 108];

  window.addEventListener('keypress', function (e) {
    if (keys.includes(e.keyCode)) {
      const [key, sound] = document.querySelectorAll(
        `[data-key='${e.keyCode}']`
      );

      key.classList.add('key--active');
      this.setTimeout(function () {
        key.classList.remove('key--active');
      }, 75);

      sound.currentTime = 0;
      sound.play();
    }
  });
})();
