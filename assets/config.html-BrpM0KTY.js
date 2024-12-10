import{_ as n,c as a,a as p,o as e}from"./app-DzEwyuga.js";const t={};function l(i,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="常用配置" tabindex="-1"><a class="header-anchor" href="#常用配置"><span>常用配置</span></a></h1><h2 id="多产物配置" tabindex="-1"><a class="header-anchor" href="#多产物配置"><span>多产物配置</span></a></h2><p>我们可以将 output 改造成一个数组，对外暴露出不同格式的产物供他人使用，不仅包括 <code>ESM</code>，也需要包括诸如<code>CommonJS</code>、<code>UMD</code>等格式，保证良好的兼容性</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;dist/bundle-iife.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;iife&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;dist/bundle-esm.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;dist/bundle-cjs.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;dist/bundle-umd.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bundle&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多入口配置" tabindex="-1"><a class="header-anchor" href="#多入口配置"><span>多入口配置</span></a></h2><p>除了多产物配置，Rollup 中也支持多入口配置</p><p><strong>main.js</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// src/main.js</span></span>
<span class="line"><span class="token keyword">import</span> util <span class="token keyword">from</span> <span class="token string">&quot;./util.js&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> r <span class="token operator">=</span> util<span class="token punctuation">.</span><span class="token function">getRandomNum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;🚀 ~ r:&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> cloneObj <span class="token operator">=</span> util<span class="token punctuation">.</span><span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line">cloneObj<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;🚀 ~ obj:&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;🚀 ~ cloneObj:&quot;</span><span class="token punctuation">,</span> cloneObj<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>rollup.config.js</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常情况下多产物和多入口两者会被结合起来使用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，上面这样的写的话，生成的产物会把两个入口一起进行构建，我们可能的想法是一个入口一种构建方式：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup&#39;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;rollup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>RollupOptions<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> buildIndexOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;dist/umd/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bundle&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;rollup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>RollupOptions<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> buildMainOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;dist/esm/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>buildIndexOptions<span class="token punctuation">,</span> buildMainOptions<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态导入与默认代码分割" tabindex="-1"><a class="header-anchor" href="#动态导入与默认代码分割"><span>动态导入与默认代码分割</span></a></h2><p>使用路由来说明懒加载是大家喜闻乐见的方式，估计大多数同学对于懒加载都只是停留在路由的懒加载，其实，任何时候，我们都可以使用import动态懒加载的方式。重新编辑一下main.js入口：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// src/main.js</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token comment">// 如果不清楚import动态导入返回的是什么，可以先打印一下下面结果</span></span>
<span class="line">  <span class="token comment">// import(&quot;./util.js&quot;).then(chunk =&gt; console.log(&quot;🚀 ~ chunk:&quot;, chunk));</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./util.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> foo <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token keyword">const</span> r <span class="token operator">=</span> foo<span class="token punctuation">.</span><span class="token function">getRandomNum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;🚀 ~ r:&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新运行可以看到dist目录形成了下面的结构:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">.</span></span>
<span class="line">├── dist</span>
<span class="line">│   ├── esm</span>
<span class="line">│   │   ├── main.js</span>
<span class="line">│   │   └── util-371e3ef9.js</span>
<span class="line">│   └── umd</span>
<span class="line">│       └── index.js</span>
<span class="line">└── <span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rollup 将使用动态导入创建一个仅在需要时加载的单独块。所以你可以看到这里多了一个<code>util-371e3ef9.js</code>的文件</p><blockquote><p>**注意：**为了让 Rollup 知道在哪里放置第二个块，我们不使用 <code>--file</code> 选项，而是使用 <code>--dir</code> 选项设置一个输出文件夹</p></blockquote><p>其中，<code>util-371e3ef9.js</code>是自动生成的<code>chunk-[hash].js</code>的名字，<code>[hash]</code> 是基于内容的哈希字符串。你可以通过指定 <a href="https://cn.rollupjs.org/configuration-options/#output-chunkfilenames" target="_blank" rel="noopener noreferrer"><code>output.chunkFileNames</code></a> (chunk文件)和 <a href="https://cn.rollupjs.org/configuration-options/#output-entryfilenames" target="_blank" rel="noopener noreferrer"><code>output.entryFileNames</code></a> (打包入口文件)选项来提供自己的命名模式。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;rollup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>RollupOptions<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> buildMainOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;dist/esm/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">chunkFileNames</span><span class="token operator">:</span> <span class="token string">&#39;chunk-[name]-[hash].js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而且，很智能的是，如果这个时候，我定义了又多个入口点都调用了<code>util.js</code>文件，会自动的引入分割出来的文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;rollup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>RollupOptions<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> buildMainOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/main2.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;dist/esm/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">chunkFileNames</span><span class="token operator">:</span> <span class="token string">&#39;chunk-[name]-[hash].js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在打包后的main2.js中，可以看到这样的引用：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> util <span class="token keyword">from</span> <span class="token string">&#39;./chunk-util-371e3ef9.js&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,27)]))}const c=n(t,[["render",l],["__file","config.html.vue"]]),r=JSON.parse('{"path":"/advanced/rollup/config.html","title":"常用配置","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"多产物配置","slug":"多产物配置","link":"#多产物配置","children":[]},{"level":2,"title":"多入口配置","slug":"多入口配置","link":"#多入口配置","children":[]},{"level":2,"title":"动态导入与默认代码分割","slug":"动态导入与默认代码分割","link":"#动态导入与默认代码分割","children":[]}],"git":{"updatedTime":1733483676000,"contributors":[{"name":"gang.peng","username":"gang.peng","email":"gang.peng@szyh.com","commits":1,"url":"https://github.com/gang.peng"}]},"filePathRelative":"advanced/rollup/config.md"}');export{c as comp,r as data};
