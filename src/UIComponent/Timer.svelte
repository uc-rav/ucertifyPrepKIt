<script>
    // import { questionReffrence } from '../Stores/quiz-store.js';
    // import { onDestroy } from 'svelte';
    
    // let questionPointer;
    // const unsubscribe = questionReffrence.subscribe((data) => {
    //     questionPointer = data;
    // });
    // console.log("timer"+" "+questionPointer);
    // onDestroy(unsubscribe);

    var sec = 600;
    var time = setInterval(myTimer, 1000);

    function myTimer() {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    document.getElementById('timer').innerHTML = minutes+"  :  "+seconds;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Your Time is Up !");
        }
    }
</script>

<i class='bx bx-alarm-exclamation bx-tada' ></i>
<span id="timer">  
</span>
<span style="position: relative; top:3px; font-size : 1.5rem; color : #ffffff; font-weight: 300; margin-right: 30px;">TIME</span>
<style>
    #timer{
        position: relative;
        top:3px;
        font-size : 1.5rem;
        color : #ffffff;
        margin : 0px 0px 0px 5px;
        font-weight: 300;
        width: 70px;
    }
    i{
        position: relative;
        color: #ffffff;
        font-size: 2.5rem;
        top:10px;
    }
</style>