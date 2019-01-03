<template>
    <div>
        <ul style="overflow-y: auto; height: 150px; width: 50px" class="scroll">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>6</li>
            <li>6</li>
            <li>6</li>
            <li>6</li>
            <li>6</li>
        </ul>
        <ul style="overflow-y: auto; height: 150px; width: 50px" class="scroll1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
        </ul>
        <ul style="overflow-y: auto; height: 150px; width: 50px" class="scroll2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
        }
    }
}
</script>
<style scoped>
ul{
    float: left;
    margin-left: 20px;
}
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.scroll1::-webkit-scrollbar
{
    width: 10px;
    height: 16px;
    background-color: #F5F5F5;
}
 
/*定义滚动条轨道 内阴影+圆角*/
.scroll1::-webkit-scrollbar-track
{
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}
 
/*定义滑块 内阴影+圆角*/
.scroll1::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}


.scroll2::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.scroll2::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.scroll2::-webkit-scrollbar-thumb
/* {
	background-color: #0ae;
	
	background-image: -webkit-gradient(linear, 0 0, 0 100%,
	                   color-stop(.5, rgba(255, 255, 255, .2)),
					   color-stop(.5, transparent), to(transparent));
} */
{
	background-color: #F90;	
	background-image: -webkit-linear-gradient(45deg,
	                                          rgba(255, 255, 255, .2) 25%,
											  transparent 25%,
											  transparent 50%,
											  rgba(255, 255, 255, .2) 50%,
											  rgba(255, 255, 255, .2) 75%,
											  transparent 75%,
											  transparent)
}
</style>

