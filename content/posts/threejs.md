---
title: "Threejs"
date: 2023-05-08T21:11:30+08:00
---

## threejs

### 学习 Three.js 的基础知识

在开始创建 3D 场景之前，您需要了解 Three.js 的基本组件、场景、相机、渲染器、几何体和材质等等。

场景(Scene)

场景是 Three.js 中所有 3D 对象的容器。它定义了 3D 空间中的位置、方向和光照。

相机(Camera)

相机定义了 3D 场景中的视角。通过设置相机的位置和角度，可以控制场景中的视觉效果。

渲染器(Renderer)

渲染器将场景和相机中的 3D 对象渲染到屏幕上。Three.js 提供了多个渲染器，包括 CanvasRenderer、WebGLRenderer 和 SVGRenderer。

几何体(Geometry)

几何体定义了 3D 对象的形状。Three.js 提供了多个几何体，如立方体、球体、圆柱体等等，也可以自定义几何体。

材质(Material)

材质定义了 3D 对象的外观。材质可以包括纹理、颜色、反射和透明度等等。

网格(Mesh)

网格是几何体和材质的组合体。它将几何体的形状和材质的外观结合在一起，并添加到场景中进行渲染。

### 创建 3D 场景

使用 Three.js 创建 3D 场景需要了解如何添加和组合 3D 对象、调整相机位置和视角、应用材质和纹理、创建灯光和阴影等等。

#### 如何添加和组合 3D 对象

在 Three.js 中，可以通过以下步骤来添加和组合 3D 对象：

创建几何体

首先，需要创建一个几何体来定义 3D 对象的形状。Three.js 提供了多个几何体，如立方体、球体、圆柱体等等，也可以自定义几何体。

例如，以下代码创建一个立方体几何体：

```js
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
```
创建材质

接下来，需要创建一个材质来定义 3D 对象的外观。材质可以包括纹理、颜色、反射和透明度等等。

例如，以下代码创建一个基本材质：

```js
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
```

创建网格对象

接下来，需要将几何体和材质组合起来，创建一个网格对象。

例如，以下代码创建一个红色立方体：

```js
var cube = new THREE.Mesh( geometry, material );
```

将网格对象添加到场景中

最后，需要将网格对象添加到场景中，以便进行渲染。

例如，以下代码将立方体添加到场景中：

```js
scene.add( cube );
```

#### 调整相机位置和视角

在 Three.js 中，可以通过调整相机的位置和视角来控制场景中的视觉效果。以下是一些常用的方法：

设置相机位置
可以使用相机的 position 属性来设置相机在 3D 空间中的位置。例如，以下代码将相机的位置设置为 x=0、y=0、z=5：

```js
camera.position.set( 0, 0, 5 );
```

设置相机视角
可以使用相机的 lookAt() 方法来设置相机的视角。该方法需要一个 Three.js 向量作为参数，表示相机所要对准的位置。
例如，以下代码将相机对准场景中心点：

```js
camera.lookAt( 0, 0, 0 );
```

控制相机旋转

可以使用相机的 rotation 属性来控制相机的旋转角度。例如，以下代码将相机绕 y 轴旋转 45 度：

```js
camera.rotation.y = Math.PI / 4;
```

控制相机缩放
可以使用相机的 zoom 属性来控制相机的缩放比例。例如，以下代码将相机的缩放比例设置为 2：

```js
camera.zoom = 2;
camera.updateProjectionMatrix(); // 需要调用该方法来更新相机投影矩阵

```

#### 应用材质和纹理

在 Three.js 中，可以通过应用材质和纹理来改变 3D 对象的外观。以下是一些常用的方法：

应用材质

可以通过将材质对象赋给网格对象的 material 属性来应用材质。例如，以下代码将一个红色材质应用于立方体：

```js
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var cube = new THREE.Mesh( geometry, material );
```

Three.js 中还有其他类型的材质可用，如 MeshPhongMaterial、MeshStandardMaterial 等，可以根据需要选择。

应用纹理

可以通过将纹理对象赋给材质对象的 map 属性来应用纹理。例如，以下代码将一个纹理贴图应用于立方体：

```js
var texture = new THREE.TextureLoader().load( 'texture.png' );
var material = new THREE.MeshBasicMaterial( { map: texture } );
var cube = new THREE.Mesh( geometry, material );

```
其中，TextureLoader 是 Three.js 内置的纹理加载器，可以加载常见的图片格式。

在使用纹理时，还可以设置纹理的重复和偏移。例如，以下代码将一个纹理重复 5 次并向右偏移 0.5：

```js
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 5, 1 );
texture.offset.set( 0.5, 0 );
```

通过以上方法，可以应用不同的材质和纹理，从而改变 3D 对象的外观。

#### 创建灯光和阴影等等

在 Three.js 中，可以通过创建灯光和开启阴影等方式来增强 3D 场景的逼真感。以下是一些常用的方法：

创建灯光
可以使用 Three.js 中提供的灯光类型，如 AmbientLight、PointLight、SpotLight、DirectionalLight 等来创建不同类型的灯光。例如，以下代码创建了一个点光源：

```js
var light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 10 );
scene.add( light );

```

其中，0xffffff 表示灯光的颜色，1 表示灯光的强度，100 表示灯光的最大距离。

开启阴影
可以通过设置对象的 castShadow 和 receiveShadow 属性来开启阴影。例如，以下代码创建了一个平面和一个立方体，并开启了阴影：

```js
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;

var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.castShadow = true;
scene.add( plane, cube );
```

其中，plane.receiveShadow 表示平面接收阴影，cube.castShadow 表示立方体产生阴影。

为了使阴影能够正确渲染，还需要设置灯光的 castShadow、shadow.mapSize、shadow.bias 和 shadow.camera 属性。例如，以下代码设置了点光源的阴影参数：

```js
light.castShadow = true;
light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.bias = -0.001;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 100;
```

通过以上方法，可以创建不同类型的灯光，并开启阴影等效果，从而增强 3D 场景的逼真感。

### 结合以上知识给出一个具体的案例

下面是一个使用 Three.js 创建带有灯光和阴影的 3D 场景的案例：

```js
// 创建场景、相机和渲染器
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建灯光
var light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 10 );
light.castShadow = true;
light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.bias = -0.001;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 100;
scene.add( light );

// 创建物体
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
var cube = new THREE.Mesh( geometry, material );
cube.position.set( 0, 0, 1 );
cube.castShadow = true;
scene.add( cube );

var planeGeometry = new THREE.PlaneGeometry( 20, 20 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0xaaaaaa } );
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.position.set( 0, -2, 0 );
plane.receiveShadow = true;
scene.add( plane );

// 调整相机位置和视角
camera.position.z = 5;

// 渲染场景
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();

```

### 学习 Three.js 高级特性

一旦您熟悉了 Three.js 的基础知识，可以开始探索 Three.js 的高级特性，如动画、物理模拟、后期处理、粒子效果等等。


#### 物理模拟

Three.js 支持使用物理引擎来实现物理模拟效果。其中， Ammo.js 和 Cannon.js 是两个比较流行的物理引擎库。

下面是一个使用 Cannon.js 实现物理模拟的示例：

```js
// 创建场景、相机和渲染器
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建平面
var groundMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
var groundGeometry = new THREE.PlaneGeometry( 100, 100 );
var ground = new THREE.Mesh( groundGeometry, groundMaterial );
ground.rotation.x = -Math.PI / 2;
ground.position.y = -2;
ground.receiveShadow = true;
scene.add( ground );

// 创建球体
var ballMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
var ballGeometry = new THREE.SphereGeometry( 1, 32, 32 );
var ball = new THREE.Mesh( ballGeometry, ballMaterial );
ball.position.y = 5;
ball.castShadow = true;
ball.receiveShadow = true;
scene.add( ball );

// 创建物理引擎世界
var world = new CANNON.World();
world.gravity.set( 0, -9.82, 0 );

// 创建地面的刚体
var groundShape = new CANNON.Plane();
var groundBody = new CANNON.Body( { mass: 0 } );
groundBody.addShape( groundShape );
world.addBody( groundBody );

// 创建球体的刚体
var ballShape = new CANNON.Sphere( 1 );
var ballBody = new CANNON.Body( { mass: 1 } );
ballBody.addShape( ballShape );
ballBody.position.set( 0, 5, 0 );
world.addBody( ballBody );

// 开始模拟物理效果
function animate() {
    requestAnimationFrame( animate );

    world.step( 1 / 60 );

    ball.position.copy( ballBody.position );
    ball.quaternion.copy( ballBody.quaternion );

    renderer.render( scene, camera );
}
animate();

```

在这个示例中，我们创建了一个平面和一个球体，并使用 Cannon.js 创建了物理引擎世界和物体的刚体。我们将球体放在空中，并让其受到重力作用而下落到地面上。通过不断地调用 world.step() 方法来模拟物理效果，并将物体的位置和旋转状态与刚体同步。

你可以尝试调整物体的质量、形状、摩擦力等参数，来实现不同的物理效果。注意，在使用物理引擎时需要考虑性能问题，尽可能地优化计算性能。

#### 后期处理

在 Three.js 中，我们可以通过后期处理（Post-Processing）技术来对渲染场景进行额外的处理，以实现各种特效，比如模糊、景深、色调映射等等。

Three.js 内置了一些后期处理的库，比如 EffectComposer 和各种后期处理器（Post-Processing Pass），可以直接使用。下面是一个简单的使用 EffectComposer 实现景深效果的示例：

```js
// 创建场景、相机和渲染器
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建物体
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
var cube = new THREE.Mesh( geometry, material );
cube.position.z = -5;
scene.add( cube );

// 创建后期处理器
var composer = new THREE.EffectComposer( renderer );
var renderPass = new THREE.RenderPass( scene, camera );
composer.addPass( renderPass );
var depthPass = new THREE.DepthPass();
composer.addPass( depthPass );
var bokehPass = new THREE.BokehPass( scene, camera, {
    focus: 1.0,
    aperture: 0.01,
    maxblur: 0.01,
    width: window.innerWidth,
    height: window.innerHeight
} );
composer.addPass( bokehPass );

// 渲染场景
function render() {
    requestAnimationFrame( render );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    composer.render();
}
render();

```

在这个示例中，我们创建了一个立方体，并使用 EffectComposer 创建了后期处理器。我们添加了三个后期处理 Pass，分别是 RenderPass、DepthPass 和 BokehPass。RenderPass 将场景和相机传递给下一个 Pass，DepthPass 生成场景深度图，BokehPass 利用场景深度图和相机参数生成景深效果。最终，我们使用 composer.render() 方法渲染场景。

你可以尝试使用其他后期处理 Pass 和参数，实现不同的后期处理效果。注意，在使用后期处理时需要考虑性能问题，尽可能地优化计算性能。

#### 粒子效果

在 Three.js 中，我们可以使用粒子系统（Particle System）来实现各种有趣的粒子效果，比如烟雾、火花、星空等等。下面是一个简单的使用粒子系统实现星空效果的示例：

```js
// 创建场景、相机和渲染器
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建粒子系统
var particleCount = 10000;
var particles = new THREE.Geometry();
for ( var i = 0; i < particleCount; i ++ ) {
    var x = Math.random() * 2000 - 1000;
    var y = Math.random() * 2000 - 1000;
    var z = Math.random() * 2000 - 1000;
    var particle = new THREE.Vector3( x, y, z );
    particles.vertices.push( particle );
}
var particleMaterial = new THREE.PointsMaterial( {
    color: 0xffffff,
    size: 2,
    sizeAttenuation: false
} );
var particleSystem = new THREE.Points( particles, particleMaterial );
scene.add( particleSystem );

// 渲染场景
function render() {
    requestAnimationFrame( render );
    particleSystem.rotation.y += 0.001;
    renderer.render( scene, camera );
}
render();

```

在这个示例中，我们创建了一个粒子系统，包含了 10000 个粒子，每个粒子的位置都是随机生成的。我们使用 THREE.PointsMaterial 创建了粒子材质，并将其应用到 THREE.Points 对象上。最后，我们在渲染循环中更新粒子系统的旋转角度，渲染场景。

你可以通过调整粒子数量、粒子大小、材质颜色等参数，实现不同的粒子效果。在 Three.js 中，还有一些高级的粒子系统库，比如 THREE.GPUParticleSystem，可以提供更高性能的粒子渲染。