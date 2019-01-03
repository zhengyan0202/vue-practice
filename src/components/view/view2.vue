<template>
    <div>
        <el-button @click="test">点击</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: ['a', 'b', 'c'],
            arr1: [1,2,3,4,5,6,3,2,1,4,3,1]
        }
    },
    methods: {
        // test() {
        //     for(let [k, v] of this.arr.entries()){
        //         console.log(k, v)
        //     }
        //     let set = new Set(this.arr1);
        //     let newArr1 = [...new Set(this.arr1)];
        //     console.log(set)
        //     console.log(newArr1)
        // },
        test() {
            let params = {
                a: "2"
            }
            this.$http.post('/news/index', params)
            .then(res => {
                console.log(res);
            });
        }
    }
}
</script>