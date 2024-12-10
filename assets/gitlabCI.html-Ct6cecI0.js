import{_ as s,c as a,a as e,o as l}from"./app-DzEwyuga.js";const i={};function p(t,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="gitlab-pipelines" tabindex="-1"><a class="header-anchor" href="#gitlab-pipelines"><span>GitLab Pipelines</span></a></h1><p>相对于github而言，企业中更多使用的是Gitlab。Gitlab也有类似于GitHub Actions的功能，名为GitLab Pipelines。</p><p>在GitLab Pipelines中，每个流水线都由一个或多个Job组成，每个Job是独立运行的任务，可以通过配置文件来定义Job的具体操作。常见的GitLab Pipelines配置文件是<code>项目根目录</code>的.gitlab-ci.yml，它使用YAML格式来定义Pipeline的配置。</p><h2 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml"><span>yaml</span></a></h2><p>下面是一个简单的.gitlab-ci.yml文件的示例，该文件定义了一个执行前端构建任务的Pipeline：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># 定义使用的Docker镜像</span></span>
<span class="line"><span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span><span class="token number">12</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义流水线的各个阶段</span></span>
<span class="line"><span class="token key atrule">stages</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> build</span>
<span class="line">  <span class="token punctuation">-</span> test</span>
<span class="line">  <span class="token punctuation">-</span> deploy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义需要缓存的目录，以便在下一次构建时加速构建过程</span></span>
<span class="line"><span class="token key atrule">cache</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">paths</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> node_modules/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义构建阶段</span></span>
<span class="line"><span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 指定该阶段的名称</span></span>
<span class="line">  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build</span>
<span class="line">  <span class="token comment"># 在Docker容器中执行的命令</span></span>
<span class="line">  <span class="token key atrule">script</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> npm install</span>
<span class="line">    <span class="token punctuation">-</span> npm run build</span>
<span class="line">  <span class="token comment"># 将构建产生的产物进行存储</span></span>
<span class="line">  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">paths</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> build/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义测试阶段</span></span>
<span class="line"><span class="token key atrule">test</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 指定该阶段的名称</span></span>
<span class="line">  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test</span>
<span class="line">  <span class="token comment"># 在Docker容器中执行的命令</span></span>
<span class="line">  <span class="token key atrule">script</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> npm install</span>
<span class="line">    <span class="token punctuation">-</span> npm test</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义部署阶段</span></span>
<span class="line"><span class="token key atrule">deploy</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 指定该阶段的名称</span></span>
<span class="line">  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy</span>
<span class="line">  <span class="token comment"># 定义该阶段只有在构建和测试阶段通过后才会执行</span></span>
<span class="line">  <span class="token key atrule">only</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> master</span>
<span class="line">  <span class="token comment"># 在Docker容器中执行的命令</span></span>
<span class="line">  <span class="token key atrule">script</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> apt<span class="token punctuation">-</span>get update</span>
<span class="line">    <span class="token punctuation">-</span> apt<span class="token punctuation">-</span>get install <span class="token punctuation">-</span>y sshpass</span>
<span class="line">    <span class="token punctuation">-</span> sshpass <span class="token punctuation">-</span>p $DEPLOY_PASSWORD scp <span class="token punctuation">-</span>r build/* $DEPLOY_USER@$DEPLOY_HOST<span class="token punctuation">:</span>$DEPLOY_PATH</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitlab-runner" tabindex="-1"><a class="header-anchor" href="#gitlab-runner"><span>Gitlab Runner</span></a></h2><p>与GitHub Actions一样的是，GitLab Pipelines需要配置GitLab Runner才可以执行。</p><p>GitLab Runner需要和GitLab服务器进行通信，并且需要注册到GitLab服务器上，以便GitLab可以向Runner发送作业。每个GitLab Runner都有自己的标识符（Runner Token），这个标识符用于注册Runner到GitLab服务器上。</p><p>GitLab Runner的注册过程可以通过以下步骤完成：</p><ul><li>安装GitLab Runner，可以从官网下载适合自己操作系统的二进制文件或者使用Docker容器来安装。</li><li>执行gitlab-runner register命令，根据提示输入GitLab服务器的地址、Runner Token、Runner的描述信息等等。</li><li>在GitLab服务器上确认注册信息，可以在项目的CI/CD设置页面中查看新注册的Runner。</li></ul><p>下面是一些具体的注册命令示例，假设GitLab服务器地址为https://gitlab.example.com，Runner Token为XXXXXXXXXXXXXXXXXXXX：</p><h3 id="使用默认配置注册runner" tabindex="-1"><a class="header-anchor" href="#使用默认配置注册runner"><span>使用默认配置注册Runner：</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> gitlab-runner register <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--url</span> https://gitlab.example.com <span class="token punctuation">\\</span></span>
<span class="line">  --registration-token XXXXXXXXXXXXXXXXXXXX <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--description</span> <span class="token string">&quot;My Runner&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--executor</span> shell</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用docker容器注册runner" tabindex="-1"><a class="header-anchor" href="#使用docker容器注册runner"><span>使用Docker容器注册Runner：</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> gitlab-runner <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /srv/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span></span>
<span class="line">  gitlab/gitlab-runner:latest</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab-runner gitlab-runner register <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--url</span> https://gitlab.example.com <span class="token punctuation">\\</span></span>
<span class="line">  --registration-token XXXXXXXXXXXXXXXXXXXX <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--description</span> <span class="token string">&quot;My Runner&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--executor</span> <span class="token function">docker</span> <span class="token punctuation">\\</span></span>
<span class="line">  --docker-image <span class="token string">&quot;docker:stable&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上命令中，--description参数用于设置Runner的描述信息，--executor参数用于设置Runner的执行方式，可以选择shell、docker或者其他支持的执行方式。注册成功后，可以在GitLab项目的CI/CD设置页面中查看新注册的Runner。</p>`,17)]))}const r=s(i,[["render",p],["__file","gitlabCI.html.vue"]]),u=JSON.parse('{"path":"/project/deploy/gitlabCI.html","title":"GitLab Pipelines","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"yaml","slug":"yaml","link":"#yaml","children":[]},{"level":2,"title":"Gitlab Runner","slug":"gitlab-runner","link":"#gitlab-runner","children":[{"level":3,"title":"使用默认配置注册Runner：","slug":"使用默认配置注册runner","link":"#使用默认配置注册runner","children":[]},{"level":3,"title":"使用Docker容器注册Runner：","slug":"使用docker容器注册runner","link":"#使用docker容器注册runner","children":[]}]}],"git":{"updatedTime":1733483676000,"contributors":[{"name":"gang.peng","username":"gang.peng","email":"gang.peng@szyh.com","commits":1,"url":"https://github.com/gang.peng"}]},"filePathRelative":"project/deploy/gitlabCI.md"}');export{r as comp,u as data};
