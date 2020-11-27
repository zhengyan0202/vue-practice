<template>
	<el-container>
		<el-aside style="width: 200px;">
			<leftnav></leftnav>
		</el-aside>
		<el-container>
			<el-header>Sow Nothing Reap Nothing</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import leftnav from './components/leftnav/leftnav'
import arr from "./components/Arrary";

export default {
  	components: { leftnav, arr }
};
</script>


<style>
	a, a:link, a:visited, a:hover, a:active{
		text-decoration:none
	}
	.el-header, .el-footer {
		background-color: rgb(217,226,233);
		background-image: url('./assets/img/cat.jpg');
		background-size:60px 60px;
		background-repeat:no-repeat;
		color: #1989fa;
		font-weight: bold;
		font-size: 20px;
		text-align: center;
		line-height: 60px;
	}
	.el-aside {
		background-color: #d3dce6;
		background-size:200px 100%;
    background-repeat:no-repeat;
		height: 100%;
	}
	.el-menu {
		background-color: rgba(0, 0, 0, 0);
	}
	.el-main {
		background-color: #e9eef3;
		height: 100%;
		padding: 0px;
		/* color: #333;
		text-align: center;
		line-height: 160px; */
	}
	body > .el-container {
		height: 100%;
	}
</style>