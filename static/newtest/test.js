import Vue from 'vue'


Vue.component('remote-script', {
    render:function mytest(){
        console.log("引入外部js文件,hahah")
    },
    props: {
        src: {
            type: String,
            required: true
        }
    }
})

export { //很关键
    mytest
}