(function () {
  const inputs = document.querySelectorAll('input');
  const root = document.querySelector(':root');
  const M = new Map([
    [inputs[0], ['--spacing', 'px']],
    [inputs[1], ['--blur', 'px']],
    [inputs[2], ['--color', '']],
  ]);

  inputs.forEach((input) => {
    input.addEventListener('input', function () {
      root.style.setProperty(
        M.get(input)[0],
        `${input.value}${M.get(input)[1]}`
      );
    });
  });
})();
