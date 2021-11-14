import { VStack, Image } from "@chakra-ui/react"
import Social from "./social.js"

export default function LeftSection(props) {
    function changeColor(){
        props.toggleColorMode
        console.log(this)
    }
    return (
        <VStack className="leftSection" display="flex" pb="50px" justifyContent="space-between" flexDir="column">
            <Image src={"images/logo.svg"} alt="Logo" width="80px" pt="50px"/>
            <Social/>
            <Image src={"images/theme.svg"} width="40px" alt="mode" onClick={props.toggleColorMode}/>
        </VStack>
        
    )
}