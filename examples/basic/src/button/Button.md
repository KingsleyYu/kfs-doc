:::config
    @module 基础组件
    @submodule 按钮2
    @class button2
:::



<script>

  import mtButton from './Button.vue'; 
 
  export default {
    data() {
      return {
      }
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    },
    mounted() {
        
    },
    components:{
        mtButton
    }
  }
</script>


## Button2 按钮
常用的操作按钮。

### 引入

```javascript
import { Button } from 'Swan-ui';

Vue.component(Button.name, Button);
```

### 主按钮（p0）

这个下方的demo-block 不能被识别。errormsg:[Vue warn]: Unknown custom element: <demo-block> - did you register the component correctly? For recursive components, make sure to provide the "name" option.

:::demo
```html
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
```
:::

