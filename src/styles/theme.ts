import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        yellow: "#FFBA08",
        gray:{
            "100":"#F5F8FA",
            "400":"#999999",
            "700":"#47585B",
            "900":"#1C1401",
        }
    },
    
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },

    styles: {
        global:{
            body:{
                bg: 'gray.100'
            }
        }
    }
})