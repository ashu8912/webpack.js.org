(self.webpackChunk=self.webpackChunk||[]).push([[443],{443:e=>{e.exports='<p>For proper usage and easy distribution of this configuration, webpack can be configured with <code>webpack.config.js</code>. Any parameters sent to the CLI will map to a corresponding parameter in the configuration file.</p> <p>Read the <a href="/guides/installation">installation guide</a> if you don\'t already have webpack and CLI installed.</p> <h2 id="commands">Commands<a href="#commands" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>webpack-cli offers a variety of commands to make working with webpack easy. By default webpack ships with</p> <table> <thead> <tr> <th>Command</th> <th>Alias</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><div class="title"><p>Command</p><p>Alias</p><p>Description</p></div><div class="content"><p><code>init</code></p><p class="description mobile">c</p><p></p></div></td> <td class="description desktop">c</td> <td>Initialize a new webpack configuration</td> </tr> <tr> <td><div class="title"><p>Command</p><p>Alias</p><p>Description</p></div><div class="content"><p><code>migrate</code></p><p class="description mobile">m</p><p></p></div></td> <td class="description desktop">m</td> <td>Migrate a configuration to a new version</td> </tr> <tr> <td><div class="title"><p>Command</p><p>Alias</p><p>Description</p></div><div class="content"><p><code>loader</code></p><p class="description mobile">l</p><p></p></div></td> <td class="description desktop">l</td> <td>Scaffold a loader repository</td> </tr> <tr> <td><div class="title"><p>Command</p><p>Alias</p><p>Description</p></div><div class="content"><p><code>plugin</code></p><p class="description mobile">p</p><p></p></div></td> <td class="description desktop">p</td> <td>Scaffold a plugin repository</td> </tr> <tr> <td><div class="title"><p>Command</p><p>Alias</p><p>Description</p></div><div class="content"><p><code>info</code></p><p class="description mobile">i</p><p></p></div></td> <td class="description desktop">i</td> <td>Outputs information about your system and dependencies</td> </tr> <tr> <td><div class="title"><p>Command</p><p>Alias</p><p>Description</p></div><div class="content"><p><code>serve</code></p><p class="description mobile">s</p><p></p></div></td> <td class="description desktop">s</td> <td>Run the webpack Dev Server</td> </tr> </tbody> </table> <h2 id="flags">Flags<a href="#flags" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>webpack-cli offers a variety of commands to make working with webpack easy. By default webpack ships with the following flags:</p> <p>Note: These are the flags with webpack v4, starting v5 CLI also supports <a href="/api/cli/#core-flags">core flags</a></p> <table> <thead> <tr> <th>Flag / Alias</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--entry</code></p><p class="description mobile">string[]</p><p></p></div></td> <td class="description desktop">string[]</td> <td>The entry point(s) of your application e.g. <code>./src/main.js</code></td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--config, -c</code></p><p class="description mobile">string[]</p><p></p></div></td> <td class="description desktop">string[]</td> <td>Provide path to a webpack configuration file e.g. <code>./webpack.config.js</code></td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--config-name</code></p><p class="description mobile">string[]</p><p></p></div></td> <td class="description desktop">string[]</td> <td>Name of the configuration to use</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--name</code></p><p class="description mobile">string[]</p><p></p></div></td> <td class="description desktop">string[]</td> <td>Name of the configuration. Used when loading multiple configurations</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--color</code></p><p class="description mobile">boolean</p><p></p></div></td> <td class="description desktop">boolean</td> <td>Enable colors on console</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--merge, -m</code></p><p class="description mobile">boolean</p><p></p></div></td> <td class="description desktop">boolean</td> <td>Merge two or more configurations using webpack-merge e.g. <code>-c ./webpack.config.js -c ./webpack.test.config.js</code></td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--env</code></p><p class="description mobile">string[]</p><p></p></div></td> <td class="description desktop">string[]</td> <td>Environment passed to the configuration when it is a function</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--progress</code></p><p class="description mobile">boolean, string</p><p></p></div></td> <td class="description desktop">boolean, string</td> <td>Print compilation progress during build</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--help</code></p><p class="description mobile">boolean</p><p></p></div></td> <td class="description desktop">boolean</td> <td>Outputs list of supported flags and commands</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--output-path, -o</code></p><p class="description mobile">string</p><p></p></div></td> <td class="description desktop">string</td> <td>Output location of the file generated by webpack e.g. <code>./dist</code></td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--target, -t</code></p><p class="description mobile">string[]</p><p></p></div></td> <td class="description desktop">string[]</td> <td>Sets the build target</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--watch, -w</code></p><p class="description mobile">boolean</p><p></p></div></td> <td class="description desktop">boolean</td> <td>Watch for file changes</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--hot, -h</code></p><p class="description mobile">boolean</p><p></p></div></td> <td class="description desktop">boolean</td> <td>Enables Hot Module Replacement</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--devtool, -d</code></p><p class="description mobile">string</p><p></p></div></td> <td class="description desktop">string</td> <td>Controls if and how source maps are generated.</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--prefetch</code></p><p class="description mobile">string</p><p></p></div></td> <td class="description desktop">string</td> <td>Prefetch this request</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--json, -j</code></p><p class="description mobile">boolean, string</p><p></p></div></td> <td class="description desktop">boolean, string</td> <td>Prints result as JSON or store it in a file</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--mode</code></p><p class="description mobile">string</p><p></p></div></td> <td class="description desktop">string</td> <td>Defines the mode to pass to webpack</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--version, -v</code></p><p class="description mobile">boolean</p><p></p></div></td> <td class="description desktop">boolean</td> <td>Get current version</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--stats</code></p><p class="description mobile">boolean, string</p><p></p></div></td> <td class="description desktop">boolean, string</td> <td>It instructs webpack on how to treat the stats</td> </tr> <tr> <td><div class="title"><p>Flag / Alias</p><p>Type</p><p>Description</p></div><div class="content"><p><code>--analyze</code></p><p class="description mobile">boolean</p><p></p></div></td> <td class="description desktop">boolean</td> <td>It invokes <code>webpack-bundle-analyzer</code> plugin to get bundle information</td> </tr> </tbody> </table> <h3 id="negated-flags">Negated Flags<a href="#negated-flags" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <table> <thead> <tr> <th>Flag</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><div class="title"><p>Flag</p><p>Description</p></div><div class="content"><p>--no-color</p><p class="description mobile">Disabled any color on the console</p><p></p></div></td> <td class="description desktop">Disabled any color on the console</td> </tr> <tr> <td><div class="title"><p>Flag</p><p>Description</p></div><div class="content"><p>--no-hot</p><p class="description mobile">Disabled hot reloading if you have it enabled via your config</p><p></p></div></td> <td class="description desktop">Disabled hot reloading if you have it enabled via your config</td> </tr> <tr> <td><div class="title"><p>Flag</p><p>Description</p></div><div class="content"><p>--no-stats</p><p class="description mobile">Disables any compilation stats emitted by webpack</p><p></p></div></td> <td class="description desktop">Disables any compilation stats emitted by webpack</td> </tr> <tr> <td><div class="title"><p>Flag</p><p>Description</p></div><div class="content"><p>--no-watch</p><p class="description mobile">Do not watch for file changes</p><p></p></div></td> <td class="description desktop">Do not watch for file changes</td> </tr> <tr> <td><div class="title"><p>Flag</p><p>Description</p></div><div class="content"><p>--no-devtool</p><p class="description mobile">Do not generate source maps</p><p></p></div></td> <td class="description desktop">Do not generate source maps</td> </tr> </tbody> </table> <h3 id="core-flags">Core Flags<a href="#core-flags" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>Starting CLI v4 and webpack v5, CLI imports the entire configuration schema from webpack core to allow tuning almost every configuration option from the command line.</p> <p><strong>Here\'s the list of all the core flags supported by webpack v5 with CLI v4 - <a href="https://github.com/webpack/webpack-cli/tree/next/packages/webpack-cli#webpack-5">link</a></strong></p> <p>For example if you want to enable performance hints in your project you\'d use <a href="https://webpack.js.org/configuration/performance/#performancehints">this</a> option in configuration, with core flags you can do -</p> <pre><code class="hljs language-bash">webpack --performance-hints warning</code></pre> <h2 id="usage">Usage<a href="#usage" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <h3 id="with-configuration-file">With configuration file<a href="#with-configuration-file" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <pre><code class="hljs language-bash">webpack <span class="token punctuation">[</span>--config webpack.config.js<span class="token punctuation">]</span></code></pre> <p>See <a href="/configuration">configuration</a> for the options in the configuration file.</p> <h3 id="without-configuration-file">Without configuration file<a href="#without-configuration-file" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <pre><code class="hljs language-sh">webpack &#x3C;entry> [&#x3C;entry>] -o &#x3C;output-path>\n</code></pre> <p><strong>example</strong></p> <pre><code class="hljs language-sh">webpack --entry ./first.js --entry ./second.js --output-path /build\n</code></pre> <p><strong><code>&#x3C;entry></code></strong></p> <p>A filename or a set of named filenames which act as the entry point to build your project. You can pass multiple entries (every entry is loaded on startup). If you pass a pair in the form <code>&#x3C;name>=&#x3C;request></code>, you can create an additional entry point. It will be mapped to the configuration option <code>entry</code>.</p> <p><strong><code>&#x3C;output></code></strong></p> <p>A path for the bundled file to be saved in. It will be mapped to the configuration options <code>output.path</code>.</p> <p><strong>Example</strong></p> <p>If your project structure is as follows -</p> <pre><code class="hljs language-bash"><span class="token builtin class-name">.</span>\n├── dist\n├── index.html\n└── src\n    ├── index.js\n    ├── index2.js\n    └── others.js</code></pre> <pre><code class="hljs language-bash">webpack ./src/index.js -o dist</code></pre> <p>This will bundle your source code with entry as <code>index.js</code>, and the output bundle file will have a path of <code>dist</code>.</p> <pre><code class="hljs language-bash">asset main.js <span class="token number">142</span> bytes <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">[</span>minimized<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: main<span class="token punctuation">)</span>\n./src/index.js <span class="token number">30</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n./src/others.js <span class="token number">1</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\nwebpack <span class="token number">5.1</span>.0 compiled successfully <span class="token keyword">in</span> <span class="token number">187</span> ms</code></pre> <pre><code class="hljs language-bash">webpack ./src/index.js ./src/others2.js -o dist/</code></pre> <p>This will form the bundle with both the files as separate entry points.</p> <pre><code class="hljs language-bash">asset main.js <span class="token number">142</span> bytes <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">[</span>minimized<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: main<span class="token punctuation">)</span>\n./src/index.js <span class="token number">30</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n./src/others2.js <span class="token number">1</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n./src/others.js <span class="token number">1</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\nwebpack <span class="token number">5.1</span>.0 compiled successfully <span class="token keyword">in</span> <span class="token number">198</span> ms</code></pre> <h2 id="default-configurations">Default Configurations<a href="#default-configurations" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>CLI will look for some default configurations in the path of your project, here are the config files picked up by CLI.</p> <p>If no <code>mode</code> is supplied via flags or config then this is the lookup order in increasing order</p> <blockquote> <p>example - config file lookup will be in order of .webpack/webpack.config.development.js > webpack.config.development.js > webpack.config.js</p> </blockquote> <pre><code class="hljs language-md">\'webpack.config\',\n\'webpack.config.dev\',\n\'webpack.config.development\',\n\'webpack.config.prod\',\n\'webpack.config.production\',\n\'.webpack/webpack.config\',\n\'.webpack/webpack.config.none\',\n\'.webpack/webpack.config.dev\',\n\'.webpack/webpack.config.development\',\n\'.webpack/webpack.config.prod\',\n\'.webpack/webpack.config.production\',\n\'.webpack/webpackfile\',\n</code></pre> <p>If <code>mode</code> is supplied, say <code>production</code> then config looking order will be -</p> <p><code>.webpack/webpack.config.production.* > .webpack/webpack.config.prod.* > webpack.config.production.* > webpack.config.prod.* > webpack.config.*</code></p> <h2 id="common-options">Common Options<a href="#common-options" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <blockquote class="warning"> <p>Note that Command Line Interface has a higher precedence for the arguments you use it with than your configuration file. For instance, if you pass <a href="/configuration/mode/#usage"><code>--mode="production"</code></a> to webpack CLI and your configuration file uses <code>development</code>, <code>production</code> will be used.</p> </blockquote> <p><strong>List all of the commands and flags available on the cli</strong></p> <pre><code class="hljs language-bash">webpack --help</code></pre> <p><strong>Show help for a single command or flag</strong></p> <pre><code class="hljs language-bash">webpack --help <span class="token operator">&#x3C;</span>command<span class="token operator">></span>\nwebpack --help --<span class="token operator">&#x3C;</span>flag<span class="token operator">></span></code></pre> <p><strong>Build source using a configuration file</strong></p> <p>Specifies a different <a href="/configuration">configuration</a> file to pick up. Use this if you want to specify something different from <code>webpack.config.js</code>, which is one of the default.</p> <pre><code class="hljs language-bash">webpack --config example.config.js</code></pre> <p><strong>Print result of webpack as a JSON</strong></p> <pre><code class="hljs language-bash">webpack --json</code></pre> <p><strong>If you want to store stats as json instead of printing it, you can use -</strong></p> <pre><code class="hljs language-bash">webpack --json stats.json</code></pre> <p>In every other case, webpack prints out a set of stats showing bundle, chunk and timing details. Using this option, the output can be a JSON object. This response is accepted by webpack\'s <a href="https://webpack.github.io/analyse/">analyse tool</a>, or chrisbateman\'s <a href="https://chrisbateman.github.io/webpack-visualizer/">webpack-visualizer</a>, or th0r\'s <a href="https://github.com/webpack-contrib/webpack-bundle-analyzer">webpack-bundle-analyzer</a>. The analyse tool will take in the JSON and provide all the details of the build in graphical form.</p> <h2 id="environment-options">Environment Options<a href="#environment-options" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>When the webpack configuration <a href="/configuration/configuration-types/#exporting-a-function">exports a function</a>, an "environment" may be passed to it.</p> <pre><code class="hljs language-bash">webpack --env production    <span class="token comment"># sets env.production == true</span></code></pre> <p>The <code>--env</code> argument accepts multiple values:</p> <table> <thead> <tr> <th>Invocation</th> <th>Resulting environment</th> </tr> </thead> <tbody> <tr> <td><div class="title"><p>Invocation</p><p>Resulting environment</p></div><div class="content"><p><code>webpack --env prod</code></p><p class="description mobile"><code>{ prod: true }</code></p><p></p></div></td> <td class="description desktop"><code>{ prod: true }</code></td> </tr> <tr> <td><div class="title"><p>Invocation</p><p>Resulting environment</p></div><div class="content"><p><code>webpack --env prod --env min</code></p><p class="description mobile"><code>{ prod: true, min: true }</code></p><p></p></div></td> <td class="description desktop"><code>{ prod: true, min: true }</code></td> </tr> <tr> <td><div class="title"><p>Invocation</p><p>Resulting environment</p></div><div class="content"><p><code>webpack --env platform=app --env production</code></p><p class="description mobile"><code>{ platform: "app", production: true }</code></p><p></p></div></td> <td class="description desktop"><code>{ platform: "app", production: true }</code></td> </tr> </tbody> </table> <blockquote class="tip"> <p>See the <a href="/guides/environment-variables/">environment variables</a> guide for more information on its usage.</p> </blockquote> <h2 id="configuration-options">Configuration Options<a href="#configuration-options" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <table> <thead> <tr> <th>Parameter</th> <th>Explanation</th> <th>Input type</th> <th>Default</th> </tr> </thead> <tbody> <tr> <td><div class="title"><p>Parameter</p><p>Explanation</p><p>Input type</p><p>Default</p></div><div class="content"><p><code>--config</code></p><p class="description mobile">Path to the configuration file</p><p></p></div></td> <td class="description desktop">Path to the configuration file</td> <td>string</td> <td><a href="/api/cli/#default-configurations">Default Configs</a></td> </tr> <tr> <td><div class="title"><p>Parameter</p><p>Explanation</p><p>Input type</p><p>Default</p></div><div class="content"><p><code>--config-name</code></p><p class="description mobile">Name of the configuration to use</p><p></p></div></td> <td class="description desktop">Name of the configuration to use</td> <td>string</td> <td></td> </tr> <tr> <td><div class="title"><p>Parameter</p><p>Explanation</p><p>Input type</p><p>Default</p></div><div class="content"><p><code>--env</code></p><p class="description mobile">Environment passed to the configuration, when it is a function</p><p></p></div></td> <td class="description desktop">Environment passed to the configuration, when it is a function</td> <td></td> <td></td> </tr> <tr> <td><div class="title"><p>Parameter</p><p>Explanation</p><p>Input type</p><p>Default</p></div><div class="content"><p><code>--mode</code></p><p class="description mobile">Mode to use</p><p></p></div></td> <td class="description desktop">Mode to use</td> <td>string</td> <td><code>\'production\'</code></td> </tr> </tbody> </table> <h2 id="analyzing-bundle">Analyzing Bundle<a href="#analyzing-bundle" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>You can also use <code>webpack-bundle-analyzer</code> to analyze your output bundles emitted by webpack. You can use <code>--analyze</code> flag to invoke it via CLI.</p> <pre><code class="hljs language-sh">webpack --analyze\n</code></pre> <blockquote class="warning"> <p>Make sure you have <code>webpack-bundle-analyzer</code> installed in your project else CLI will prompt you to install it.</p> </blockquote> <h2 id="progress">Progress<a href="#progress" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>To check the progress of any webpack compilation you can use the <code>--progress</code> flag.</p> <pre><code class="hljs language-bash">webpack --progress</code></pre> <p>To collect profile data for progress steps you can pass <code>profile</code> as value to <code>--progress</code> flag.</p> <pre><code class="hljs language-bash">webpack --progress<span class="token operator">=</span>profile</code></pre> <h2 id="pass-cli-arguments-to-nodejs">Pass CLI arguments to Node.js<a href="#pass-cli-arguments-to-nodejs" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>To pass arguments directly to Node.js process, you can use the <code>NODE_OPTIONS</code> option.</p> <p>For example, to increase the memory limit of Node.js process to 4 GB</p> <pre><code class="hljs language-bash"><span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">"--max-old-space-size=4096"</span> webpack</code></pre> <p>Also, you can pass multiple options to Node.js process</p> <pre><code class="hljs language-bash"><span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">"--max-old-space-size=4096 -r /path/to/preload/file.js"</span> webpack</code></pre> <h2 id="exit-codes-and-their-meanings">Exit codes and their meanings<a href="#exit-codes-and-their-meanings" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <table> <thead> <tr> <th>Exit Code</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><div class="title"><p>Exit Code</p><p>Description</p></div><div class="content"><p><code>0</code></p><p class="description mobile">Success</p><p></p></div></td> <td class="description desktop">Success</td> </tr> <tr> <td><div class="title"><p>Exit Code</p><p>Description</p></div><div class="content"><p><code>1</code></p><p class="description mobile">Errors from webpack</p><p></p></div></td> <td class="description desktop">Errors from webpack</td> </tr> <tr> <td><div class="title"><p>Exit Code</p><p>Description</p></div><div class="content"><p><code>2</code></p><p class="description mobile">Configuration/options problem or an internal error</p><p></p></div></td> <td class="description desktop">Configuration/options problem or an internal error</td> </tr> </tbody> </table> '}}]);