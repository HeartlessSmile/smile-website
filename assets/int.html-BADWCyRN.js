import{_ as s,c as a,a as e,o as t}from"./app-DzEwyuga.js";const p={};function o(l,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="整数类型" tabindex="-1"><a class="header-anchor" href="#整数类型"><span>整数类型</span></a></h1><h2 id="整数表示" tabindex="-1"><a class="header-anchor" href="#整数表示"><span>整数表示</span></a></h2><p>在 <code>Node.js</code> 中的数字类型都被表示为双精度浮点数（64 位），没有特定的整数类型。因此整数的范围受到 <code>IEEE 754 标准</code>的限制，即 <code>-2^53</code> 到 <code>2^53</code> 之间的整数可以精确表示，超出这个范围的整数可能会失去精度。 <code>Node.js</code> 使用 <code>Number</code> 类型来表示所有数字，包括整数和浮点数。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> integer <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> integer <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">42</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> integer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>Rust</code>中，根据整数的大小（位数）、符号（是否可为负整数）可将其分为如下类型</p><table><thead><tr><th style="text-align:left;">长度</th><th style="text-align:left;">有符号类型</th><th style="text-align:left;">无符号类型</th></tr></thead><tbody><tr><td style="text-align:left;">8 位</td><td style="text-align:left;">i8</td><td style="text-align:left;">u8</td></tr><tr><td style="text-align:left;">16 位</td><td style="text-align:left;">i16</td><td style="text-align:left;">u16</td></tr><tr><td style="text-align:left;">32 位</td><td style="text-align:left;">i32</td><td style="text-align:left;">u32</td></tr><tr><td style="text-align:left;">64 位</td><td style="text-align:left;">i64</td><td style="text-align:left;">u64</td></tr><tr><td style="text-align:left;">128 位</td><td style="text-align:left;">i128</td><td style="text-align:left;">u128</td></tr><tr><td style="text-align:left;">视架构而定</td><td style="text-align:left;">isize</td><td style="text-align:left;">usize</td></tr></tbody></table><p>其中，<code>无符号类型</code> 代表数字只能取正整数和0。<code>有符号类型</code> 代表数字可以取正整数、负整数和0。</p><p>每个有符号类型规定的数字范围是 <code>-(2n - 1) ~ 2n - 1 - 1</code>，其中 <code>n</code> 是该定义形式的位长度。因此 <code>i8</code> 可存储数字范围是 <code>-(27) ~ 27 - 1</code>，即 <code>-128 ~ 127</code>。无符号类型可以存储的数字范围是 <code>0 ~ 2n - 1</code>，所以 <code>u8</code> 能够存储的数字为 <code>0 ~ 28 - 1</code>，即 <code>0 ~ 255</code>。</p><p>此外，<code>isize</code> 和 <code>usize</code> 类型取决于程序运行的计算机 CPU 类型： 若 CPU 是 32 位的，则这两个类型是 32 位的，同理，若 CPU 是 64 位，那么它们则是 64 位。</p><blockquote><p><code>Rust</code> 整型默认使用 <code>i32</code>，例如 let i = 1，那 i 就是 i32 类型，因此你可以首选它，同时该类型也往往是性能最好的。<code>isize</code> 和 <code>usize</code> 的主要应用场景是用作集合的索引。</p></blockquote><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token comment">// 有符号整数</span></span>
<span class="line"><span class="token keyword">let</span> signed_integer<span class="token punctuation">:</span> <span class="token keyword">i8</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 8位</span></span>
<span class="line"><span class="token keyword">let</span> signed_integer<span class="token punctuation">:</span> <span class="token keyword">i16</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">// 16位</span></span>
<span class="line"><span class="token keyword">let</span> signed_integer<span class="token punctuation">:</span> <span class="token keyword">i32</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10_000</span><span class="token punctuation">;</span> <span class="token comment">// 32位</span></span>
<span class="line"><span class="token keyword">let</span> signed_integer<span class="token punctuation">:</span> <span class="token keyword">i64</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1_000_000</span><span class="token punctuation">;</span> <span class="token comment">// 64位</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 无符号整数</span></span>
<span class="line"><span class="token keyword">let</span> unsigned_integer<span class="token punctuation">:</span> <span class="token keyword">u8</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 8位</span></span>
<span class="line"><span class="token keyword">let</span> unsigned_integer<span class="token punctuation">:</span> <span class="token keyword">u16</span> <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">// 16位</span></span>
<span class="line"><span class="token keyword">let</span> unsigned_integer<span class="token punctuation">:</span> <span class="token keyword">u32</span> <span class="token operator">=</span> <span class="token number">10_000</span><span class="token punctuation">;</span> <span class="token comment">// 32位</span></span>
<span class="line"><span class="token keyword">let</span> unsigned_integer<span class="token punctuation">:</span> <span class="token keyword">u64</span> <span class="token operator">=</span> <span class="token number">1_000_000</span><span class="token punctuation">;</span> <span class="token comment">// 64位</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在 Rust 中，数字可以使用 <code>_</code> 作为可视分隔符来提高可读性，编译器在处理数值时会忽略这些 <code>_</code>。</p></blockquote><h2 id="整数溢出" tabindex="-1"><a class="header-anchor" href="#整数溢出"><span>整数溢出</span></a></h2><p>有些同学可能比较疑惑，假设我给一个数的类型设置成<code>u8</code>，它的范围是<code>0-255</code>，那我给它范围之外的值，会发生什么呢？</p><p>其实这个行为叫<code>整数溢出</code>。我们先看在<code>Node.js</code>会发生什么？</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> maxInt <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 最大整数值</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>maxInt<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 9007199254740991</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> overflowed <span class="token operator">=</span> maxInt <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 整数溢出发生</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>overflowed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 -9007199254740992，即溢出后的环绕结果</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> minInt <span class="token operator">=</span> <span class="token operator">-</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 最小整数值</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>minInt<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 -9007199254740991</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> underflowed <span class="token operator">=</span> minInt <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 整数溢出发生</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>underflowed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 9007199254740992，即溢出后的环绕结果</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见，当进行整数运算时，如果结果超出了 <code>Node.js</code> 可以表示的范围，则会发生溢出，这时候 <code>Node.js</code> 会将结果环绕到可表示范围内的值。</p><p>在 <code>Rust</code> 中，校验会更严格一些，整数溢出通常被认为是一种错误，因此 <code>Rust</code> 在默认情况下会进行溢出检查，以确保程序的安全性。<code>Rust</code> 提供了两种处理整数溢出的方式：</p><ol><li><p><strong>Debug 模式下的溢出检查</strong>： 在 <code>Rust</code> 的 <code>Debug</code> 模式下，默认会对整数运算进行溢出检查。如果发生了溢出，程序将会 <code>panic</code>，并打印出相关的错误信息，以帮助开发者调试问题。</p></li><li><p><strong>Release 模式下的溢出处理</strong>： 在 <code>Rust</code> 的 <code>Release</code> 模式下，默认情况下整数运算不会进行溢出检查，而是会发生“包装”（wrapping）。这意味着整数溢出会导致结果的环绕，即超出整数表示范围的值会回到该范围内，不会引发<code>panic</code>。</p></li></ol><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token keyword">mut</span>  a<span class="token punctuation">:</span><span class="token keyword">u8</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span></span>
<span class="line">  a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在 Debug 模式下会 panic，Release 模式 输出为 0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决整数溢出的问题，<code>Rust</code> 还提供了一些显示地处理整数溢出的方法，以便开发者能够更加灵活地控制溢出情况。这些方法包括：</p><ul><li>使用 <code>wrapping_*</code> 系列方法进行包装操作，例如 <code>wrapping_add</code>、<code>wrapping_sub</code>、<code>wrapping_mul</code> 等，这些方法会执行对应的整数运算并在溢出时进行包装。</li><li>使用 <code>checked_*</code> 系列方法进行检查操作，例如 <code>checked_add</code>、<code>checked_sub</code>、<code>checked_mul</code> 等，这些方法会返回 <code>Option</code> 类型，当发生溢出时返回 <code>None</code>，否则返回 <code>Some(result)</code>。</li></ul><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token keyword">u8</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 在 Debug 模式下会 panic，Release 模式下会进行包装</span></span>
<span class="line"></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;x: {}&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;y: {}&quot;</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> z <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">wrapping_add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用包装操作</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;z: {}&quot;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> checked_result <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">checked_add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用检查操作</span></span>
<span class="line">    <span class="token keyword">match</span> checked_result <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Some</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Checked result: {}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token class-name">None</span> <span class="token operator">=&gt;</span> <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Overflow occurred&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上示例中，当 <code>x</code> 为 255 时，将其加 1 会导致溢出。在 Debug 模式下会导致 panic，而在 Release 模式下会进行包装。通过使用 <code>wrapping_add</code> 方法可以进行包装处理，而使用 <code>checked_add</code> 方法可以进行检查操作，并根据返回结果进行相应的处理。</p><h2 id="整数字面量" tabindex="-1"><a class="header-anchor" href="#整数字面量"><span>整数字面量</span></a></h2><p><code>Rust</code> 和 <code>JavaScript</code> 在整数字面量方面大体相同，都支持以下方式：</p><table><thead><tr><th style="text-align:left;">数字字面量</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">十进制</td><td style="text-align:left;">98_222</td></tr><tr><td style="text-align:left;">十六进制</td><td style="text-align:left;">0xff</td></tr><tr><td style="text-align:left;">八进制</td><td style="text-align:left;">0o77</td></tr><tr><td style="text-align:left;">二进制</td><td style="text-align:left;">0b1111_0000</td></tr></tbody></table><p>由于在许多系统级编程和底层操作中，需要对字节进行精确的操作，包括位掩码、位移等。因此，<code>Rust</code> 提供了直接表示字节的整数字面量<code>b</code>，以简化这些操作的编写。</p><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre><code><span class="line"><span class="token keyword">let</span> byte<span class="token punctuation">:</span> <span class="token keyword">u8</span> <span class="token operator">=</span> <span class="token char">b&#39;A&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 字节字面量，表示 ASCII 字符 &#39;A&#39; 对应的字节值</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,29)]))}const i=s(p,[["render",o],["__file","int.html.vue"]]),d=JSON.parse('{"path":"/rust/dataType/int.html","title":"整数类型","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"整数表示","slug":"整数表示","link":"#整数表示","children":[]},{"level":2,"title":"整数溢出","slug":"整数溢出","link":"#整数溢出","children":[]},{"level":2,"title":"整数字面量","slug":"整数字面量","link":"#整数字面量","children":[]}],"git":{"updatedTime":1733483676000,"contributors":[{"name":"gang.peng","username":"gang.peng","email":"gang.peng@szyh.com","commits":1,"url":"https://github.com/gang.peng"}]},"filePathRelative":"rust/dataType/int.md"}');export{i as comp,d as data};