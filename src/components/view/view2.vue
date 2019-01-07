<template>
    <el-row>
        <el-col class="wrap" :span="12">
            <el-button @click="test">点击</el-button>
        </el-col>
        <el-col class="wrap" :span="12">
            <el-button @click="mockjs">mockjs</el-button>
            <div>{{ res1 }}</div>
        </el-col>
        <el-col class="wrap" :span="12">
            <el-button @click="btnp">Promise</el-button>
            <el-button @click="btnp1">Promise1</el-button>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            arr: ['a', 'b', 'c'],
            arr1: [1,2,3,4,5,6,3,2,1,4,3,1],
            res1: null,
            img1: null,
            res2: null
        }
    },
    methods: {
        test() {
            for(let [k, v] of this.arr.entries()){
                console.log(k, v)
            }
            let set = new Set(this.arr1);
            let newArr1 = [...new Set(this.arr1)];
            console.log(set)
            console.log(newArr1)
        },
        mockjs() {
            this.$http.post('/news/index', {a: 2})
            .then(res => {
                console.log(res);
                this.res1 = res.data.articles[0].author_name;
                this.img1 = res.data.articles[0].thumbnail_pic_s;
            });
            this.$http.get('/news/index1')
            .then(res => {
                console.log(res);
            });
        },
        btnp() {
            let n = 3;
            let promise = new Promise((resolve, reject) => {
                if(n > 5){
                    resolve('成功');
                }else {
                    reject('失败');
                }
            })
            promise.then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },
        btnp1() {
            let status = 200;
            let userLogin = (resolve, reject) => {
                setTimeout(() => {
                    if(status == 200) {
                        resolve({data: 'xxx', msg: '登陆成功', token: 'ddasdq'})
                    }else {
                        reject({data: 'ddd', msg: '登陆失败', token: 'ddasdq'})
                    }
                }, 2000)
            };
            let getUserInfo = (resolve, reject) => {
                setTimeout(() => {
                    if(status == 200) {
                        resolve({data: 'xxx', msg: '获取用户信息成功', token: 'ddasdq'})
                    }else {
                        reject({data: 'ddd', msg: '获取失败', token: 'ddasdq'})
                    }
                }, 1000)
            };
            new Promise(userLogin).then( res => {
                // console.log('用户登录成功')
                console.log(res.msg)
                return new Promise(getUserInfo)
            }).then( res => {
                // console.log('获取用户信息成功')                
                console.log(res.msg)
            })
        }
    }
}
</script>
<style scoped>
    .wrap{
        height: 200px;
        border: 1px solid #ccc;
    }
</style>
