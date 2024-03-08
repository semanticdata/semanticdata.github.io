// @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig

// Imports --------------------------------------------

const {
  EleventyI18nPlugin,
  EleventyHtmlBasePlugin,
  EleventyRenderPlugin,
} = require('@11ty/eleventy');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItIns = require('markdown-it-ins');
const markdownItMark = require('markdown-it-table-of-contents');
const markdownItSub = require('markdown-it-sub');
const markdownItSup = require('markdown-it-sup');
const markdownItTableOfContents = require('markdown-it-table-of-contents');
const pluginEmbedEverything = require('eleventy-plugin-embed-everything');
const pluginRSS = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');

// Local Imports --------------------------------------

const {formatDate} = require('./src/_config/filters/dates');

// 11ty -----------------------------------------------

module.exports = (eleventyConfig) => {
  // Global Settings --------------------------------

  eleventyConfig.addGlobalData('settings', {
    // these get merged with _data/settings.js
    url:
      // process.env.URL ||
      // process.env.VERCEL_URL ||
      // process.env.CF_PAGES_URL ||
      'https://miguelpimentel.do',
    isProduction: process.env.NODE_ENV === 'production',
    isProduction: process.env.VERCEL_ENV === 'production',
    // isStaging:
    //   (process.env.URL && process.env.URL.includes('github.io')) ||
    //   (process.env.VERCEL_URL && process.env.VERCEL_URL.includes('vercel.app')) ||
    //   (process.env.CF_PAGES_URL &&
    //     process.env.CF_PAGES_URL.includes('pages.dev')) ||
    //   false,
  });

  // Watch Targets ----------------------------------

  eleventyConfig.addWatchTarget('./src/assets');
  eleventyConfig.addWatchTarget('./src/_layouts');

  // Layouts ----------------------------------------

  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('rss', 'rss.njk');
  eleventyConfig.addLayoutAlias('rssxsl', 'rss.xsl.njk');
  eleventyConfig.addLayoutAlias('json', 'json.njk');
  eleventyConfig.addLayoutAlias('manifest', 'manifest.njk');
  eleventyConfig.addLayoutAlias('home', 'home.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');
  eleventyConfig.addLayoutAlias('posts', 'posts.njk');
  eleventyConfig.addLayoutAlias('note', 'note.njk');
  eleventyConfig.addLayoutAlias('notes', 'notes.njk');

  // Plugins ----------------------------------------

  const markdownItOptions = {
    html: true,
    linkify: true,
    typographer: true,
  };

  const md = markdownIt(markdownItOptions)
    .use(require('markdown-it-anchor'))
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-table-of-contents'))
    .use(function (md) {
      // Recognize Mediawiki links ([[text]])
      md.linkify.add('[[', {
        validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
        normalize: (match) => {
          const parts = match.raw.slice(2, -2).split('|');
          parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, '');
          // parts[0] = parts[0].replace(/\b\s+\b/, '-');
          match.text = (parts[1] || parts[0]).trim();
          match.url = `/en/notes/${parts[0].trim()}/`;
        },
      });
    });

  eleventyConfig.addPlugin(require('./src/_config/plugins/drafts'));
  eleventyConfig.addPlugin(pluginTOC, {
    ul: true,
  });
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {defaultLanguage: 'en'});
  eleventyConfig.addPlugin(pluginEmbedEverything, {
    use: ['twitter', 'youtube', 'vimeo'],
    twitter: {
      options: {
        embedClass: 'oembed oembed-twitter',
        doNotTrack: true,
      },
    },
    vimeo: {
      options: {
        embedClass: 'oembed oembed-vimeo',
        //wrapperStyle
      },
    },
    youtube: {
      options: {
        embedClass: 'oembed oembed-youtube',
        modestBranding: true,
        lazy: true,
        lite: {
          thumbnailQuality: 'maxresdefault',
          css: {
            inline: true,
          },
          js: {
            inline: true,
          },
        },
      },
    },
  });

  // Transforms -------------------------------------

  eleventyConfig.addPlugin(require('./src/_config/transforms/css'));
  eleventyConfig.addPlugin(require('./src/_config/transforms/html'));
  eleventyConfig.addPlugin(require('./src/_config/transforms/js'));

  // Shortcodes --------------------------------------

  eleventyConfig.addShortcode('version', () => `${+new Date()}`);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode(
    'build',
    () => `${new Date().toISOString().split('T')[0]}`,
  );
  eleventyConfig.addShortcode(
    'image',
    require('./src/_config/shortcodes/image'),
  );
  eleventyConfig.addShortcode('currentDate', (date = DateTime.now()) => {
    return date;
  });

  // Filters ----------------------------------------

  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter(
    'languageFilter',
    require('./src/_config/filters/language'),
  );
  eleventyConfig.addFilter(
    'translate',
    require('./src/_config/filters/translate'),
  );
  eleventyConfig.addFilter(
    'mimetype',
    require('./src/_config/filters/mimetype'),
  );
  eleventyConfig.addFilter('cdnify', require('./src/_config/filters/cdnify'));
  eleventyConfig.addFilter('widont', require('./src/_config/filters/widont'));
  eleventyConfig.addFilter('random', require('./src/_config/filters/random'));
  eleventyConfig.addFilter('where', require('./src/_config/filters/where'));
  eleventyConfig.addFilter('sort', require('./src/_config/filters/sort'));
  eleventyConfig.addFilter('base64', require('./src/_config/filters/base64'));
  eleventyConfig.addFilter(
    'readingTime',
    require('./src/_config/filters/readingtime'),
  );
  eleventyConfig.addFilter('markdownify', (string) => {
    return md.render(string);
  });

  // Passthrough -------------------------------------

  eleventyConfig.addPassthroughCopy({'./src/assets/': './assets/'});

  // Markdown ----------------------------------------

  eleventyConfig.setLibrary('md', md);
  eleventyConfig.amendLibrary('md', (mdLib) => {
    mdLib.use(markdownItIns);
    mdLib.use(markdownItMark);
    mdLib.use(markdownItSub);
    mdLib.use(markdownItSup);
    mdLib.use(markdownItAttrs);
    mdLib.use(markdownItFootnote);
    mdLib.use(markdownItTableOfContents);
    mdLib.use(markdownItAnchor);
  });

  // 11ty Settings -----------------------------------

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    // If your site deploys to a subdirectory, change `pathPrefix`
    pathPrefix: '/',

    dir: {
      input: 'src',
      output: '_site',
      layouts: '_layouts',
      includes: '_includes',
      data: '_data',
    },
  };
};
