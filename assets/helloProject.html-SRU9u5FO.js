import{_ as n,c as a,a as e,o as t}from"./app-DzEwyuga.js";const o={};function p(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="hello-world-项目调用" tabindex="-1"><a class="header-anchor" href="#hello-world-项目调用"><span>Hello World! (项目调用)</span></a></h1><p>之前的文章中我们提到过，<code>Node.js</code> 和 <code>Rust</code> 都与包管理器一起安装。</p><ul><li><code>Node.js</code> 的包管理器称为<code>npm</code>，其包称为<code>Node.js</code> 模块，其官方网站是<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npmjs.com</a>。</li><li><code>Rust</code> 的包管理器称为<code>Cargo</code>，其包称为<code>crates</code>，其官方网站是<a href="https://crates.io/" target="_blank" rel="noopener noreferrer">crates.io</a>。</li></ul><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h2><p>当我们需要使用 <code>Node.js</code>初始化项目时，我们会输入命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">mkdir</span> hello-js</span>
<span class="line"><span class="token builtin class-name">cd</span> ./hello-js</span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目目录如下</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt" data-title="txt"><pre><code><span class="line">└── package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>package.json</code>是<code>Node.js</code>的配置文件——包含项目元数据的文件，如名称、版本、依赖项等。</p><p>同样的，当我们使用 <code>Rust</code> 初始化时，需要输入命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">mkdir</span> hello-rust</span>
<span class="line"><span class="token builtin class-name">cd</span> ./hello-rust</span>
<span class="line"><span class="token function">cargo</span> init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令也可以等价为</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cargo</span> new hello-rust</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上述命令会在当前文件夹内创建<code>hello-rust</code>文件夹，项目目录如下</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt" data-title="txt"><pre><code><span class="line">├── .gitignore</span>
<span class="line">├── Cargo.toml</span>
<span class="line">└── src</span>
<span class="line">    └── main.rs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>Cargo.toml</code> 是 <code>Rust</code> 的配置文件——包含项目元数据的文件，如名称、版本、依赖项等。</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p>我们首先看下 <code>Node.js</code>的配置文件 <code>package.json</code> 没有依赖关系的内容</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello-world&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;contributors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This is a demo.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;bugs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再对比 <code>Rust</code> 的清单文件 <code>Cargo.toml</code> 文件</p><div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml" data-title="toml"><pre><code><span class="line"><span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;hello-world&quot;</span></span>
<span class="line"><span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.0&quot;</span></span>
<span class="line"><span class="token key property">authors</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">publish</span> <span class="token punctuation">=</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token key property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;This is a demo.&quot;</span></span>
<span class="line"><span class="token key property">license</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token key property">keywords</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">homepage</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token key property">repository</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token key property">documentation</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来两者的配置文件除了文件格式不一致外，配置内容都非常相似</p><ul><li>两者都必须提供项目名<code>name</code></li><li>两者都必须提供版本号<code>version</code></li><li><code>author</code>作者字段都是可选项 <ul><li><code>Node.js</code>中，有协作者字段<code>contributors</code></li><li><code>Rust</code>中，协作者被归为<code>author</code>字段中，该字段为数组</li></ul></li><li>如果不想将项目发布到公共存储库时 <ul><li><code>Node.js</code>中，设置 <code>&quot;private&quot;: true</code></li><li><code>Rust</code>中，设置 <code>publish = false</code></li></ul></li><li>两者都可以使用 <code>description</code> 来描述项目</li><li>两者都可以使用 <code>license</code> 来表示开源许可证</li><li>两者都可以使用 <code>keywords</code> 来作为关键词，以便在官方存储库中更容易被搜索到</li><li>两者都可以使用 <code>homepage</code> 来添加项目的主页</li><li>两者都可以使用 <code>repository</code> 来指定项目的代码仓库链接（两者的格式有所不同）</li><li><code>Node.js</code>可以添加报告链接 <code>bugs</code>, <code>Rust</code>不支持</li><li><code>Rust</code>可以添加文档链接 <code>documentation</code>, <code>Node.js</code>不支持</li></ul><h2 id="构建" tabindex="-1"><a class="header-anchor" href="#构建"><span>构建</span></a></h2><p>在 <code>Node.js</code> 中，我们可以在 <code>package.json</code> 中添加如下内容</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...your previous code</span></span>
<span class="line">  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/index.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node src/index.js&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这代表着这个项目的主入口是 <code>src/index.js</code>, 当别人引用你的项目时，会默认加载这个文件。而 <code>scripts.start</code> 则代表了一条可以运行的命令，执行命令 <code>npm run start</code> 则等价于 <code>node src/index.js</code></p><p>在 <code>Rust</code> 中，会默认主入口是 <code>src/main.rs</code> 文件，而当我们使用<code>cargo new</code> 创建项目的时候，就会帮我们创建一个文件，并写好内容</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码，等价于 <code>Node.js</code> 中的</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们执行 <code>cargo run</code> 时，就会寻找主入口文件，也就是默认的 <code>src/main.rs</code></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">cargo</span> run</span>
<span class="line">   Compiling hello-rust v0.1.0 <span class="token punctuation">(</span>/*/hello-rust<span class="token punctuation">)</span></span>
<span class="line">    Finished dev <span class="token punctuation">[</span>unoptimized + debuginfo<span class="token punctuation">]</span> target<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token number">0</span>.67s</span>
<span class="line">     Running <span class="token variable"><span class="token variable">\`</span>target/debug/hello-rust<span class="token variable">\`</span></span></span>
<span class="line">Hello, world<span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到控制台直接输出了 <code>Hello, world!</code>，也就是说跟我们直接调用相比，该命令直接帮我们完成了两步操作</p><ol><li>编译文件</li><li>运行编译好的文件</li></ol><p>那么问题来了，编译好的文件去哪了？其实我们可以发现，运行完 <code>cargo run</code> 命令后，项目目录中多了一个 <code>target</code> 文件夹，刚才控制台的日志也很明白告诉我们 <code>Running &#39;target/debug/hello-rust&#39;</code>, 也就是说，编译后的文件路径是 <code>target/debug/hello-rust</code>，那究竟是不是呢？我们来执行看看</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ target/debug/hello-rust </span>
<span class="line">Hello, world<span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显，编译好的文件就是 <code>target/debug/hello-rust</code></p><p>我们还发现，项目根目录中还多出了一个 <code>Cargo.lock</code> 文件，<code>Cargo.lock</code> 文件的作用类似于 <code>package-lock.json</code>，确保任何人在项目中使用依赖项的时候可以保持相同的版本。有关依赖项的问题，我们后续的篇章里面研究。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>本小节通过对比 <code>Node.js</code> 和 <code>Rust</code> 创建项目和运行的方式，研究了在 <code>Rust</code> 中如何创建项目并启动。</p>`,41)]))}const c=n(o,[["render",p],["__file","helloProject.html.vue"]]),d=JSON.parse('{"path":"/rust/guide/helloProject.html","title":"Hello World! (项目调用)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"构建","slug":"构建","link":"#构建","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1733483676000,"contributors":[{"name":"gang.peng","username":"gang.peng","email":"gang.peng@szyh.com","commits":1,"url":"https://github.com/gang.peng"}]},"filePathRelative":"rust/guide/helloProject.md"}');export{c as comp,d as data};