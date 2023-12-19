<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link replace class="list-group-item" to="/home/news" active-class="active">News</router-link>
                </li>
                <li>
                    <router-link replace class="list-group-item" to="/home/message" active-class="active">Message</router-link>
                </li>
            </ul>
            <keep-alive :include="['News','Message']">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home'
    }
</script>

<style>
    
</style>