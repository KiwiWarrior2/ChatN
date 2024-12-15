const raceDates = [
    new Date("2025-03-14T00:00:00").getTime(), // Melbourne
    new Date("2025-03-21T00:00:00").getTime(), // Shanghai
    new Date("2025-04-04T00:00:00").getTime(), // Suzuka
    new Date("2025-04-11T00:00:00").getTime(), // Sakhir
    new Date("2025-04-18T00:00:00").getTime(), // Jeddah
    new Date("2025-05-02T00:00:00").getTime(), // Miami
    new Date("2025-05-16T00:00:00").getTime(), // Imola
    new Date("2025-05-23T00:00:00").getTime(), // Monaco
    new Date("2025-05-30T00:00:00").getTime(), // Barcelona
    new Date("2025-06-13T00:00:00").getTime(), // Montreal
    new Date("2025-06-27T00:00:00").getTime(), // Spielberg
    new Date("2025-07-04T00:00:00").getTime(), // Silverstone
    new Date("2025-07-25T00:00:00").getTime(), // Spa
    new Date("2025-08-01T00:00:00").getTime(), // Budapest
    new Date("2025-08-29T00:00:00").getTime(), // Zandvoort
    new Date("2025-09-05T00:00:00").getTime(), // Monza
    new Date("2025-09-19T00:00:00").getTime(), // Baku
    new Date("2025-10-03T00:00:00").getTime(), // Singapore
    new Date("2025-10-17T00:00:00").getTime(), // Austin
    new Date("2025-10-24T00:00:00").getTime(), // Mexico City
    new Date("2025-11-07T00:00:00").getTime(), // Sao Paulo
    new Date("2025-11-20T00:00:00").getTime(), // Las Vegas
    new Date("2025-11-28T00:00:00").getTime(), // Lusail
    new Date("2025-12-05T00:00:00").getTime(), // Yas Marina
  ];
  

  const currentTime = new Date().getTime();
  const nextRace = raceDates.find(raceTime => (raceTime + 259200000) > currentTime) || new Date("2025-12-31T23:59:59").getTime(); // Fallback
  
  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = nextRace - now;
  
    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      document.getElementById("countdown").innerHTML = "The event has started!";
      clearInterval(timerInterval);
    }
  }
  
  const timerInterval = setInterval(updateCountdown, 1000);
  