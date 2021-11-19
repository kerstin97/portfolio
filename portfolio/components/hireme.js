import { FormControl, FormLabel, Input, FormHelperText, Textarea, Button, Center } from "@chakra-ui/react";
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

export default function HireMe() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

     // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    //   Handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let isValidForm = handleValidation();
    
        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
              body: JSON.stringify({
                email: email,
                name: name,
                message: message,
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            });
      
            const { error } = await res.json();
            if (error) {
              console.log(error);
              setShowSuccessMessage(false);
              setShowFailureMessage(true);
              setButtonText("Send");
              return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        }
        console.log(name, email, message);
    };

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (name.length <= 0) {
            tempErrors["name"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };


    const style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: "80%",
        paddingLeft: "20px",
        paddingRight: "20px",
        maxWidth: "800px",
        width: "100%"
    }
    return (
        <section id="hireme">
            <SectionHeading title="Wanna go on a hike with me?" />
            <form style={style}  onSubmit={handleSubmit}>
                <FormControl id="name" width={["100%","100%","48%","48%"]} pb="10px" isRequired="true">
                    <FormLabel>Name</FormLabel>
                    <Input type="name" value={name} onChange={(e) => { setName(e.target.value); } }/>
                </FormControl>
                <FormControl id="email" width={["100%","100%","48%","48%"]} isRequired="true">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value); } } />
                </FormControl>
                <Textarea
                    id="message"
                    placeholder="Tell me something"
                    size="md"
                    width="100%"
                    height="200px"
                    mt="20px"
                    isRequired="true"
                    value={message} 
                    onChange={(e) => { setMessage(e.target.value); } }
                />
                <Center width={["100%","100%","48%","48%"]}
                        ml="auto"
                        mr="auto">
                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="submit"
                    >
                        {buttonText}
                </Button>
            </Center>
            </form>
        </section>
        
    )
}
