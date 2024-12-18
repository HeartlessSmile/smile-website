# 原生渲染

这种方案又被称为`泛Web容器方案`，这种方案使用Web技术来实现应用程序的基本框架和功能，同时放弃了WebView渲染，改为使用原生自带的UI组件渲染引擎，这种方式可以提供给用户更好的体验和更高的性能。代表框架有`React Native`，`Weex`等。

这种方案保持了JavaScript作为开发语言，支持前端丰富的生态。但由于前端和Native的交互需要通过bridge交互，因此在处理大量数据和复杂的动画时，bridge可能会成为性能瓶颈。

## 渲染原理

原生渲染方案基本上完全放弃了浏览器控件渲染，而是由原生UI代替了核心的渲染，仅保持必要的基本控件渲染能力，从而使得渲染过程更为简化。同时也保证了更好的体验和性能。
![泛Web容器方案](/images/hybrid/rn.png)

## React Native

[React Native](https://www.reactnative.cn/)是Facebook开源的一个基于React框架的移动应用开发框架。它允许开发者使用JavaScript和React语言来创建iOS和Android原生应用。React Native基于JavaScript的技术栈，因此开发人员可以使用已经熟悉的技术进行开发。React Native提供了许多跨平台的组件和API，可以让开发人员在开发iOS和Android应用时共用相同的代码。

React Native的渲染原理是将JSX代码解析成原生控件，然后在原生的渲染引擎上进行渲染。在React Native中，JavaScript代码运行在JavaScriptCore中，而原生控件则运行在iOS和Android的渲染引擎中。React Native的框架会负责将JavaScript和原生控件之间的通信。

### 优点

1. 跨平台支持：使用React Native，开发人员可以用相同的代码库创建iOS和Android应用。
2. 更快的开发速度：由于React Native采用了组件化开发的思想，因此可以通过复用组件来提高开发速度。
3. 热重载：React Native支持热重载，可以在不重新编译应用的情况下实时预览应用的更改。
4. 大量社区支持：React Native有一个庞大的社区，可以通过社区贡献的组件和插件来扩展应用的功能。

### 缺点

1. 性能问题：相对于原生开发，React Native的性能可能会受到影响，尤其是在处理大量数据和复杂的动画时。
2. 学习曲线：尽管React Native使用了已经广泛使用的React框架，但是仍需要一定的学习曲线。
3. 部分平台API支持不完整：React Native并不是所有平台的API都支持完整，因此在使用React Native时需要注意平台差异。

## Weex

::: warning
  阿里在2016年12月将Weex捐赠给了Apache，并且Apache在2021年5月宣布停止维护了，此处仅做纪念
:::

[Weex](https://github.com/apache/incubator-weex) 是一个跨平台的移动开发框架，由阿里巴巴的技术团队开发。与 React Native 类似，Weex 也是基于 Vue.js 的组件化开发模式，通过 JavaScript 语言开发应用，并使用 Weex 的渲染引擎将应用渲染成原生组件。Weex 可以将开发者编写的 JavaScript 代码转换成平台特定的原生组件，从而实现跨平台的开发和部署。

与 React Native 不同，Weex 的渲染引擎使用的是基于 Vue.js 的渲染引擎，称为 Weex Core，通过 JavaScript 语言描述页面结构，样式和交互，并通过 Weex SDK 在原生端将其渲染成原生组件。Weex 可以同时支持 iOS 和 Android 平台，并提供了丰富的组件和 API，可以满足各种移动应用的开发需求。

### 优点

- 跨平台支持：使用 Weex 可以快速开发出同时支持 iOS 和 Android 平台的应用，节约开发者的时间和成本。
- 基于 Vue.js 的组件化开发模式：Weex 借鉴了 Vue.js 的组件化开发模式，提供了类似于 Vue.js 的模板语法和组件化编程模式，使得开发者能够更加高效地开发和维护应用。
- 原生渲染效率高：Weex 的渲染引擎使用的是基于 Vue.js 的渲染引擎，可以将 JavaScript 代码转换成原生组件，具有原生应用的高性能和流畅的体验。

### 缺点

- 社区相对较小：相对于 React Native 等框架，Weex 的社区还比较小，因此在使用过程中可能会遇到一些问题，需要自行解决或寻求其他开发者的帮助。
- 学习成本较高：Weex 使用了一些特有的语法和组件，对于初学者来说需要一定的学习成本。
- 插件生态不够丰富：Weex 的插件生态相对较为单薄，相比于 React Native 来说缺少了一些常用的插件和组件。

2017年初，由中国移动、华为、中兴等企业提出了快应用（Quick App）的概念，旨在为移动应用提供一种更快速、更轻量级、更易用的解决方案，以满足用户快速获取信息和使用应用的需求。

快应用的理念是将应用程序从安装和下载中解放出来，通过使用原生应用的技术和优势，以Web应用的形式提供快速、轻量、即时的应用体验。快应用的技术框架基于国内主流的Web技术标准，如HTML5、CSS3、JavaScript等，并且针对移动设备的特点做了优化和扩展。

::: tip
可惜的是，快应用只是国内主流手机厂商基于Android系统的一种方式，并不支持iOS系统。只能注定成为国内手机厂商的自嗨。
:::

## UniApp

UniApp 是一款基于 Vue.js 的开发框架，可以用于快速开发跨平台应用程序。UniApp 支持一次编写，多端发布，可以将同一代码运行在不同的平台，如微信小程序、H5、iOS、Android 等。UniApp 使用了类似于混合应用的渲染技术，在不同的平台上，使用不同的技术栈进行渲染。

UniApp 的渲染原理基于 HBuilderX，其核心是将 Vue 代码编译为各个平台所支持的代码，然后通过各自的运行时进行渲染。比如，在微信小程序平台上，UniApp 会将编译后的代码转化为小程序所支持的 WXML 和 WXSS 代码，然后使用小程序的运行时进行渲染。在 H5 平台上，UniApp 则会将代码转化为标准的 HTML 和 CSS 代码，然后在浏览器中渲染。这样一来，开发者只需要编写一份代码，就可以将应用程序发布到多个平台上，极大地提高了开发效率。

### 优点

1. 跨平台：UniApp可以一套代码同时发布到多个平台（包括iOS、Android、H5等），开发成本低、效率高；
2. 开发简单：使用Vue.js框架开发，语法简单易懂，学习成本较低；
3. 优化性能：在一些常见的性能问题上，UniApp做了很多优化，例如减小包体积、启用页面缓存、小程序分包加载等，可以提高应用的性能表现；
4. 插件丰富：UniApp内置了一些常用的插件，如路由、请求、存储等，也支持使用社区开源的插件，可以方便地扩展应用功能。

### 缺点

1. 受限制：由于UniApp是跨平台开发，因此无法充分发挥各个平台的优势，受到一些限制；
2. 兼容性：不同平台的兼容性存在一定差异，需要开发者进行额外的处理；
3. 性能问题：在处理一些复杂的业务逻辑或大量数据渲染时，UniApp的性能可能无法满足需求；
4. 学习曲线：尽管UniApp的语法和Vue.js类似，但是对于完全没有开发经验的人来说，学习曲线还是较为陡峭的。

## 总结

原生渲染使用JavaScript进行开发和整体加载，使用原声UI渲染界面。这样虽然保证了用户的性能和体验，但带来一些新的问题

- 框架本身需要处理大量平台相关的逻辑
- 平台系统版本变更后，需要及时抹平不同平台的渲染差异

这样需要框架开发者及时跟进平台的变化，始终Follow Native。给框架开发者带来一些负担。

此处框架推荐

- 不考虑一套代码覆盖小程序等其他平台场景，选择React Native
- 一套代码多端覆盖、主用技术栈为Vue，选择UniApp
