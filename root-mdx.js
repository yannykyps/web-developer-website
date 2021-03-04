import React from "react"
import {MDXProvider} from "@mdx-js/react"
import {Headings, Code, Blockquote, PrismSetup} from "./src/components/Complete"


const components = {
    h1: Headings.myH1,
    h2: Headings.myH2,
    h3: Headings.myH3,
    h4: Headings.myH4,
    ul: Headings.myUl,
    inlineCode: Code,
    blockquote: Blockquote,
    pre: PrismSetup,
}

export const wrapMDX = ({element}) => {
    return <MDXProvider components={components}>{element}</MDXProvider>
}