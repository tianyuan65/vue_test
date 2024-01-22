export default {
    install(Vue){
        // 配置全局过滤器，全局过滤器必须在实例化Vue之前就要配置好
        Vue.filter('mySlice',function (value) {
            return value.slice(0,4)
        })

        // 配置全局指令，和全局过滤一样，全局指令必须在实例化Vue之前就要配置好
        Vue.directive('fbind',{
            // 何时调用该函数？ 指令与元素成功绑定时(就是一上来)
            bind(element,binding){
                console.log('fbind-bind',this);  //Window  注意：此处的this是window，因为我们操作了DOM，只有Window才能操作DOM
                element.value=binding.value
                console.log('bind');
            },
            // 何时调用该函数？ 指令所在元素被插入页面时
            inserted(element,binding){
                // 指令元素被插入页面时，input获取焦点
                element.focus()
                console.log('inserted',binding);
            },
            // 何时调用该函数？ 指令所在的模板被重新解析时
            update(element,binding){
                // 这个函数里不能空着，记得把要更新的数据写上去
                element.value=binding.value
                // 想要数据更新后不失去焦点就加这一步骤，但是这很诡异
                // element.focus()
                console.log('updated');
            }
        })

        // 定义混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })

        // 给Vue原型上添加一个方法(Vue实例对象和组件实例对象就都能用了)
        Vue.prototype.hello=()=>{alert('事儿可真多啊')}
    }
}