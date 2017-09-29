:::config
    @module 基础组件
    @submodule 按钮2
    @class button2
:::



<script>

  import mtButton from '../../../button.vue'; 
 
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


## Button22222 按钮
常用的操作按钮。

### 引入

```javascript
import { Button } from 'Swan-ui';

Vue.component(Button.name, Button);
```

### 主按钮（p0）

主按钮：一个页面中只能出现一个主按钮，表示当前最主要的用户转化点。

```html
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
```

### 主按钮（p0）

主按钮：一个页面中只能出现一个主按钮，表示当前最主要的用户转化点。

:::demo
```html
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
```
:::

### 主按钮（p0）

主按钮：一个页面中只能出现一个主按钮，表示当前最主要的用户转化点。

```html
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
```
### 主按钮（p0）

主按钮：一个页面中只能出现一个主按钮，表示当前最主要的用户转化点。

```html
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
```
### 主按钮（p0）

主按钮：一个页面中只能出现一个主按钮，表示当前最主要的用户转化点。

```html
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
```
