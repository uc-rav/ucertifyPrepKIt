<script>
    import { questionReffrence } from '../Stores/quiz-store.js'; 
    import { showAsideSection } from '../Stores/aside-store.js';
    import Button from './Button.svelte';
    import Timer from './Timer.svelte';
    import ConfirmModal from '../UIComponent/ConfirmModal.svelte';
    import { reviewStatus } from '../Stores/review-store';
    import { onDestroy } from 'svelte';

    let showTimer = true;
    let showModal = false;
    let initialValue = 0;
    let activebtn;
    //let depricateValue = initialValue;
    function handlePrevious() {
        questionReffrence.update((value) => {
            //initialValue = value;
            return value-1 ;
        });
        initialValue-=1;
    }
    function handleNext() {
        questionReffrence.update((value) => {
            //console.log(value);
            //initialValue = value;
            return value+1 ;
        });
       initialValue+=1;
       }
    function handleAside() {
        showAsideSection.update((value) => {
            return true;
        });
    }
    function endTest() {
        showModal = !showModal;
        initialValue = 0;
        questionReffrence.update((value) => {
            return 0;
        });
    }
    $: if(initialValue <= 1) {
        activebtn = true;
    }
    else {
        activebtn = false;
    }

    const unsubscribetimer= reviewStatus.subscribe((data) => {
        showTimer = data;
    });
    //this is done to avoid memory leakage
    onDestroy(unsubscribetimer);
</script>

{#if showModal}
    <ConfirmModal />
{/if}

<footer class="footer">
   <div class="button_set" class:without="{showTimer}">
    {#if !showTimer} 
    <Timer />
    {/if}
    <Button type="button" caption="LIST ITEM" on:click={handleAside}/>
    <Button type="button" caption="PREVIOUS" on:click={handlePrevious} btndisabled={activebtn}/>
    <span>{initialValue = (initialValue < 10) ? '0' + initialValue : initialValue}</span> <span>OF</span> <span>10</span>
    <Button type="button" caption="NEXT" on:click={handleNext}/>
    {#if !showTimer}
    <Button type="button" caption="END TEST" on:click={endTest}/>
    {/if}
   </div>
</footer>
<style>
.footer {
    position : fixed;
    left : 0;
    bottom : 0;
    width : 100%;
    height : 4rem;
    background-color: rgb(128, 0, 0);
}
.button_set {
    position : absolute;
    right : 30px;
    top : 2px;
}
span {
    color : #ffffff;
    margin : 0px 5px 0px 5px;
    font-size : 1.05rem;
}
.without {
    position : absolute;
    right : 30px;
    top : 10px;
}
</style>