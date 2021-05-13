<script>   
    export let path;
</script>

<div class="navigation"> 
    <a href="{path}">uCertify</a>
    <h1>uCertify Prep Kit</h1>       
</div>

<style>
.navigation{
    position: fixed;
    left: 0;
    top: 2.25rem;
    height: 4rem;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    z-index: 9997;
}
.navigation a {
    color: rgb(128, 0, 0);
    text-decoration: none;
    font-size: 2.70rem;
    margin: -2px 0px 0px 15px;
    font-weight: 400;
}
.navigation h1 {
    font-weight: 400;
    margin: 7px 0px 0px 30px;
}
</style>