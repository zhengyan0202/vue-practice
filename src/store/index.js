import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({
    state: {
        //设置属性
        testArr: []
    },
    getters: {
        //获取属性的状态
        getTestArr: state => state.testArr
    },
    mutations: {
        //改变属性的状态
        setTestArr(state, data){
            state.testArr = data;
            console.log(data);
        },
        pushTestArr(state, data){
            state.testArr.push(data);
            console.log(state.testArr);
        },
        removeTestArr(state, data){
            let len = state.testArr.length;
            state.testArr.splice(len-1, 1)
        }
    },
    actions: {
        //应用mutations
    }
})