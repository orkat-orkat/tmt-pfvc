

<template>
    <h1 class="title">
     H1dayo
    </h1>

    <ul class="head-list">
    <li>１番目の要素</li>
    <li>2</li>
    <li>3</li>
    <li><a href="">３Link</a></li> 
    
    <li>Contact</li>   
    </ul>
</template>





<style scoped>
.title{
   width:100%;
   text-align: left;
   font-size: 32px;
   font-weight: bold;
   padding:2% 10%;
}

ul.head-list {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding:2% 10%;
}

ul.head-list li{
    margin-right: 10px;
}

ul.head-list li:nth-of-type(4) {
    margin-left: auto;
    background-color: #ffc;
}
</style>