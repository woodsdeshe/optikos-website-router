<template>
    <div class="logo-text">
        <div class="header-image">
            <div class="header-text">
                <h1 class="header3">Optikos</h1>
            </div>
        <img class="reading" src="@/assets/reading-girl.png" alt="illustration of woman reading a book">
        </div>
        <div class="container-header">
        <h1 class="container-header-sub-1">The simple way to learn</h1>
        <h1  class="container-header-sub-2">through visuals</h1>
        </div>  
    </div>
</template>

<script>

</script>

<style>


h1{
    font-size: 56px;
}

.container-header{
    font-family: Selino;
    text-align: center;
    text-shadow: 0 4px 0.2em gray;
    padding: 10%;
    margin: 0;
    background-color: #FFDDD2 ;
}

.container-header-sub-2{
    margin: 0;
    color: #384D48;
}

.header-image {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.header-image img {
    margin-left: 20 px;
    order: 1;
    z-index: 2;
    border-radius:15px;
    height: 1em;
}

.header-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}

</style>