<template>
    <div class="logo-text">
        <div class="header-image">
            <div class="header-text">
                <h1 class="header3">Optikos</h1>
            </div>
        <img class="reading" src="@/assets/reading-girl.png" alt="illustration of woman reading a book">
        </div>
        <div class="container-header">
        <h1 class="container-header">The simple way to learn</h1>
        <h1>through visuals</h1>
    </div>
</template>

<script>

</script>

<style>


.logo-text{
}

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

.header-image {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.header-image img {
    margin-left: 20 px;
    order: 1;
    z-index: 2;
}

.header-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}


</style>