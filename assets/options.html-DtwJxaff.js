import{_ as s,c as a,a as e,o as i}from"./app-DzEwyuga.js";const l="/smile-website/images/gitFlowOne.jpeg",c="/smile-website/images/gitFlowMore.jpeg",t={};function p(o,n){return i(),a("div",null,n[0]||(n[0]=[e('<h1 id="git-操作规范" tabindex="-1"><a class="header-anchor" href="#git-操作规范"><span>Git 操作规范</span></a></h1><h2 id="单人开发流程" tabindex="-1"><a class="header-anchor" href="#单人开发流程"><span>单人开发流程</span></a></h2><p><img src="'+l+'" alt="git单人操作规范"></p><h2 id="gitflow多人协作流程" tabindex="-1"><a class="header-anchor" href="#gitflow多人协作流程"><span>GitFlow多人协作流程</span></a></h2><p><img src="'+c+`" alt="git多人协作规范"></p><h2 id="git-flow操作示例" tabindex="-1"><a class="header-anchor" href="#git-flow操作示例"><span>Git Flow操作示例</span></a></h2><p>假设现在当前需求为xxFunction，现在开始开发</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 新建分支：</span></span>
<span class="line"><span class="token function">git</span> checkout dev      <span class="token comment"># 检出dev_version分支</span></span>
<span class="line"><span class="token function">git</span> fetch origin dev         <span class="token comment"># 拉取远程仓库dev_version最新的代码</span></span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature/xxFunction      <span class="token comment"># 基于dev_version 新建分支</span></span>
<span class="line"><span class="token function">git</span> push origin feature/xxFunction      <span class="token comment"># 将新建的分支推送到远程仓库</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开发过程：</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>    <span class="token comment"># 将工作区的修改保存待提交。</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;type: 提交信息&quot;</span> <span class="token comment"># 将当前保存的修改整体作为一次commit进行提交，添加提交信息。此时本地的修改已经完成，等待推送到远程。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新合并远程代码 ，如果commit在本地没有提交，使用rebase来合并其他代码，</span></span>
<span class="line"><span class="token function">git</span> checkout dev    <span class="token comment"># 切换到当前版本分支</span></span>
<span class="line"><span class="token function">git</span> pull    <span class="token comment"># 拉取远程代码</span></span>
<span class="line"><span class="token function">git</span> checkout feature/xxFunction    <span class="token comment"># 切换到当前工作分支</span></span>
<span class="line"><span class="token function">git</span> rebase dev    <span class="token comment"># 合并dev上的代码到当前工作分支</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># rebase过程中可能出现冲突，需要手动修改代码来处理冲突，处理完成后：</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">git</span> rebase —continue</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果处理冲突出错需要退出合并：</span></span>
<span class="line"><span class="token function">git</span> rebase —abort</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果本地的commit已经push到远程，采用merge方式来合并其他分支的代码</span></span>
<span class="line"><span class="token function">git</span> merge dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># merge中产生冲突，先add 再commit 用一次commit来处理合并冲突</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 合并完成后，本地代码目前是包含了主分支代码及自己的开发代码，推送到远程</span></span>
<span class="line"><span class="token function">git</span> push origin feature/xxFunction</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 然后在gitLab上提交一个合并请求，表明当前需求你的开发工作已经完成，想要合并入当前版本主分支:</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Source branch 选择你当前开发的分支 Target branch 选择你想要合入的分支 提交审核后，可以直接在gitLab页面上选择合并，一般来说之前处理过冲突的话，这里合并不会再产生冲突了</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开发合并完成后，删除当前分支：</span></span>
<span class="line"><span class="token function">git</span> checkout master   <span class="token comment"># 切换到其他分支，在当前分支时不能删除自身</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> testBranch       <span class="token comment"># 删除本地分支</span></span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">--delete</span> origin testBranch     <span class="token comment"># 删除远程分支</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const d=s(t,[["render",p],["__file","options.html.vue"]]),r=JSON.parse('{"path":"/guide/git/options.html","title":"Git 操作规范","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"单人开发流程","slug":"单人开发流程","link":"#单人开发流程","children":[]},{"level":2,"title":"GitFlow多人协作流程","slug":"gitflow多人协作流程","link":"#gitflow多人协作流程","children":[]},{"level":2,"title":"Git Flow操作示例","slug":"git-flow操作示例","link":"#git-flow操作示例","children":[]}],"git":{"updatedTime":1733483676000,"contributors":[{"name":"gang.peng","username":"gang.peng","email":"gang.peng@szyh.com","commits":1,"url":"https://github.com/gang.peng"}]},"filePathRelative":"guide/git/options.md"}');export{d as comp,r as data};
