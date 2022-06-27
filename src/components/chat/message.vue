<template>
    <div id="message" v-scroll-bottom="sessions[currentSessionName]">
        <ul>
            <li v-for="entry,i in sessions[currentSessionName]" :key="i">
                <p class="time">
                    <span>{{entry.createTime}}</span>
                </p>
                <div class="main" :class="{self:entry.self}">
                    <img class="avatar" :src="entry.self ? '/images/'+user.picture : '/images/'+img" alt="">
                    <p class="text">{{entry.content}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'message',
        computed: {
            ...mapState([
                'sessions',
                'currentSessionName',
                'user',
                'friends'
            ]),
            img(){
                if (this.friends){
                    for (let i in this.friends){
                        if (this.friends[i].username===this.currentSessionName){
                            return this.friends[i].picture
                        }
                    }
                }else {
                    return null
                }
            }
        },
        // filters: {
        //     time(date) {
        //         if (date) {
        //             date = new Date(date);
        //         }
        //         return `${date.getHours()}:${date.getMinutes()}`;
        //     }
        // },
        directives: {/*这个是vue的自定义指令,官方文档有详细说明*/
            // 发送消息后滚动到底部,这里无法使用原作者的方法，也未找到合理的方法解决，暂用setTimeout的方法模拟
            'scroll-bottom'(el) {
                setTimeout(function () {
                    el.scrollTop += 9999;
                }, 1)
            }
        }
    }
</script>

<style scoped>
    #message {
        padding: 15px;
        max-height: 68%;
        overflow-y: scroll;
    }
    ul {
        list-style-type: none;
        padding-left: 0;
    }

    ul > li {
        margin-bottom: 15px;
    }

    .time {
        text-align: center;
        margin: 7px 0;
    }

    .time span {
        display: inline-block;
        padding: 0 18px;
        font-size: 12px;
        color: #FFF;
        background-color: #dcdcdc;
        border-radius: 2px;
    }

    .main .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
        width: 30px;
        height: 30px;

    }

    .main .text {
        display: inline-block;
        padding: 0 10px;
        max-width: 80%;
        background-color: #fafafa;
        border-radius: 4px;
        line-height: 30px;
    }

    .self {
        text-align: right;
    }

    .self .avatar {
        float: right;
        margin: 0 0 0 10px;
        border-radius: 3px;
        width: 30px;
        height: 30px;
    }

    .self .text {
        display: inline-block;
        padding: 0 10px;
        max-width: 80%;
        background-color: #b2e281;
        border-radius: 4px;
        line-height: 30px;
    }

</style>
