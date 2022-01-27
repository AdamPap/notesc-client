import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import InputField from "./InputField";

interface CardProps {
  cardTitle: string;
  cardContent: string;
}

export const Card: React.FC<CardProps> = ({ cardTitle, cardContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const initialFocusRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <Box shadow="sm" rounded="md" bg="white" w="100%" p={1}>
      <Flex role="group" position="relative" py={2} px={3}>
        <Text>{cardTitle}</Text>
        <Popover
          initialFocusRef={initialFocusRef}
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          placement="right"
          closeOnBlur={true}
        >
          <PopoverTrigger>
            <IconButton
              onClick={() => setIsOpen(true)}
              position="absolute"
              top={0}
              right={0}
              opacity={isOpen ? "1" : "0"}
              _groupHover={{ opacity: 1 }}
              _hover={{ bg: "green.100" }}
              size="xs"
              aria-label="Edit Card"
              icon={<MdModeEditOutline />}
            />
          </PopoverTrigger>
          <PopoverContent bg="white" shadow="lg" position="relative">
            <Flex flexDirection="column" position="absolute" left="104%">
              <Button colorScheme="green">Open Card</Button>
              <Button mt={2} colorScheme="green">
                Edit labels
              </Button>
              <Button mt={2} colorScheme="green">
                Edit dates
              </Button>
              <Button mt={2} colorScheme="green">
                Archive
              </Button>
            </Flex>
            <Formik
              initialValues={{
                cardTitle: cardTitle,
                cardContent: cardContent,
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <PopoverHeader fontWeight="semibold">
                  {/* <InputField
                    ref={initialFocusRef}
                    variant="flushed"
                    name="cardTitle"
                    label="Title"
                  /> */}
                  <Heading size="md">{cardTitle}</Heading>
                </PopoverHeader>
                <PopoverArrow bg="white" />
                <PopoverCloseButton />
                <PopoverBody>
                  <InputField
                    ref={initialFocusRef}
                    variant="unstyled"
                    name="cardContent"
                    label="Content"
                  />
                </PopoverBody>
                <PopoverFooter d="flex" justifyContent="flex-end">
                  <ButtonGroup size="sm">
                    <Button colorScheme="blue" type="submit">
                      Save
                    </Button>
                  </ButtonGroup>
                </PopoverFooter>
              </Form>
            </Formik>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};
