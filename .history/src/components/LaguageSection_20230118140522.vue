<template>
    <div class="logo-text">
        <div class="left-section">
        <h1 class="header">بصرية</h1>
        <h1 class="header">visuel</h1>
        <h1 class="header2">视觉</h1>
        <h1 class="header3">Optikos</h1>
        <h1 class="header3">ビジュアル</h1>
        <h1 class="header5">ויזואלית</h1>
        <h1 class="header4">visual</h1>
        <h1 class="header4">비주얼</h1>
        </div>  
        <img class="reading" src="@/assets/reading-girl.png" alt="illustration of woman reading a book">
    </div>
</template>

<script>

</script>

<style>


.logo-text{
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "left right";
grid-row: 10px;
}

.left-section{
    width: 60%;
    padding: -10;
    grid-area: left;
}

h1{
    font-size: 56px;
}

.reading{
    display: block;
    width: 80%;
    z-index: 1;
    margin-bottom: -50px;
    border-radius: 10px;
    grid-area: right;
}




</style>