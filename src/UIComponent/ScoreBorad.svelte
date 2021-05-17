<script>
    import { questionReffrence } from '../Stores/quiz-store.js';
    import { reviewStatus } from '../Stores/review-store';
    import { answersClone } from '../Stores/quiz-store.js';
    import App from '../App.svelte';

    let startQuiz = true;
    let restartApp = false;
    export let totalScore;
    export let attempted=0;

    function restartQuiz() {
        reviewStatus.update((value) => {
            return false;
        });
        startQuiz = !startQuiz;
        restartApp = !restartApp;
        document.location.reload();
    }

    function updateReview() {
        reviewStatus.update((value) => {
            return true;
        });
        questionReffrence.update((value) => {
            return 0 ;
        });
        startQuiz = false;
    }

    // let myAnswers = [];
    // answersClone.subscribe((value) => {
    //     myAnswers = [...value];
    // });
    // for(let i=0; i<10;i++)
    // {
    //     console.log(myAnswers[i]);
    // }
 </script>
 
 {#if startQuiz}
 <div class="backdrop">
     <div class="score_board">
         <h1>Your Score</h1>
         <hr>
         <h1>{totalScore}</h1>
         <h2>Attempted    : {attempted}</h2>
         <h2>Un-Attempted : {10 - attempted}</h2>  
         <button type="button" class="score_btn" on:click={restartQuiz}>RESTART</button>
         <button type="button" class="score_btn" on:click={updateReview}>REVIEW</button>      
     </div>
 </div>
 {:else}
    <App />
 {/if}

 

 <style>
     .backdrop {
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         z-index: 9999;
         background-color: rgba(0, 0, 0, 0.8);
     }
     .score_board{
         position: fixed;
         top: calc(50% - 150px);
         left: calc(50% - 300px);
         height: 350px;
         width: 600px;
         background-color: #ffffff;
         z-index: 9999;
         border-radius: 5px;
         border-left: 5px solid rgb(128, 0, 0);
     }
     .score_board h1 {
         font-weight: 400;
         font-size: 1.85rem;
         text-align: center;
     }
     .score_board h2 {
         font-weight: 400;
         font-size: 1.85rem;
         text-align: left;
         margin: 0  0  0  20px;
         padding: 0;
     }
     hr {
         width: 80%;
         border: 0;
         height: 1px;
         background: #333;
         background-image: linear-gradient(to right, #ccc, #333, #ccc);
         margin-top: 30px;
         margin-bottom: 40px;
     }
     .score_btn {
        width : 120px;
        border-radius: 20px;
        background-color: #ffffff;
        color : rgba(128, 0, 0);
        font-size: 1.05rem;
        padding: 0.6rem;
        margin-left: 20%;
        transition: all 0.5s;
        font-weight: 400;
        margin-top: 20px;
    }
    .score_btn:hover {
        background-color: rgb(128, 0, 0);
        color: #ffffff;
        transition: all 0.5s;
    }
 </style>