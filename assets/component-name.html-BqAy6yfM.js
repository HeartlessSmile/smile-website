import{_ as s,c as a,a as e,o as p}from"./app-DzEwyuga.js";const t={};function o(l,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="组件命名" tabindex="-1"><a class="header-anchor" href="#组件命名"><span>组件命名</span></a></h1><h2 id="组件拓展名" tabindex="-1"><a class="header-anchor" href="#组件拓展名"><span>组件拓展名</span></a></h2><p>如果使用 Vue，则文件扩展名为 <code>.vue</code>；如果使用 JavaScript，则文件扩展名为 <code>.js</code>；如果使用 JSX，则文件扩展名为 <code>.jsx</code>；如果使用 <code>TypeScript</code>，则文件扩展名为 <code>.tx</code>，同一目录下不得拥有同名的不同拓展名文件。在使用模块导入时，倾向于不添加后缀。如果存在同名但不同后缀的文件，构建工具将无法决定哪一个是需要引入的模块。</p><h2 id="组件文件名" tabindex="-1"><a class="header-anchor" href="#组件文件名"><span>组件文件名</span></a></h2><p>组件名为多个单词</p><p>组件名应该始终是多个单词的，根组件 <code>App</code> 以及 <code>&lt;transition&gt;</code>、<code>&lt;component&gt;</code> 之类的 Vue 内置组件除外。</p><blockquote><p>这样做可以避免跟现有的以及未来的 HTML 元素<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name" target="_blank" rel="noopener noreferrer">相冲突</a>，因为所有的 HTML 元素名称都是单个单词的。</p></blockquote><h2 id="单文件组件" tabindex="-1"><a class="header-anchor" href="#单文件组件"><span>单文件组件</span></a></h2><blockquote><p>我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。</p></blockquote><p>单文件组件的文件名应该始终是<code>kebab-case</code></p><p>业务中使用是<code>PascalCase</code></p><p>组件的实例用<code>camelCase</code></p><p><strong>没有内容的组件应该是自闭合的</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">components<span class="token operator">/</span></span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> my<span class="token operator">-</span>component<span class="token punctuation">.</span>vue</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./components/my-component.vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> myComponent <span class="token operator">=</span> <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line">// 业务中使用 </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>这是一个组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyComponent</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件名应该倾向于完整单词而不是缩写，并且对于有约定俗称的单词，不得额外命名</strong></p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token comment">&lt;!-- bad --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyWX</span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token comment">&lt;!-- good --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyWeChat</span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础组件" tabindex="-1"><a class="header-anchor" href="#基础组件"><span>基础组件</span></a></h2><p><strong>应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的<code>base</code>前缀开头</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">components<span class="token operator">/</span></span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> base<span class="token operator">-</span>button<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> base<span class="token operator">-</span>table<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> base<span class="token operator">-</span>icon<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> base<span class="token operator">-</span>xxx<span class="token punctuation">.</span>js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做的几个好处：</p><ul><li><p>当你在编辑器中以字母顺序排序时，你的应用的基础组件会全部列在一起，这样更容易识别。</p></li><li><p>因为组件名应该始终是多个单词，所以这样做可以避免你在包裹简单组件时随意选择前缀 (比如 <code>MyButton</code>、<code>VueButton</code>)。</p></li><li><p>因为这些组件会被频繁使用，所以你可能想把它们放到全局而不是在各处分别导入它们。使用相同的前缀可以让 webpack 这样工作：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> requireComponent <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&quot;./src&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">base-[a-z]\\w+\\.(vue|js)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span></span>
<span class="line">requireComponent<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fileName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> baseComponentConfig <span class="token operator">=</span> <span class="token function">requireComponent</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span></span>
<span class="line">  baseComponentConfig <span class="token operator">=</span> baseComponentConfig<span class="token punctuation">.</span>default <span class="token operator">||</span> baseComponentConfig</span>
<span class="line">  <span class="token keyword">var</span> baseComponentName <span class="token operator">=</span> baseComponentConfig<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token punctuation">(</span></span>
<span class="line">    fileName</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.+\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line">  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>baseComponentName<span class="token punctuation">,</span> baseComponentConfig<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="单例组件名" tabindex="-1"><a class="header-anchor" href="#单例组件名"><span>单例组件名</span></a></h2><p><strong>只应该拥有单个活跃实例的组件应该以 <code>the</code> 前缀命名，以示其唯一性</strong></p><p>这不意味着组件只可用于一个单页面，而是<em>每个页面</em>只使用一次。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">components<span class="token operator">/</span></span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> the<span class="token operator">-</span>heading<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> the<span class="token operator">-</span>sidebar<span class="token punctuation">.</span>vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件名中单词顺序" tabindex="-1"><a class="header-anchor" href="#组件名中单词顺序"><span>组件名中单词顺序</span></a></h2><p><strong>组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。</strong></p><p>因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。如下组件主要是用于搜索和设置功能。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">components<span class="token operator">/</span></span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> search<span class="token operator">-</span>button<span class="token operator">-</span>clear<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> search<span class="token operator">-</span>button<span class="token operator">-</span>run<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> search<span class="token operator">-</span>input<span class="token operator">-</span>query<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> search<span class="token operator">-</span>input<span class="token operator">-</span>excludeGlob<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> settings<span class="token operator">-</span>checkbox<span class="token operator">-</span>terms<span class="token punctuation">.</span>vue</span>
<span class="line"><span class="token operator">|</span><span class="token operator">-</span> settings<span class="token operator">-</span>checkbox<span class="token operator">-</span>launchOnStartup<span class="token punctuation">.</span>vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有另一种多级目录的方式，把所有的搜索组件放到“search”目录，把所有的设置组件放到“settings”目录。我们只推荐在非常大型 (如有 100+ 个组件) 的应用下才考虑这么做，因为在多级目录间找来找去，要比在单个 components 目录下滚动查找要花费更多的精力。</p>`,31)]))}const i=s(t,[["render",o],["__file","component-name.html.vue"]]),r=JSON.parse('{"path":"/guide/frame/component-name.html","title":"组件命名","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"组件拓展名","slug":"组件拓展名","link":"#组件拓展名","children":[]},{"level":2,"title":"组件文件名","slug":"组件文件名","link":"#组件文件名","children":[]},{"level":2,"title":"单文件组件","slug":"单文件组件","link":"#单文件组件","children":[]},{"level":2,"title":"基础组件","slug":"基础组件","link":"#基础组件","children":[]},{"level":2,"title":"单例组件名","slug":"单例组件名","link":"#单例组件名","children":[]},{"level":2,"title":"组件名中单词顺序","slug":"组件名中单词顺序","link":"#组件名中单词顺序","children":[]}],"git":{"updatedTime":1733483676000,"contributors":[{"name":"gang.peng","username":"gang.peng","email":"gang.peng@szyh.com","commits":1,"url":"https://github.com/gang.peng"}]},"filePathRelative":"guide/frame/component-name.md"}');export{i as comp,r as data};
