<script>
    import { showAsideSection } from '../Stores/aside-store.js';
    import { onDestroy } from 'svelte';
    import { questionReffrence } from '../Stores/quiz-store.js';
    import { answersClone } from '../Stores/quiz-store.js';

    let myAnswers = new Array(10).fill(null);
    answersClone.subscribe((data) => {
        myAnswers = [...data];
    });

    let showAside;

    const unsubscribe = showAsideSection.subscribe((data) => {
        showAside = data;
    });

    onDestroy(unsubscribe);

    function closeAside() {
        showAsideSection.update((value) => {
            return false;
        });
    }

    function changePointerOne() {
        questionReffrence.update((value) => {
            return 0;
        });

    }
    function changePointerTwo() {
        questionReffrence.update((value) => {
            return 1;
        });
    }
    function changePointerThree() {
        questionReffrence.update((value) => {
            return 2;
        });
    }
    function changePointerFour() {
        questionReffrence.update((value) => {
            return 3;
        });
    }
    function changePointerFive() {
        questionReffrence.update((value) => {
            return 4;
        });
    }
    function changePointerSix() {
        questionReffrence.update((value) => {
            return 5;
        });
    }
    function changePointerSeven() {
        questionReffrence.update((value) => {
            return 6;
        });
    }
    function changePointerEight() {
        questionReffrence.update((value) => {
            return 7;
        });
    }
    function changePointerNine() {
        questionReffrence.update((value) => {
            return 8;
        });
    }
    function changePointerTen() {
        questionReffrence.update((value) => {
            return 9;
        });
    }
</script>

{#if showAside}
<div class="aside">
    <i class='bx bxs-x-square' style='color:#bc1214' on:click={closeAside}></i>
    <div class="wrapper" >
        <div class="guide">
            <div class="checked" style="background-color: rgb(40, 167, 69);">
            </div>
            <h2>ATTEMPTED</h2>
        </div>
        <div class="guide">
            <div class="checked">
            </div>
            <h2>UN-ATTEMPTED</h2>
        </div>
    </div>
    <ul class="unordered_list">
        <li class="list_item">
            <div class="list_content" on:click={changePointerOne}>
                <div class="counting">
                   <h2>01</h2>
                </div>
                <h3>Question Number 01</h3>
                <div class="checkbox" >
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerTwo}>
                <div class="counting">
                   <h2>02</h2>
                </div>
                <h3>Question Number 02</h3>
                <div class="checkbox">
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerThree}>
                <div class="counting">
                   <h2>03</h2>
                </div>
                <h3>Question Number 03</h3>
                <div class="checkbox" >
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerFour}>
                <div class="counting">
                   <h2>04</h2>
                </div>
                <h3>Question Number 04</h3>
                <div class="checkbox" >
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerFive}>
                <div class="counting">
                   <h2>05</h2>
                </div>
                <h3>Question Number 05</h3>
                <div class="checkbox">
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerSix}>
                <div class="counting">
                   <h2>06</h2>
                </div>
                <h3>Question Number 06</h3>
                <div class="checkbox">
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerSeven}>
                <div class="counting">
                   <h2>07</h2>
                </div>
                <h3>Question Number 07</h3>
                <div class="checkbox">
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerEight}>
                <div class="counting">
                   <h2>08</h2>
                </div>
                <h3>Question Number 08</h3>
                <div class="checkbox">
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerNine}>
                <div class="counting">
                   <h2>09</h2>
                </div>
                <h3>Question Number 09</h3>
                <div class="checkbox">
                </div>
            </div>
        </li>
        <li class="list_item">
            <div class="list_content" on:click={changePointerTen}>
                <div class="counting">
                   <h2>10</h2>
                </div>
                <h3>Question Number 10</h3>
                <div class="checkbox">
                </div>
            </div>
        </li>
    </ul>
</div>
{/if}

<style>
.aside {
    position: fixed;
    top: 6.5rem;
    bottom: 4.1rem;
    left: 0;
    width: 450px;
    background-color: #ffffff;
    z-index: 9990;
    border-right: 3px solid rgb(128, 0, 0);
    overflow: scroll;
}
.aside i {
    font-size: 2.5rem;
    position: absolute;
    right: 0;
}
.unordered_list {
    list-style-type: none;
}
.counting {
    height: 40px;
    width: 40px;
    background-color: rgb(128, 0, 0);
    text-align: center;
    border-radius: 40px;
    line-height: 37px;
}
.counting h2 {
    color: #ffffff;
    font-weight: 400;
    display: inline;
}
.list_content {
    display: flex;
    margin: 5px 0px 5px 0px;
    cursor: pointer;
    padding: 7px;
    margin-right: 10px;
    border-radius: 25px;
    transition: all 0.3s;
    border: 0px solid rgba(0, 0, 0, 0.3);
}
.list_content:hover {
    background-color: #ccc;
    border: 1px solid rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
}
.list_content h3 {
    font-weight: 400;
    padding: 0;
    font-size: 1.65rem;
    margin: 0px 40px 0px 5px;
}
.checkbox {
    height: 25px;
    width: 25px;
    margin-top: 7px;
    border:1px solid #000000;
    border-radius: 25px;
}
.checked {
    height: 25px;
    width: 25px;
    margin-top: 7px;
    border:1px solid #000000;
    border-radius: 25px;
}
.guide {
    display: inline-flex;
    margin-left: 35px;
    margin-top: 30px;
}
.guide h2 {
    margin-top: 7px;
    margin-left: 10px;
    font-weight: 400;
    font-size: 1.25rem;
}
.wrapper {
    background-color: rgba(0, 128, 0, 0.2);
    border: 1px solid rgb(0, 128, 0);
    height: 100px;
    margin:40px 10px 10px 10px;
    border-radius: 5px;
}

</style>