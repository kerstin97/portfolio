import { VStack, Image } from "@chakra-ui/react"
import Social from "./social.js"
import Logo from "./svgs/logo.js"

export default function LeftSection(props) {
    function changeColor(){
        console.log("this")
    }
    return (
        <VStack className="leftSection" display={['none','none','flex','flex']} pb="50px" pt="20px" justifyContent="space-between" flexDir="column">
            <Logo fill={props.isDark ? "#fff" : "#000"} alt="Logo"/>
            <Social/>   
            <Image src={"images/theme.svg"} width="40px" alt="mode" onClick={props.toggleColorMode}/>
        </VStack>
        
    )
}