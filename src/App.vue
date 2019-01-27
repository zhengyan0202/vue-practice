<template>
	<el-container>
		<el-aside style="width: 200px;">
			<leftnav></leftnav>
		</el-aside>
		<el-container>
			<el-header>Vue Element Openlayers Echarts Axios Mockjs</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import leftnav from './components/leftnav/leftnav'
import hello from "./components/HelloWorld";
import arr from "./components/Arrary";

export default {
  	components: { leftnav, hello, arr }
};
</script>


<style>
	a, a:link, a:visited, a:hover, a:active{
		text-decoration:none
	}
	.el-header, .el-footer {
		background-color: #b3c0d1;
		color: #333;
		font-weight: bold;
		font-size: 20px;
		text-align: center;
		line-height: 60px;
	}
	.el-aside {
		background-color: #d3dce6;
		height: 100%
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