const raceDates = [
    new Date("2025-03-14T03:30:00").getTime(), // Melbourne Practice 1
    new Date("2025-03-14T07:00:00").getTime(), // Melbourne Practice 2
    new Date("2025-03-15T03:30:00").getTime(), // Melbourne Practice 3
    new Date("2025-03-15T07:00:00").getTime(), // Melbourne Qualifying
    new Date("2025-03-16T06:00:00").getTime(), // Melbourne Race

    new Date("2025-03-21T05:30:00").getTime(), // Shanghai Practice 1
    new Date("2025-03-21T09:30:00").getTime(), // Shanghai Sprit Qualifying
    new Date("2025-03-22T05:00:00").getTime(), // Shanghai Sprit Race
    new Date("2025-03-22T09:00:00").getTime(), // Shanghai Qualifying
    new Date("2025-03-23T09:00:00").getTime(), // Shanghai Race
    
    new Date("2025-04-04T05:30:00").getTime(), // Suzuka Practice 1
    new Date("2025-04-04T09:00:00").getTime(), // Suzuka Practice 2
    new Date("2025-04-05T05:30:00").getTime(), // Suzuka Practice 3
    new Date("2025-04-05T09:00:00").getTime(), // Suzuka Qualifying
    new Date("2025-04-06T08:00:00").getTime(), // Suzuka Race
    
    new Date("2025-04-11T14:30:00").getTime(), // Sakhir Practice 1
    new Date("2025-04-11T18:00:00").getTime(), // Sakhir Practice 2
    new Date("2025-04-12T15:30:00").getTime(), // Sakhir Practice 3
    new Date("2025-04-12T19:00:00").getTime(), // Sakhir Qualifying
    new Date("2025-04-13T18:00:00").getTime(), // Sakhir Race
    
    new Date("2025-04-18T16:30:00").getTime(), // Jeddah Practice 1
    new Date("2025-04-18T20:00:00").getTime(), // Jeddah Practice 2
    new Date("2025-04-19T16:30:00").getTime(), // Jeddah Practice 3
    new Date("2025-04-19T20:00:00").getTime(), // Jeddah Qualifying
    new Date("2025-04-20T20:00:00").getTime(), // Jeddah Race
    
    new Date("2025-05-02T19:30:00").getTime(), // Miami Practice 1
    new Date("2025-05-02T23:30:00").getTime(), // Miami Sprit Qualifying
    new Date("2025-05-03T19:00:00").getTime(), // Miami Sprit Race
    new Date("2025-05-03T23:00:00").getTime(), // Miami Qualifying
    new Date("2025-05-04T23:00:00").getTime(), // Miami Race
    
    new Date("2025-05-16T14:30:00").getTime(), // Imola Practice 1
    new Date("2025-05-16T18:00:00").getTime(), // Imola Practice 2
    new Date("2025-05-17T13:30:00").getTime(), // Imola Practice 3
    new Date("2025-05-17T17:00:00").getTime(), // Imola Qualifying
    new Date("2025-05-18T16:00:00").getTime(), // Imola Race
    
    new Date("2025-05-23T14:30:00").getTime(), // Monaco Practice 1
    new Date("2025-05-23T18:00:00").getTime(), // Monaco Practice 2
    new Date("2025-05-24T13:30:00").getTime(), // Monaco Practice 3
    new Date("2025-05-24T17:00:00").getTime(), // Monaco Qualifying
    new Date("2025-05-25T16:00:00").getTime(), // Monaco Race
    
    new Date("2025-05-30T14:30:00").getTime(), // Barcelona Practice 1
    new Date("2025-05-30T18:00:00").getTime(), // Barcelona Practice 2
    new Date("2025-05-31T13:30:00").getTime(), // Barcelona Practice 3
    new Date("2025-05-31T17:00:00").getTime(), // Barcelona Qualifying
    new Date("2025-06-01T16:00:00").getTime(), // Barcelona Race
    
    new Date("2025-06-13T20:30:00").getTime(), // Montreal Practice 1
    new Date("2025-06-14T00:00:00").getTime(), // Montreal Practice 2
    new Date("2025-06-14T19:30:00").getTime(), // Montreal Practice 3
    new Date("2025-06-14T23:00:00").getTime(), // Montreal Qualifying
    new Date("2025-06-15T21:00:00").getTime(), // Montreal Race
    
    new Date("2025-06-27T14:30:00").getTime(), // Spielberg Practice 1
    new Date("2025-06-27T18:00:00").getTime(), // Spielberg Practice 2
    new Date("2025-06-28T13:30:00").getTime(), // Spielberg Practice 3
    new Date("2025-06-28T17:00:00").getTime(), // Spielberg Qualifying
    new Date("2025-06-29T16:00:00").getTime(), // Spielberg Race
    
    new Date("2025-07-04T14:30:00").getTime(), // Silverstone Practice 1
    new Date("2025-07-04T18:00:00").getTime(), // Silverstone Practice 2
    new Date("2025-07-05T13:30:00").getTime(), // Silverstone Practice 3
    new Date("2025-07-05T17:00:00").getTime(), // Silverstone Qualifying
    new Date("2025-07-06T17:00:00").getTime(), // Silverstone Race
    
    new Date("2025-07-25T13:30:00").getTime(), // Spa Practice 1 
    new Date("2025-07-25T17:30:00").getTime(), // Spa Sprit Qualifying
    new Date("2025-07-26T13:00:00").getTime(), // Spa Sprit Race
    new Date("2025-07-26T17:00:00").getTime(), // Spa Qualifying
    new Date("2025-07-27T16:00:00").getTime(), // Spa Race
    
    new Date("2025-08-01T14:30:00").getTime(), // Budapest Practice 1
    new Date("2025-08-01T18:00:00").getTime(), // Budapest Practice 2
    new Date("2025-08-02T13:30:00").getTime(), // Budapest Practice 3
    new Date("2025-08-02T17:00:00").getTime(), // Budapest Qualifying
    new Date("2025-08-03T16:00:00").getTime(), // Budapest Race
    
    new Date("2025-08-29T13:30:00").getTime(), // Zandvoort Practice 1
    new Date("2025-08-29T17:00:00").getTime(), // Zandvoort Practice 2
    new Date("2025-08-30T12:30:00").getTime(), // Zandvoort Practice 3
    new Date("2025-08-30T16:00:00").getTime(), // Zandvoort Qualifying
    new Date("2025-08-31T16:00:00").getTime(), // Zandvoort Race
    
    new Date("2025-09-05T14:30:00").getTime(), // Monza Practice 1 
    new Date("2025-09-05T18:00:00").getTime(), // Monza Practice 2
    new Date("2025-09-06T13:30:00").getTime(), // Monza Practice 3
    new Date("2025-09-06T17:00:00").getTime(), // Monza Qualifying
    new Date("2025-09-07T16:00:00").getTime(), // Monza Race
    
    new Date("2025-09-19T11:30:00").getTime(), // Baku Practice 1
    new Date("2025-09-19T15:00:00").getTime(), // Baku Practice 2
    new Date("2025-09-20T11:30:00").getTime(), // Baku Practice 3
    new Date("2025-09-20T15:00:00").getTime(), // Baku Qualifying
    new Date("2025-09-21T14:00:00").getTime(), // Baku Race
    
    new Date("2025-10-03T12:30:00").getTime(), // Singapore Practice 1
    new Date("2025-10-03T16:00:00").getTime(), // Singapore Practice 2
    new Date("2025-10-04T12:30:00").getTime(), // Singapore Practice 3
    new Date("2025-10-04T16:00:00").getTime(), // Singapore Qualifying
    new Date("2025-10-05T15:00:00").getTime(), // Singapore Race
    
    new Date("2025-10-17T20:30:00").getTime(), // Austin Practice 1
    new Date("2025-10-18T00:30:00").getTime(), // Austin Sprit Qualifying
    new Date("2025-10-18T20:00:00").getTime(), // Austin Sprit Race
    new Date("2025-10-19T00:00:00").getTime(), // Austin Qualifying
    new Date("2025-10-19T22:00:00").getTime(), // Austin Race
    
    new Date("2025-10-24T21:30:00").getTime(), // Mexico City Practice 1
    new Date("2025-10-25T01:00:00").getTime(), // Mexico City Practice 2
    new Date("2025-10-25T20:30:00").getTime(), // Mexico City Practice 3
    new Date("2025-10-26T00:00:00").getTime(), // Mexico City Qualifying
    new Date("2025-10-26T22:00:00").getTime(), // Mexico City Race
    
    new Date("2025-11-07T16:30:00").getTime(), // Sao Paulo Practice 1
    new Date("2025-11-07T20:30:00").getTime(), // Sao Paulo Sprit Qualifying
    new Date("2025-11-08T16:00:00").getTime(), // Sao Paulo Sprit Race
    new Date("2025-11-08T20:00:00").getTime(), // Sao Paulo Qualifying
    new Date("2025-11-09T19:00:00").getTime(), // Sao Paulo Race
    
    new Date("2025-11-21T02:30:00").getTime(), // Las Vegas Practice 1
    new Date("2025-11-21T06:00:00").getTime(), // Las Vegas Practice 2
    new Date("2025-11-22T02:30:00").getTime(), // Las Vegas Practice 3
    new Date("2025-11-22T06:00:00").getTime(), // Las Vegas Qualifying
    new Date("2025-11-23T06:00:00").getTime(), // Las Vegas Race
    
    new Date("2025-11-28T15:30:00").getTime(), // Lusail Practice 1
    new Date("2025-11-28T19:30:00").getTime(), // Lusail Sprit Qualifying
    new Date("2025-11-29T16:00:00").getTime(), // Lusail Sprit Race
    new Date("2025-11-29T20:00:00").getTime(), // Lusail Qualifying
    new Date("2025-11-30T18:00:00").getTime(), // Lusail Race
    
    new Date("2025-12-05T11:30:00").getTime(), // Yas Marina Practice 1
    new Date("2025-12-05T15:00:00").getTime(), // Yas Marina Practice 2
    new Date("2025-12-06T12:30:00").getTime(), // Yas Marina Practice 3
    new Date("2025-12-06T16:00:00").getTime(), // Yas Marina Qualifying
    new Date("2025-12-07T15:00:00").getTime(), // Yas Marina Race
  ];
  

  const currentTime = new Date().getTime();
  const nextRace = raceDates.find(raceTime => (raceTime + 7200000) > currentTime) || new Date("2025-12-31T23:59:59").getTime(); // Fallback
  
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
      document.getElementById("countdown").innerHTML = "The session is underway!";
      clearInterval(timerInterval);
    }
  }
  
  const timerInterval = setInterval(updateCountdown, 1000);
  