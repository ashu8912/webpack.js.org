(self.webpackChunk=self.webpackChunk||[]).push([[5820],{5820:n=>{n.exports='<blockquote class="tip"> <p>Available since webpack 4.39.0</p> </blockquote> <p>Logging output is an additional way to display messages to the end users.</p> <p>webpack logger is available to <a href="/loaders/">loaders</a> and <a href="/api/plugins/#logging">plugins</a>. Emitting as part of the <a href="/api/stats/">Stats</a> and configured by the user in <a href="/configuration/">webpack configuration</a>.</p> <p>Benefits of custom logging API in webpack:</p> <ul> <li>Common place to <a href="/configuration/stats/#statslogging">configure the logging</a> display level</li> <li>Logging output exportable as part of the <code>stats.json</code></li> <li>Stats presets affect logging output</li> <li>Plugins can affect logging capturing and display level</li> <li>When using multiple plugins and loaders they use a common logging solution</li> <li>CLI, UI tools for webpack may choose different ways to display logging</li> <li>webpack core can emit logging output, e.g. timing data</li> </ul> <p>By introducing webpack logging API we hope to unify the way webpack plugins and loaders emit logs and allow better ways to inspect build problems. Integrated logging solution supports plugins and loaders developers by improving their development experience. Paves the way for non-CLI webpack solutions like dashboards or other UIs.</p> <blockquote class="warning"> <p><strong>Avoid noise in the log!</strong> Keep in mind that multiple plugins and loaders are used together. Loaders are usually processing multiple files and are invoked for every file. Choose a logging level as low as possible to keep the log output informative.</p> </blockquote> <h2 id="examples-of-how-to-get-and-use-webpack-logger-in-loaders-and-plugins">Examples of how to get and use webpack logger in loaders and plugins<a href="#examples-of-how-to-get-and-use-webpack-logger-in-loaders-and-plugins" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p><strong>my-webpack-plugin.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">const</span> <span class="token constant">PLUGIN_NAME</span> <span class="token operator">=</span> <span class="token string">\'my-webpack-plugin\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyWebpackPlugin</span> <span class="token punctuation">{</span>\n  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// you can access Logger from compiler</span>\n    <span class="token keyword">const</span> logger <span class="token operator">=</span> compiler<span class="token punctuation">.</span><span class="token function">getInfrastructureLogger</span><span class="token punctuation">(</span><span class="token constant">PLUGIN_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'log from compiler\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compilation<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token constant">PLUGIN_NAME</span><span class="token punctuation">,</span> <span class="token parameter">compilation</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// you can also access Logger from compilation</span>\n      <span class="token keyword">const</span> logger <span class="token operator">=</span> compilation<span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token constant">PLUGIN_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'log from compilation\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <p><strong>my-webpack-loader.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// you can get Logger with `this.getLogger` in your webpack loaders</span>\n  <span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">\'my-webpack-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'hello Logger\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> source<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h2 id="logger-methods">Logger methods<a href="#logger-methods" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <ul> <li><code>logger.error(...)</code>: for error messages</li> <li><code>logger.warn(...)</code>: for warnings</li> <li><code>logger.info(...)</code>: for <strong>important</strong> information messages. These messages are displayed by default. Only use this for messages that the user really needs to see</li> <li><code>logger.log(...)</code>: for <strong>unimportant</strong> information messages. These messages are displayed only when user had opted-in to see them</li> <li><code>logger.debug(...)</code>: for debugging information. These messages are displayed only when user had opted-in to see debug logging for specific modules</li> <li><code>logger.trace()</code>: to display a stack trace. Displayed like <code>logger.debug</code></li> <li><code>logger.group(...)</code>: to group messages. Displayed collapsed like <code>logger.log</code></li> <li><code>logger.groupEnd()</code>: to end a logging group</li> <li><code>logger.groupCollapsed(...)</code>: to group messages together. Displayed collapsed like <code>logger.log</code>. Displayed expanded when logging level is set to <code>\'verbose\'</code> or <code>\'debug\'</code>.</li> <li><code>logger.status</code>: writes a temporary message, setting a new status, overrides the previous one</li> <li><code>logger.clear()</code>: to print a horizontal line. Displayed like <code>logger.log</code></li> <li><code>logger.profile(...)</code>, <code>logger.profileEnd(...)</code>: to capture a profile. Delegated to <code>console.profile</code> when supported</li> </ul> <h2 id="runtime-logger-api">Runtime Logger API<a href="#runtime-logger-api" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p>Runtime logger API is only intended to be used as a development tool, it is not intended to be included in <a href="/configuration/mode/#mode-production">production mode</a>.</p> <ul> <li><code>const logging = require(\'webpack/lib/logging/runtime\')</code>: to use the logger in runtime, require it directly from webpack</li> <li><code>logging.getLogger(\'name\')</code>: to get individual logger by name</li> <li><code>logging.configureDefaultLogger(...)</code>: to override the default logger.</li> </ul> <pre><code class="hljs language-javascript"><span class="token keyword">const</span> logging <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack/lib/logging/runtime\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlogging<span class="token punctuation">.</span><span class="token function">configureDefaultLogger</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  level<span class="token operator">:</span> <span class="token string">\'log\'</span><span class="token punctuation">,</span>\n  debug<span class="token operator">:</span> <span class="token regex">/something/</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <ul> <li><code>logging.hooks.log</code>: to apply Plugins to the runtime logger</li> </ul> '}}]);