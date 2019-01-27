<template>
    <el-row class="left-wrap">
        <el-col>
            <el-menu default-active="" class="el-menu-vertical-demo">
                <router-link :to="{name: 'home'}">
                    <el-menu-item index="0">
                        <i class="el-icon-picture"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                </router-link>
                <!-- 导航一 -->
                <router-link :to="{name: 'view1'}">
                    <el-menu-item index="2">
                        <i class="el-icon-edit-outline"></i>
                        <span slot="title">导航一</span>
                    </el-menu-item>
                </router-link>
                <!-- 导航二 -->
                <router-link :to="{name: 'view2'}">
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                </router-link>
                <!-- 导航三 -->
                <router-link :to="{name: 'olmap'}">
                    <el-menu-item index="4">
                        <i class="el-icon-location"></i>
                        <span slot="title">地图</span>
                    </el-menu-item>
                </router-link>
                <!-- 导航四 -->
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>导航四</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name: 'test1'}">
                            <el-menu-item index="1-1">选项1</el-menu-item>
                        </router-link>
                        <router-link :to="{name: 'test2'}">
                            <el-menu-item index="1-2">选项2</el-menu-item>                            
                        </router-link>
                        <router-link :to="{name: 'test3'}">
                            <el-menu-item index="1-3">选项3</el-menu-item>                            
                        </router-link>
                    </el-menu-item-group>                        
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <router-link :to="{name: 'test4'}">
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </router-link>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>    
</template>

<script>
export default {
    data() {
        return {
            name: 'zyan'
        }
    },
    methods: {
        test() {
            console.log(this.name)
        }
    }
}
</script>
<style scoped>
    .left-wrap{
        margin-top: 60px;
    }
</style>
