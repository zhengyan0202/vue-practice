<template>
    <div>
        <h1>Ayyay</h1>
        <div>{{ arr }}</div>
        <div>revwerse: {{ arr1 }}</div>
        <div>sort: {{ arr2 }}</div>
        <div>sort: {{ arr3 }}</div>
        <div>sort: {{ arr4 }}</div>
        <el-button @click="arrTest">点击</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [1, 3, 6, 2, 5, 4, 10, 15],
            arr1: [1, 3, 6, 2, 5, 4],
            arr2: [1, 3, 6, 2, 5, 4, 10, 15],
            arr3: [1, 3, 6, 2, 5, 4, 10, 15],
            arr4: [1, 3, 6, 2, 5, 4, 10, 15],
        }
    },
    methods: {
        arrTest() {
            // console.log(...this.arr);
            this.arr1.reverse();     
            this.arr2.sort();
            this.arr3.sort(compare);
            this.arr4.sort(compare1);
            
            function compare(val1, val2) {
                console.log(val1,val2);
                if(val1 < val2) {
                    return -1;
                }else if(val1 > val2) {
                    return 1;
                }else {
                    return 0;
                }
            };
            function compare1(val1, val2) {
                if(val1 < val2) {
                    return 1;
                }else if(val1 > val2) {
                    return -1;
                }else {
                    return 0;
                }
            };
        }
    }
}
</script>
