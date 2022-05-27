<template>
    <div >
        <input type="text" class="search-input" placeholder="Tìm kiếm...">
    </div>
</template>
<style>
    .search-input{
        border-radius:3px;
        width: 200px;
        height: 24px;
        font-size: 16px;
        padding:6px 12px 6px 12px;
        border: 1px solid #ccc
    }
    .search-input:focus{
        outline: 1px red;
        /* outline: unset; */
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);

    }
</style>