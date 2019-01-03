<template>
    <div>
        <h1>vue组件</h1>
        <div>{{ name }}</div>
        <div>{{ this.$store.state.testArr }}</div>
        <div v-for = "(item,index) in zyan" :key="index">
        <!-- <div v-for((item, index) in zyan) :key="index"> -->
            <span>{{ item }}</span>
        </div>
        <!-- <div>{{  }}</div> -->
        <button @click="vuestore">set</button>
        <el-button @click="pushTest">push</el-button>
        <el-button @click="removeTest">remove</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "zuan",
            zyan: ["age", "name", "weight"],
            zyaz: "height"
        }
    },
    methods: {
        vuestore(){
            this.$store.commit("setTestArr", this.zyan);
            console.log("执行了");
            //在vuex中获取数据
            // this.name = this.$store.state.testArr[0];
            //通过getters获取数据
            console.log(this.$store.getters.getTestArr);
            this.name = this.$store.getters.getTestArr[0];
        },
        pushTest(){
            this.$store.commit("pushTestArr", this.zyaz);         
        },
        removeTest(){
            this.$store.commit("removeTestArr", this.zyaz);         
        }
    },
    computed: {
        addA(){
            console.log( "+ A");
            return Number(this.a) + this.num
        }
    },
    
}
</script>
