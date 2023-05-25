# 名词概念

## Kubernetes 组件

1. 节点: 物理机或虚拟机(VMware)
2. 集群
3. Pod: Kubernetes 的原子对象，集群中每一个 Pod 都会获得自己的、 独一无二的 IP 地址，称为“一个 Pod 一个 IP”模型，Pod 可以被视作虚拟机或者物理主机。
   1. Pod 能够与所有其他节点上的 Pod 通信， 且不需要网络地址转译（NAT）
   2. 节点上的代理（比如：系统守护进程、kubelet）可以和节点上的所有 Pod 通信
   3. Pod 内的容器都可以通过 localhost 到达对方端口。
4. Node 组件
5. 容器（Container）
6. kube-apiserver
7. etcd 存储
8. kube-controller-manager:
9. cloud-controller-manager 云控制器管理器
10. kube-scheduler
11. DNS 服务器（插件）: 域名系统
12. kubelet
13. kube-porxy
14. container
15. storage
16. registry
17. Deployment (部署，调度): 可以动态地创建和销毁 Pod
18. Job
19. service
20. Resource 资源 后端
21. ingress (入口) :  Ingress 不是一种服务类型，但它充当集群的入口点，它可以将路由规则整合到一个资源中，因为它可以在同一 IP 地址下公开多个服务。(配置路由规则，分发到不同的 service)
22. Ingress 控制器 : 控制 Ingress 工作的功能
23. Gateway API （网关） : 
24. EndpointSlice API (端点切片)

## pods
使用pod，相当与一个逻辑主机，还记得创建一个vm，在vm上运行几个进程么，其实道理是一样的，pod的存在主要是让几个紧密连接的几个容器之间共享资源，例如ip地址，共享存储等信息。如果直接调度容器的话，那么几个容器可能运行在不同的主机上，这样就增加了系统的复杂性。

## 集群
在集群当中，创建的ip地址等资源，只有在同一个集群中才能访问，每个pod也有独一的ip地址，当有多个pod提供相同的服务的时候，就需要有负载均衡的能力，从而这里就涉及到一个概念就是service，专门用来提供服务的。

#### 优点  

使用集群，create cluster是为了掩盖底层的无能，在各种环境中，底层的硬件各不相同，有的是各种低廉的服务器，有的各种云环境，有的是各种vm，有的各种host machine，要想屏蔽底层的细节，增强可靠性和稳定性，从而需要创建集群。  

创建集群的好处就是，统一对外提供接口，无须进行各种复杂的调用；提供更好的可靠性，服务器宕机那么频繁，物理磁盘那么容易损坏，无须担心，集群统一进行调配；提供更好的性能，组合集群中各个机器的计算存储网络资源，提供更好的TPS和PS；提供横向扩容的能力，在进行横向扩容的时候，性能基本上能呈线性增长。

## service （服务）
服务主要是用来提供外界访问的接口，服务可以关联一组pod，这些pod的ip地址各不相同，而service相当于一个复杂均衡的vip，用来指向各个pod，当pod的ip地址发生改变之后，也能做到自动进行负载均衡，在关联的时候，service和pod之间主要通过label来关联，也就是标签（-l表示为label）。

### pods 已经有唯一ip了，为什么还需要一层 service

**tips**：每个 Pod 获取其自己的 IP 地址。 对于集群中给定的 Deployment，这一刻运行的这组 Pod 可能不同于下一刻运行应用程序的那组 Pod。

**问题**：如果一组 Pod（称为“后端”）为集群内的其他 Pod（称为“前端”）提供功能， 那么前端如何找出并跟踪要连接的 IP 地址，以便前端可以使用提供工作负载的后端部分？

**方案**：通过 service 固定可访问的 ip(虚拟IP)，service 后面的 pod 变化，前端或者调用方就可以不用关心了，程序服务解耦。

Service 的控制器不断扫描与其选择算符匹配的 Pod，然后对 Service 的 EndpointSlices 集合执行所有必要的更新。

## ingress
如果你的工作负载以 HTTP 通信，你可能会选择使用 Ingress 来控制 Web 流量如何到达该工作负载。Ingress 不是一种 Service，但它可用作集群的入口点。 Ingress 能让你将路由规则整合到单个资源，这样你就能在单个侦听器之后暴露工作负载的多个组件，在集群中分别运行这些组件。

# [大规模集群的注意事项](https://kubernetes.io/zh-cn/docs/setup/best-practices/cluster-large/)