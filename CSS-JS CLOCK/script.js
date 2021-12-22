(function () {
  // const hand = document.querySelector('.clock__hand');
  const handHour = document.querySelector('.clock__hand--hour');
  const handMinute = document.querySelector('.clock__hand--minute');
  const handSecond = document.querySelector('.clock__hand--second');

  function updateClockHands() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const rotationSecond = second * 6;
    const rotationMinute = minute * 6 + rotationSecond / 60;
    const rotationHour = hour * 30 + rotationMinute / 12;

    handSecond.style.transform = `translateY(-50%) rotate(${rotationSecond}deg)`;
    handMinute.style.transform = `translateY(-50%) rotate(${rotationMinute}deg)`;
    handHour.style.transform = `translateY(-50%) rotate(${rotationHour}deg)`;
  }

  setInterval(updateClockHands, 1000);
})();
