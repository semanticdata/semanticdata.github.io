module.exports = {
  layout: 'post',
  tags: 'posts',
  permalink: function (data) {
    // slug override for localized URL slugs
    if (data.seo?.slug) {
      return `/${data.lang}/skrift/${this.slugify(data.seo.slug)}/`;
    } else {
      return `/${data.lang}/skrift/${this.slugify(data.page.fileSlug)}/`;
    }
  },
};
