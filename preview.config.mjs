export default {
  paths: {
    views: "views",
    partials: [
      {
        dir: "views/partials",
      },
      {
        dir: "external-partials",
        namespace: "external/namespace",
      },
    ],
    public: "public",
    "test-data": "test-data",
    layouts: "layouts",
  },
  helpers: {
    str: (content) => content.fn(this),
    quote: (content) => content.fn(this),
    pix: (content) => content.fn(this),
    userdate: (content) => content.fn(this),
    shortentext: (content) => content.fn(this),
  },
};
