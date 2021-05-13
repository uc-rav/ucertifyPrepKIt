<script>
    import TopHeader from './UIComponent/TopHeader.svelte';
    import Header from './UIComponent/Header.svelte';
    import ItemList from './UIComponent/ItemList.svelte';
    import QuizArea from './Quiz/QuizArea.svelte';
    import AsideSection from './UIComponent/AsideSection.svelte';

    let path;
</script>


<TopHeader path="http://www.ucertify.com"/>
<Header path="http://www.ucertify.com"/>
<AsideSection />
<QuizArea />
<ItemList />

<style>
    @import url('https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css');
</style>