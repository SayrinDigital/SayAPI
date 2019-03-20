'use strict';

/**
 * Blogcategory.js controller
 *
 * @description: A set of functions called "actions" for managing `Blogcategory`.
 */

module.exports = {

  /**
   * Retrieve blogcategory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.blogcategory.search(ctx.query);
    } else {
      return strapi.services.blogcategory.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a blogcategory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.blogcategory.fetch(ctx.params);
  },

  /**
   * Count blogcategory records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.blogcategory.count(ctx.query);
  },

  /**
   * Create a/an blogcategory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blogcategory.add(ctx.request.body);
  },

  /**
   * Update a/an blogcategory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blogcategory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blogcategory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blogcategory.remove(ctx.params);
  }
};
