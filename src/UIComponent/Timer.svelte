<script>
    import { questionReffrence } from '../Stores/quiz-store.js';
    import ScoreBorad from '../UIComponent/ScoreBorad.svelte';
    import swal from 'sweetalert';
    import { answersClone } from '../Stores/quiz-store.js';

    var showScore = false;
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
        swal({
            title: "Oops!",
            text: "Your time is Up! Click 'OK' to get your score card",
            type: "Info",
            buttons: {
                confirm: "OK"
            }
        }).then(val => {
            if(val) {
                showScore = true;
            }
        }
        );
        questionReffrence.update(() => {
            return 0;
        });
        //showScore = true;
        }
    }
    let myAnswers = [];
    answersClone.subscribe((value) => {
        myAnswers = [...value];
    });
    let attempted=-1;
    function getScore() {
        let score = myAnswers.reduce((acc,val,index) => { 
            if(myAnswers[index] != null) {
                return acc+1;
            }  
            return acc;
        },0);
        score = score - 1;
        return (score/10 * 100)+"%";  
    }

    const countAttempt = () => {
        let i=0;
        while (i<myAnswers.length) {
            if(myAnswers[i] != null){
                attempted+=1;   
            }
            else {
                myAnswers[i] = "UNATTEMPTED";
            } 
            i++;
        }
        return attempted;
    };
</script>

{#if showScore}
    <ScoreBorad totalScore={getScore()} attempted={countAttempt()}/>  
{:else}
<i class='bx bx-alarm-exclamation bx-tada' ></i>
<span id="timer">  
</span>
<span style="position: relative; top:3px; font-size : 1.5rem; color : #ffffff; font-weight: 300; margin-right: 30px;">TIME</span>
{/if}
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