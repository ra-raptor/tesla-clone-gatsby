/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
;("use strict")

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key : "my-portal"}
      id={pluginOptions.id ? pluginOptions.id : "my-portal"}
    >
      {pluginOptions.text}
    </div>,
  ])
}
