import { Box } from "@chakra-ui/react"
import React from "react"

interface LayoutProps {
    children: React.ReactNode
}
const Layout =({children}:LayoutProps)=>{
    return <Box minH="100vh" h="100%" w="100%" bg="#FAFAFA">
        {children}
    </Box>
}

export default Layout