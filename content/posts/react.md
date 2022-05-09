---
title: "React"
date: 2022-05-09T11:49:53+08:00
---

# react考点

在hooks中，闭包的概念很重要

在函数执行完毕后，返回函数，或者将函数得以保留下来，即形成闭包

## 缓存

useMemo和useCallback可缓存函数的引用或值，useMemo缓存数据，useCallback缓存函数，两者是Hooks的常见优化策略
useCallback(fn,deps)相当于useMemo(()=>fn,deps),经常用在下面两种场景:

1. 要保持引用相等；对于组件内部用到的 object、array、函数等，
2. 用在了其他 Hook 的依赖数组中，或者作为 props 传递给了下游组件，应该使用 useMemo/useCallback）

## 组件传值

父级组件传递子组件通过props

子组件传递父级组件通过回调事件

兄弟组件传值，期间还需要一个父组件

### 判断用户是否登录

这里一般的做法是在localStorage添加一个token，在axios中的header添加author-token这个属性，并且在react-router中加入

https://www.jianshu.com/p/1a5ba1731474
