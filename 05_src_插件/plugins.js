//vm和vc都可以用
export default {
    install(Vue){
        //全局的过滤器
        Vue.filter('mySlice',function(value){
            return value.Slice(0,4)
        })
        
        //全局指令
        Vue.directive('fbind', {
            
            bind(element, binding){
                console.log(binding)
                element.value = binding.value;
            },
            // 指令被插入页面时
            inserted(element, binding){
                console.log(binding)
                element.focus();

            },
            //指令所在模版被重新解析时
            update(element, binding){
                // console.log('update');
                element.value = binding.value;
            }
            
        });
        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })
        // 给Vue原型上添加一个方法 （VM VC都能用）
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}
