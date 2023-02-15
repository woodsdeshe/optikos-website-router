<template>
    <div class="logo-text" style="display: flex;">
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1 class="header3">Optikos</h1>
            <h1 class="container-header">The simple way to learn</h1>
        </div>
        <img class="reading" src="@/assets/reading-girl.png" alt="illustration of woman reading a book">
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
}

.header-image {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.header-image img {
    margin-left: 20 px;
    order: 1;

}

.header-text h1{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}


</style>