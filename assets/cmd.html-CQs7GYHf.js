import{_ as e,c as a,a as n,o as t}from"./app-DzEwyuga.js";const l={};function i(p,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="命令行调用" tabindex="-1"><a class="header-anchor" href="#命令行调用"><span>命令行调用</span></a></h1><p><code>esbuild</code> 和其他的构建工具一样，提供了两种调用方式 <code>命令行调用</code> 和 <code>代码调用</code></p><h2 id="安装-esbuild" tabindex="-1"><a class="header-anchor" href="#安装-esbuild"><span>安装 esbuild</span></a></h2><p>首先，下载并本地安装 <code>esbuild</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm install esbuild</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看 <code>esbuild</code> 版本</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./node_modules/.bin/esbuild <span class="token parameter variable">--version</span></span>
<span class="line"><span class="token comment"># 或者</span></span>
<span class="line">npx esbuild <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建代码" tabindex="-1"><a class="header-anchor" href="#构建代码"><span>构建代码</span></a></h2><p>我们使用简单的案例，来学习命令行的调用，首先，在空白项目中安装 <code>react</code> 和 <code>react-dom</code>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm install react react-dom</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来，创建名为 <code>app.jsx</code> 的文件并包含如下代码：</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Server <span class="token keyword">from</span> <span class="token string">&#39;react-dom/server&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token function-variable function">Greet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, world!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Server<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Greet</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，运行 <code>esbuild</code> 打包此文件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npx esbuild app.jsx --bundle --outfile=out.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>这条命令的作用是将位于 app.jsx 的入口文件打包成一个输出文件 out.js</p></blockquote><p>打开构建生成的 <code>out.js</code> 文件，可以看到，包括 <code>react</code> 的相关内容，也都会打包到生成的文件中，甚至我们可以直接运行这个文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">node out.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>会正确执行代码，并输出</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;h1&gt;Hello, world!&lt;/h1&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当然，我们也可以将生成的代码进行压缩，利用 <code>--minify</code> 属性</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npx esbuild app.jsx --bundle --outfile=out.js --minify</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>现在输出的就是压缩后的代码了</p>`,22)]))}const c=e(l,[["render",i],["__file","cmd.html.vue"]]),o=JSON.parse('{"path":"/advanced/esbuild/cmd.html","title":"命令行调用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装 esbuild","slug":"安装-esbuild","link":"#安装-esbuild","children":[]},{"level":2,"title":"构建代码","slug":"构建代码","link":"#构建代码","children":[]}],"git":{"updatedTime":1733483676000,"contributors":[{"name":"gang.peng","username":"gang.peng","email":"gang.peng@szyh.com","commits":1,"url":"https://github.com/gang.peng"}]},"filePathRelative":"advanced/esbuild/cmd.md"}');export{c as comp,o as data};