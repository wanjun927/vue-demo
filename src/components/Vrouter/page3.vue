<template>
    <div>
        <h1>page3</h1>
        <p>{{$route.params}}</p>
        <p>{{$route.params.id}}</p>
        <h1>路由组件传参</h1>
        <p>id:{{id}}</p>
    </div>
</template>

<script>
export default {
  name: 'page3',
  props: ['id']
}
</script>
