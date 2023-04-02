---
title: "React渲染"
date: 2023-04-02T19:29:36+08:00
---

## React渲染

react 渲染流程分为 render 和 commit 阶段。

render 阶段执行 vdom 转 fiber 的 reconcile，commit 阶段更新 dom，执行 effect 等副作用逻辑。

commit 阶段分为 before mutation、mutation、layout 3 个小阶段。

hook 的数据就是保存在 fiber.memoizedState 的链表上的，每个 hook 对应一个链表节点。

hook 的执行分为 mountXxx 和 updateXxx 两个阶段，第一次会走 mountXxx，创建 hook 链表，之后执行 updateXxx。

我们看了 useRef、useMemo、useCallback 的实现原理，这几个 hook 都比较简单。其中后两个 hook 是作为 props 时为了减少不必要渲染的时候用的。

useState 和 useEffect 就和渲染流程有关了：

useEffect 在 render 阶段会把 effect 放到 fiber.updateQueue 的环形链表上，然后在 commit 阶段遍历所有 fiber 的 updateQueue，取出 effect 异步执行。

useLayoutEffect 和 useEffect 差不多，只是 effect 链表是在 layout 阶段同步执行的。

useState 的 mountState 阶段返回的 setXxx 是绑定了几个参数的 dispatch 函数。执行它会创建 hook.queue 记录更新，然后标记从当前到根节点的 fiber 的 lanes 和 childLanes 需要更新，然后调度下次渲染。

下次渲染执行到 updateState 阶段会取出 hook.queue，根据优先级确定最终的 state，最后返回来渲染。

这样就实现了 state 的更新和重新渲染。

