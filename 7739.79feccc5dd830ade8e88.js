(self.webpackChunk=self.webpackChunk||[]).push([[7739],{7739:n=>{n.exports='<h2 id="multiple-file-types-per-entry">Multiple file types per entry<a href="#multiple-file-types-per-entry" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>It is possible to provide different types of files when using an array of values for <a href="/configuration/entry-context/#entry">entry</a> to achieve separate bundles for CSS and JavaScript (and other) files in applications that are not using <code>import</code> for styles in JavaScript (pre Single Page Applications or different reasons).</p> <p>Let\'s make an example. We have a PHP application with two page types: home and account. The home page has different layout and non-sharable JavaScript with the rest of the application (account page). We want to output <code>home.js</code> and <code>home.css</code> from our application files for the home page and <code>account.js</code> and <code>account.css</code> for account page.</p> <p><strong>home.js</strong></p> <pre><code class="hljs language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'home page type\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><strong>home.scss</strong></p> <pre><code class="hljs language-scss"><span class="token comment">// home page individual styles</span></code></pre> <p><strong>account.js</strong></p> <pre><code class="hljs language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'account page type\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><strong>account.scss</strong></p> <pre><code class="hljs language-scss"><span class="token comment">// account page individual styles</span></code></pre> <p>We will use <a href="/plugins/mini-css-extract-plugin/"><code>MiniCssExtractPlugin</code></a> in <code>production</code> mode for css as a best practice.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mini-css-extract-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  mode<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">,</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    home<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./home.js\'</span><span class="token punctuation">,</span> <span class="token string">\'./home.scss\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    account<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./account.js\'</span><span class="token punctuation">,</span> <span class="token string">\'./account.scss\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> <span class="token string">\'[name].js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token comment">// fallback to style-loader in development</span>\n          process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">\'production\'</span> <span class="token operator">?</span> <span class="token string">\'style-loader\'</span> <span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>\n          <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'sass-loader\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      filename<span class="token operator">:</span> <span class="token string">\'[name].css\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>Running webpack with above configuration will output into <code>./dist</code> as we did not specify different output path. <code>./dist</code> directory will now contain four files:</p> <ul> <li>home.js</li> <li>home.css</li> <li>account.js</li> <li>account.css</li> </ul> '}}]);