import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function HireMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  //   Form validation state
  const [errors, setErrors] = useState({});

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const toast = useToast();

  //   Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      setButtonText("Sending");

      let data = {
        name,
        email,
        message,
      };
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setShowSuccessMessage(true);
          setName("");
          setEmail("");
          setMessage("");
          setButtonText("Send");
          toast({
            description: "Message successfully sent",
            duration: 9000,
            isClosable: true,
            status: "success",
          });
        } else {
          if (!showSuccessMessage) {
            toast({
              description: "An error occured",
              duration: 9000,
              isClosable: true,
              colorScheme: "brand",
              status: "error",
            });
          }
        }
      });
    }
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
    return isValid;
  };

  const style = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "80%",
    paddingLeft: "20px",
    paddingRight: "20px",
    maxWidth: "800px",
    width: "100%",
  };

  return (
    <section id="hireme">
      <SectionHeading title="Wanna go on a hike with me?" />
      <form style={style}>
        <FormControl
          id="name"
          width={["100%", "100%", "48%", "48%"]}
          pb="10px"
          isRequired={true}
          colorScheme="brand"
          isInvalid={errors["name"]}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl
          id="email"
          width={["100%", "100%", "48%", "48%"]}
          isRequired={true}
          colorScheme="brand"
          isInvalid={errors["email"]}
        >
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <Textarea
          id="message"
          placeholder="Tell me something"
          size="md"
          width="100%"
          height="200px"
          mt="20px"
          isRequired={true}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          isInvalid={errors["name"]}
        />
        <Center width={["100%", "100%", "48%", "48%"]} ml="auto" mr="auto">
          <Button
            mt={4}
            colorScheme="brand"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {buttonText}
          </Button>
        </Center>
      </form>
    </section>
  );
}
