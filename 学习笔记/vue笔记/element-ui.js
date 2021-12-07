给el标签 添加icon图标
    icon="el-icon-xxx"
el颜色
    text='primary' 蓝色
    success info warning danger
el图标大小  默认大按钮
    size='mini' 小按钮

封装提示信息组件(按钮只有icon符号时,需要提示信息,但ele-ui没有提供)
<el-button type="danger" icon="el-icon-plus" size="mini"></el-button>

    父组件
        <HintButton type="danger" icon="el-icon-plus" size="mini" title="添加" @click="test"></HintButton>

    自定义组件HintButton
    <a herf="javascript:;" :title="title">
        <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
    props:['title'],//接受title后,attrs就不再拿了this.$attrs变成了{icon/size/title}
    mounted(){
        console.log(this.$attrs,this.$listeners)
        //可以看到两个对象:{type/icon/size/title}属性
            {xxx:f}事件
    }