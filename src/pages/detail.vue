<template>
    <div>
        <article class="post">
            <h2><a class="title">{{title}}</a></h2>
            <span class="time">{{time}}</span>
            <div class="d-block comment-body markdown-body  js-comment-body" v-html="body"></div>
        </article>
    </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
// import 'highlight.js/styles/default.css';
// import 'highlight.js/styles/googlecode.css'
import "highlight.js/styles/atom-one-dark.css";
// let marked = require('marked');
// let hljs = require('highlight.js');
// import 'highlight.js/styles/default.css';
// const highlightCode = () => {
//     const preEl = document.querySelectorAll('pre')

//     preEl.forEach((el) => {
//         hljs.highlightBlock(el);
//         el.a
//     })
// };
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
});
//
// marked.setOptions({
//     renderer: new marked.Renderer(),
//     highlight: function(code) {
//         return require('highlight.js').highlightAuto(code).value;
//     },
//     pedantic: false,
//     gfm: true,//启动Github样式的Markdown
//     tables: true,// 支持Github表格，必须打开gfm选项
//     breaks: false,//支持Github换行符，必须打开gfm选项
//     sanitize: false,//原始输出，忽略HTML标签
//     smartLists: true,//优化列表输出
//     smartypants: false,
//     xhtml: false
// });
export default {
  data() {
    return {
      title: "",
      time: "",
      body: ""
    };
  },
  mounted() {
    this.getDetail();
  },
  updated() {
    // highlightCode();
  },
  methods: {
    getDetail() {
      // hljs.initHighlightingOnLoad();
      // highlightCode();
      this.$api
        .query()
        .then(response => {
          // console.log(response.data[0].body);
          this.title = response.data[0].title;
          this.body = marked(response.data[0].body || "", {
            sanitize: true
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less">
//代码
.markdown-body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}
.comment-body {
  width: 100%;
  padding: 15px;
  overflow: visible;
  font-size: 14px;
}

// blockquote {
//   display: block;
//   -webkit-margin-before: 1em;
//   -webkit-margin-after: 1em;
//   -webkit-margin-start: 40px;
//   -webkit-margin-end: 40px;
//   margin: 0;
// }

.d-block {
  display: block !important;
  border-collapse: collapse;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}
.markdown-body > *:first-child {
  margin-top: 0 !important;
}
.markdown-body blockquote {
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}

h2 {
  display: block;
  font-size: 1.5em;
  -webkit-margin-before: 0.83em;
  -webkit-margin-after: 0.83em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}

// .markdown-body code {
//   padding: 0.2em 0.4em;
//   margin: 0;
//   font-size: 85%;
//   background-color: rgba(27, 31, 35, 0.05);
//   border-radius: 3px;
// }

// code,
// kbd,
// pre,
// samp {
//   font-family: monospace, monospace;
//   font-size: 1em;
// }

// code {
//   font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
//     monospace;
//   font-size: 12px;
// }

code {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  padding: 0.2em 0.4em;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 12px;
}

.markdown-body code {
  font-size: 85%;
}

p {
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
p {
  margin-top: 0;
  margin-bottom: 10px;
}
.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre {
  margin-top: 0;
  margin-bottom: 16px;
}

.comment-body pre code {
  overflow: visible !important;
  background-color: transparent;
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body pre code,
.markdown-body pre {
  // padding: 16px;
  padding: 4px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}

.markdown-body pre {
  word-wrap: normal;
}

pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  font-size: 12px;
}

// .timeline-comment {
//     position: relative;
//     background-color: #fff;
//     border: 1px solid #d1d5da;
//     border-radius: 3px;
// }
//新的-----------------------------------------------------------------
//标题
.markdown-body h1,
.markdown-body h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eaecef;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.25em;
}
h4 {
  font-size: 1em;
}
h5 {
  font-size: 0.875em;
}
h6 {
  font-size: 0.85em;
  color: #6a737d;
}
//代码块
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
  word-wrap: normal;
}

//序列
.markdown-body ul,
.markdown-body ol {
  padding-left: 2em;
}
//公有样式
.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre {
  margin-top: 0;
  margin-bottom: 16px;
}
//分隔符hr
.markdown-body hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
}
</style>