import server from "@frontity/core/src/server";
import frontity__google_tag_manager_analytics_default from "@frontity/google-tag-manager-analytics/src/index";
import twentynineteen_theme_default from "twentynineteen-theme/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";
import frontity__head_tags_default from "@frontity/head-tags/src/index";
import frontity__wp_comments_default from "@frontity/wp-comments/src/index";

const packages = {
  frontity__google_tag_manager_analytics_default,
  twentynineteen_theme_default,
  frontity__wp_source_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
  frontity__head_tags_default,
  frontity__wp_comments_default,
};

export default server({ packages });

