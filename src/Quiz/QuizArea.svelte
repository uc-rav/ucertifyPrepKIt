<script>
    import { onDestroy } from "svelte";
    import Footer from "../UIComponent/Footer.svelte";
    import ScoreBorad from "../UIComponent/ScoreBorad.svelte";
    import { questionReffrence } from "../Stores/quiz-store.js";
    import { reviewStatus } from "../Stores/review-store.js";
    import { answersClone } from "../Stores/quiz-store.js";

    let questions = [
        {
            id: 1,
            question:
                "Which of the following special symbol allowed in a variable name?",
            options: [
                "* (asterisk)",
                "| (pipeline)",
                "- (hyphen)",
                "_ (underscore)",
            ],
            correctIndex: 4,
            status: false,
            description:
                "The correct answer for this question is underscore becuase only underscore is allowed in variable name.",
        },
        {
            id: 2,
            question:
                "Which of the following correctly shows the hierarchy of arithmetic operations in C?",
            options: ["/ + * -", "* - / +", "+ - / *", "/ * + -"],
            correctIndex: 3,
            status: false,
            description: "The correct answer for this question is '+ - / *'.",
        },
        {
            id: 3,
            question:
                "Which header file should be included to use functions like malloc() and calloc()?",
            options: ["memory.h", "stdlib.h", "string.h", "dos.h"],
            correctIndex: 1,
            status: false,
            description:
                "The correct answer for this question is memory.h because malloc and calloc functions are define in this header file.",
        },
        {
            id: 4,
            question:
                "Which bitwise operator is suitable for turning off a particular bit in a number?",
            options: ["&& operator", "& operator", "|| operator", "! operator"],
            correctIndex: 2,
            status: false,
            description: "The correct answer for this question is & operator",
        },
        {
            id: 5,
            question:
                "What function should be used to free the memory allocated by calloc() ?",
            options: [
                "dealloc();",
                "malloc(variable_name, 0)",
                "free();",
                "memalloc(variable_name, 0)",
            ],
            correctIndex: 3,
            status: false,
            description: "The correct answer for this question is free()",
        },
        {
            id: 6,
            question:
                "Which of the following special symbol allowed in a variable name?",
            options: [
                "* (asterisk)",
                "| (pipeline)",
                "- (hyphen)",
                "_ (underscore)",
            ],
            correctIndex: 4,
            status: false,
            description:
                "The correct answer for this question is underscore becuase only underscore is allowed in variable name.",
        },
        {
            id: 7,
            question:
                "Which of the following correctly shows the hierarchy of arithmetic operations in C?",
            options: ["/ + * -", "* - / +", "+ - / *", "/ * + -"],
            correctIndex: 3,
            status: false,
            description: "The correct answer for this question is '+ - / *'.",
        },
        {
            id: 8,
            question:
                "Which header file should be included to use functions like malloc() and calloc()?",
            options: ["memory.h", "stdlib.h", "string.h", "dos.h"],
            correctIndex: 1,
            status: false,
            description:
                "The correct answer for this question is memory.h because malloc and calloc functions are define in this header file.",
        },
        {
            id: 9,
            question:
                "Which bitwise operator is suitable for turning off a particular bit in a number?",
            options: ["&& operator", "& operator", "|| operator", "! operator"],
            correctIndex: 2,
            status: false,
            description: "The correct answer for this question is & operator",
        },
        {
            id: 10,
            question:
                "What function should be used to free the memory allocated by calloc() ?",
            options: [
                "dealloc();",
                "malloc(variable_name, 0)",
                "free();",
                "memalloc(variable_name, 0)",
            ],
            correctIndex: 3,
            status: false,
            description: "The correct answer for this question is free()",
        },
    ];

    // the following code will create an "answers" array of length same as questions array and fill with null.
    let answers = new Array(questions.length).fill(null);

    let questionPointer;
    const unsubscribe = questionReffrence.subscribe((data) => {
        questionPointer = data;
    });

    onDestroy(unsubscribe);

    let showReview;
    const unsubscribeReview = reviewStatus.subscribe((data) => {
        showReview = data;
    });

    onDestroy(unsubscribeReview);

    let hideBox = false;
    function startQuiz() {
        hideBox = true;
        questionReffrence.update((value) => {
            return 0;
        });
    }

    let attempted = 0;
    function getScore() {
        let score = answers.reduce((acc, val, index) => {
            if (questions[index].correctIndex == val) {
                return acc + 1;
            }
            return acc;
        }, 0);
        return (score / questions.length) * 100 + "%";
    }

    const countAttempt = () => {
        let i = 0;
        while (i < answers.length) {
            if (answers[i] != null) {
                attempted += 1;
            } else {
                answers[i] = "UNATTEMPTED";
            }
            i++;
        }
        return attempted;
    };

    function selectAnswer(i) {
        answers[questionPointer] = i + 1;
        questions[questionPointer].status = true;
    }

    $: answersClone.update((data) => {
        return [answers, ...data];
    });

    let myAnswers = new Array(answers.length).fill(null);
    $: answersClone.subscribe((data) => {
        myAnswers = [...data];
    });
    // $:console.log(myAnswers);
</script>

<div class="application">
    {#if questionPointer == -1}
        <div class="start_screen" class:clicked={hideBox}>
            <button id="start" on:click={startQuiz}>START QUIZ</button>
        </div>
    {:else if !(questionPointer > answers.length - 1)}
        <div class="quiz_screen">
            <div class="main">
                <h2>
                    QUESTION {questions[questionPointer].id} : {questions[
                        questionPointer
                    ].question}
                </h2>
                <div class="option">
                    {#each questions[questionPointer].options as opt, i}
                        <ul>
                            <li>
                                <label class="container">
                                    
                                    <!-- checked={answers[questionPointer]==null ? false : showReview ? false : 'checked'} -->
                                    <input
                                        type="radio"
                                        on:click={() => {
                                            debugger;
                                            selectAnswer(i);
                                        }}
                                        name="options"
                                        disabled={showReview}
                                        checked={answers[questionPointer] == null ? false: showReview ? false: "checked" } />{" " + opt}
                                    <span class="checkmark" />
                                </label>
                            </li>
                        </ul>
                    {/each}
                </div>
                {#if showReview}
                    <h2
                        class={questions[questionPointer].correctIndex ==
                        answers[questionPointer]
                            ? "correct"
                            : "incorrect"}
                    >
                        {#if questions[questionPointer].correctIndex == answers[questionPointer]}
                            <i class="bx bxs-check-circle bx-tada" />
                        {:else if questions[questionPointer].correctIndex != answers[questionPointer] && answers[questionPointer] != "UNATTEMPTED"}
                            <i class="bx bxs-x-circle bx-tada" />
                        {:else}
                            <i class="bx bxs-error-circle bx-tada" />
                        {/if}
                        <span>
                            YOUR ANSWER : {answers[questionPointer] ? answers[questionPointer] : "UNATTEMPTED"}</span>
                    </h2>
                    <div class="description">
                        <h2>
                            CORRECT ANSWER : {questions[questionPointer]
                                .correctIndex}
                        </h2>
                        <h3>
                            DESCRIPTION : {questions[questionPointer]
                                .description}
                        </h3>
                    </div>
                {/if}
            </div>
            <Footer />
        </div>
    {:else}
        <div class="score_screen">
            {#if !showReview}
                <ScoreBorad
                    totalScore={getScore()}
                    attempted={countAttempt()}
                />
            {:else}
                <div class="greeting">
                    <h1>
                        <i class="bx bxs-smile bx-tada"></i>
                        <span>
                            Better luck next time!
                        </span>
                    </h1>
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
    .greeting h1 {
        font-weight: 400;
        font-size: 1.75rem;
        background-color: rgba(255, 127, 80, 0.4);
        display: inline-block;
        padding: 5rem;
        border: 2px solid rgb(255, 127, 80);
        border-radius: 5px;
        margin-left: 40%;
        width: 300px;
    }
    .greeting h1 i {
        font-size: 4rem;
        color: rgb(255, 69, 0);
    }
    .greeting h1 span {
        color: red;
        position: fixed;
        margin-top: 10px;
    }
    .start_screen {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
        z-index: 9996;
        display: inline;
    }
    #start {
        position: fixed;
        height: 50px;
        width: 160px;
        border-radius: 25px;
        background-color: rgba(128, 0, 0, 0.9);
        color: #ffffff;
        top: calc(50% - 25px);
        left: calc(50% - 70px);
        font-size: 1.15rem;
    }
    #start:hover {
        background-color: rgba(128, 0, 0, 1);
    }
    .clicked {
        display: none;
    }
    .main {
        position: fixed;
        top: 7.1rem;
        bottom: 4.9rem;
        left: 0.7rem;
        right: 0.7rem;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
    }
    .main h2 {
        font-weight: 400;
        margin: 4rem 0 0 20rem;
        font-size: 1.75rem;
    }
    .main h2 i {
        font-size: 3.5rem;
    }
    .main h2 span {
        position: absolute;
        margin-top: 10px;
    }
    .option ul li {
        background-color: #ccc;
        width: 300px;
        padding: 5px 5px 5px 20px;
        border-radius: 25px;
        transition: all 0.5s;
    }
    .option ul li:hover {
        background-color: #ffffff;
        transition: all 0.5s;
        border: 1px solid rgba(0, 0, 0, 0.6);
    }
    .option ul {
        list-style-type: none;
        margin: 1rem 0 0 18rem;
        font-size: 1.5rem;
        color: #000000;
        font-weight: 300;
    }
    .description {
        background-color: rgba(0, 255, 0, 0.2);
        position: relative;
        height: 7rem;
        width: 80rem;
        left: calc(50% - 40rem);
        top: 10%;
        border: 1px solid green;
        border-radius: 5px;
    }
    .description h2 {
        margin-left: 20px;
        position: relative;
        margin-top: 15px;
    }
    .description h3 {
        position: relative;
        margin: 10px 20px 30px 20px;
        font-size: 1.25rem;
        font-weight: 400;
    }
    .greeting {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
    }
    .greeting h1 {
        margin-top: 25rem;
    }
    .correct {
        margin-left: 20px;
        color: darkgreen;
    }
    .incorrect {
        margin-left: 20px;
        color: red;
    }
    .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default radio button */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
        position: absolute;
        top: 8px;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;
        margin-right: 5px;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: rgb(128, 0, 0);
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
        top: calc(50% - 0.454rem);
        left: calc(50% - 0.454rem);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: white;
    }
</style>
