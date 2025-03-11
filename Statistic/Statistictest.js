        fetch('https://theinsightdigest.com/Alex/test.php')
            .then(response => response.json())
            .then(data => {
                const userList = document.getElementById('user-list');
                data.forEach(user => {
                    const li = document.createElement('li');
                    li.textContent = `${user.RaceID} - ${user.RaceName} - ${user.RacePlace} - ${user.RaceDate} `;
                    userList.appendChild(li);
                });
            })
            .catch(error => console.error('Error:', error));
