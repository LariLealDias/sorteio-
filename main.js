    const userNumber = document.getElementById('userNumber');
    const raffle = document.getElementById('raffle');
    const resultRaffle = document.getElementById('result');

    raffle.addEventListener('click', randomizedNumber);

    function randomizedNumber(){

        let random = Math.floor(Math.random() * (userNumber.value) + 1);

        resultRaffle.innerHTML = random;
    }
    