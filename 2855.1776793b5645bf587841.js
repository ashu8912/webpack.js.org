(self.webpackChunk=self.webpackChunk||[]).push([[2855],{2855:a=>{a.exports='<p>If you have a more advanced project and use <a href="https://www.vagrantup.com/">Vagrant</a> to run your development environment in a Virtual Machine, you\'ll often want to also run webpack in the VM.</p> <h2 id="configuring-the-project">Configuring the Project<a href="#configuring-the-project" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>To start, make sure that the <code>Vagrantfile</code> has a static IP;</p> <pre><code class="hljs language-ruby"><span class="token constant">Vagrant</span><span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>\n  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token symbol">:private_network</span><span class="token punctuation">,</span> ip<span class="token punctuation">:</span> <span class="token string">"10.10.10.61"</span>\n<span class="token keyword">end</span></code></pre> <p>Next, install <code>webpack</code> and <code>webpack-dev-server</code> in your project;</p> <pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack webpack-dev-server</code></pre> <p>Make sure to have a <code>webpack.config.js</code> file. If you haven\'t already, use this as a minimal example to get started:</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  context<span class="token operator">:</span> __dirname<span class="token punctuation">,</span>\n  entry<span class="token operator">:</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>And create an <code>index.html</code> file. The script tag should point to your bundle. If <code>output.filename</code> is not specified in the config, this will be <code>bundle.js</code>.</p> <pre><code class="hljs language-html"><span class="token doctype"><span class="token punctuation">&#x3C;!</span><span class="token name">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/bundle.js<span class="token punctuation">"</span></span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>h2</span><span class="token punctuation">></span></span>Heey!<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>h2</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>html</span><span class="token punctuation">></span></span></code></pre> <p>Note that you also need to create an <code>app.js</code> file.</p> <h2 id="running-the-server">Running the Server<a href="#running-the-server" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>Now, let\'s run the server:</p> <pre><code class="hljs language-bash">webpack serve --host <span class="token number">0.0</span>.0.0 --public <span class="token number">10.10</span>.10.61:8080 --watch-poll</code></pre> <p>By default, the server will only be accessible from localhost. We\'ll be accessing it from our host PC, so we need to change <code>--host</code> to allow this.</p> <p><code>webpack-dev-server</code> will include a script in your bundle that connects to a WebSocket to reload when a change in any of your files occurs. The <code>--public</code> flag makes sure the script knows where to look for the WebSocket. The server will use port <code>8080</code> by default, so we should also specify that here.</p> <p><code>--watch-poll</code> makes sure that webpack can detect changes in your files. By default, webpack listens to events triggered by the filesystem, but VirtualBox has many problems with this.</p> <p>The server should be accessible on <code>http://10.10.10.61:8080</code> now. If you make a change in <code>app.js</code>, it should live reload.</p> <h2 id="advanced-usage-with-nginx">Advanced Usage with nginx<a href="#advanced-usage-with-nginx" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>To mimic a more production-like environment, it is also possible to proxy the <code>webpack-dev-server</code> with nginx.</p> <p>In your nginx configuration file, add the following:</p> <pre><code class="hljs language-nginx"><span class="token keyword">server</span> <span class="token punctuation">{</span>\n  <span class="token keyword">location</span> <span class="token operator">/</span> <span class="token punctuation">{</span>\n    <span class="token keyword">proxy_pass</span> <span class="token keyword">http</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8080</span><span class="token punctuation">;</span>\n    <span class="token keyword">proxy_http_version</span> <span class="token number">1.1</span><span class="token punctuation">;</span>\n    <span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>\n    <span class="token keyword">proxy_set_header</span> Connection <span class="token string">"upgrade"</span><span class="token punctuation">;</span>\n    <span class="token keyword">error_page</span> <span class="token number">502</span> @start<span class="token operator">-</span>webpack<span class="token operator">-</span>dev<span class="token operator">-</span><span class="token keyword">server</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">location</span> @start<span class="token operator">-</span>webpack<span class="token operator">-</span>dev<span class="token operator">-</span><span class="token keyword">server</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default_type</span> text<span class="token operator">/</span>plain<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token number">502</span> <span class="token string">"Please start the webpack-dev-server first."</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <p>The <code>proxy_set_header</code> lines are important, because they allow the WebSockets to work correctly.</p> <p>The command to start <code>webpack-dev-server</code> can then be changed to this:</p> <pre><code class="hljs language-bash">webpack serve --public <span class="token number">10.10</span>.10.61 --watch-poll</code></pre> <p>This makes the server only accessible on <code>127.0.0.1</code>, which is fine because nginx takes care of making it available on your host PC.</p> <h2 id="conclusion">Conclusion<a href="#conclusion" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>We made the Vagrant box accessible from a static IP, and then made <code>webpack-dev-server</code> publicly accessible so it is reachable from a browser. We then tackled a common problem that VirtualBox doesn\'t send out filesystem events, causing the server to not reload on file changes.</p> '}}]);