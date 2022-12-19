// !Do not remove the Layout import
import Layout from '@layouts/HorizontalLayout'
import React from "react"

const HorizontalLayout = props => <Layout {...props}>{props.children}</Layout>

export default HorizontalLayout
