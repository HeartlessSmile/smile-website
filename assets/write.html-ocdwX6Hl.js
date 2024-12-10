import{_ as n,c as a,a as e,o as p}from"./app-DzEwyuga.js";const l={};function i(c,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="书写风格" tabindex="-1"><a class="header-anchor" href="#书写风格"><span>书写风格</span></a></h1><h2 id="代码缩进" tabindex="-1"><a class="header-anchor" href="#代码缩进"><span>代码缩进</span></a></h2><p>统一使用Tab（两个空格）进行代码缩进</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码格式化" tabindex="-1"><a class="header-anchor" href="#代码格式化"><span>代码格式化</span></a></h2><p>样式书写统一采用展开格式</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码大小写" tabindex="-1"><a class="header-anchor" href="#代码大小写"><span>代码大小写</span></a></h3><p>样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">DISPLAY</span><span class="token punctuation">:</span>BLOCK<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分号" tabindex="-1"><a class="header-anchor" href="#分号"><span>分号</span></a></h3><p>每个属性声明末尾都要加分号；</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span>block</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逗号" tabindex="-1"><a class="header-anchor" href="#逗号"><span>逗号</span></a></h3><p>逗号分隔的取值，逗号之后一个空格</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 1px 1px #333<span class="token punctuation">,</span>2px 2px 2px #ccc<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 1px 1px #333<span class="token punctuation">,</span> 2px 2px 2px #ccc<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性值引号" tabindex="-1"><a class="header-anchor" href="#属性值引号"><span>属性值引号</span></a></h3><p>css属性值需要用到引号时，统一使用单引号</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span> </span>
<span class="line">	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Hiragino Sans GB&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span> </span>
<span class="line">	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Hiragino Sans GB&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="颜色取值" tabindex="-1"><a class="header-anchor" href="#颜色取值"><span>颜色取值</span></a></h3><p>应避免16进制表示法与rgb表示法混用的情况，并优先使用16进制表示法</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.example-part1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.example-part2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>252<span class="token punctuation">,</span> 252<span class="token punctuation">,</span> 252<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.example-part1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.example-part2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #fcfcfc<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在可能的情况下，使用 3 个字符的十六进制表示法，并始终使用小写的十六进制数字</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #cccccc<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在每个声明块的左花括号前添加一个空格" tabindex="-1"><a class="header-anchor" href="#在每个声明块的左花括号前添加一个空格"><span>在每个声明块的左花括号前添加一个空格</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明块的右花括号应当单独成行" tabindex="-1"><a class="header-anchor" href="#声明块的右花括号应当单独成行"><span>声明块的右花括号应当单独成行</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每条声明语句的-后应该插入一个空格-前面无空格" tabindex="-1"><a class="header-anchor" href="#每条声明语句的-后应该插入一个空格-前面无空格"><span>每条声明语句的 : 后应该插入一个空格，前面无空格</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span>15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字" tabindex="-1"><a class="header-anchor" href="#数字"><span>数字</span></a></h3><p>不要为 0 指明单位</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 0px 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用到小数时，省略前边的 0</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.mod-example</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">opacity</span><span class="token punctuation">:</span> .5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为选择器分组时-将单独的选择器单独放在一行" tabindex="-1"><a class="header-anchor" href="#为选择器分组时-将单独的选择器单独放在一行"><span>为选择器分组时，将单独的选择器单独放在一行</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* bad */</span></span>
<span class="line"><span class="token selector">.selector, .selector-secondary</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">/* good */</span></span>
<span class="line"><span class="token selector">.selector,</span>
<span class="line">.selector-secondary</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">建议</p><p>选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。</p></div>`,38)]))}const o=n(l,[["render",i],["__file","write.html.vue"]]),d=JSON.parse('{"path":"/guide/css/write.html","title":"书写风格","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"代码缩进","slug":"代码缩进","link":"#代码缩进","children":[]},{"level":2,"title":"代码格式化","slug":"代码格式化","link":"#代码格式化","children":[{"level":3,"title":"代码大小写","slug":"代码大小写","link":"#代码大小写","children":[]},{"level":3,"title":"分号","slug":"分号","link":"#分号","children":[]},{"level":3,"title":"逗号","slug":"逗号","link":"#逗号","children":[]},{"level":3,"title":"属性值引号","slug":"属性值引号","link":"#属性值引号","children":[]},{"level":3,"title":"颜色取值","slug":"颜色取值","link":"#颜色取值","children":[]},{"level":3,"title":"在每个声明块的左花括号前添加一个空格","slug":"在每个声明块的左花括号前添加一个空格","link":"#在每个声明块的左花括号前添加一个空格","children":[]},{"level":3,"title":"声明块的右花括号应当单独成行","slug":"声明块的右花括号应当单独成行","link":"#声明块的右花括号应当单独成行","children":[]},{"level":3,"title":"每条声明语句的 : 后应该插入一个空格，前面无空格","slug":"每条声明语句的-后应该插入一个空格-前面无空格","link":"#每条声明语句的-后应该插入一个空格-前面无空格","children":[]},{"level":3,"title":"数字","slug":"数字","link":"#数字","children":[]},{"level":3,"title":"为选择器分组时，将单独的选择器单独放在一行","slug":"为选择器分组时-将单独的选择器单独放在一行","link":"#为选择器分组时-将单独的选择器单独放在一行","children":[]}]}],"git":{"updatedTime":1733483676000,"contributors":[{"name":"gang.peng","username":"gang.peng","email":"gang.peng@szyh.com","commits":1,"url":"https://github.com/gang.peng"}]},"filePathRelative":"guide/css/write.md"}');export{o as comp,d as data};
