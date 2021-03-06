var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_nested_tags_overlay_body_tag = marko_loadTag(null, "body", 0),
    test_nested_tags_overlay_footer_tag = marko_loadTag(null, "footer", 0),
    test_nested_tags_overlay_tag = marko_loadTag(require("./tags/test-nested-tags-overlay/renderer"), 0, 0, 1);

function render(data, out) {
  test_nested_tags_overlay_tag({
      header: "data.header"
    }, out, 0, function renderBody(out, test_nested_tags_overlay0) {
    test_nested_tags_overlay_body_tag({
        className: "my-body",
        renderBody: function renderBody(out) {
          out.w("Body content");
        }
      }, out, test_nested_tags_overlay0);

    test_nested_tags_overlay_footer_tag({
        className: "my-footer",
        renderBody: function renderBody(out) {
          out.w("Footer content");
        }
      }, out, test_nested_tags_overlay0);
  });
}

template._ = render;
