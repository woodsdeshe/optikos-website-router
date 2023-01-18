<template>
    <div class="logo-text">
        <section><h1 class="header1">بصرية</h1></section>
        <section><h1 class="header2">visuel</h1></section>
        <section></section><h1 class="header3">视觉</h1>
        <section></section><h1 class="header4">Optikos</h1>
        <section></section><h1 class="header5">ビジュアル</h1>
        <section></section><h1 class="header6">ויזואלית</h1>
        <section></section><h1 class="header7">visual</h1>
        <section></section><h1 class="header8">비주얼</h1>
    </div>
</template>

<script>

</script>

<style>
.logo-text{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "header1 header2 . ."
    "header3 header3 . ."
    "header4 header5 . ."
    "header6 header7 . ."
    "header8 . . ."
    ;
   
    font-size: 30px;
    text-transform: uppercase;
    font-family: 'Selino';
    row-gap: 0%  ;
}

.header1{
    grid-area: header1;
}
.header2{
    grid-area: header2;
}
.header3{
    grid-area: header3;
}
.header4{
    grid-area: header4;
    color: #83C5BE
}
.header5{
    grid-area: header5;
}
.header6{
    grid-area: header6;
}
.header7{
    grid-area: header7;
}
.header8{
    grid-area: header8;
}
</style>