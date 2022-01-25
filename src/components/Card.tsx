import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
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

interface CardProps {
  cardTitle: string;
}

export const Card: React.FC<CardProps> = ({ cardTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box shadow="sm" rounded="md" bg="white" w="100%" p={1}>
      <Flex role="group" position="relative" py={2} px={3}>
        <Text>{cardTitle}</Text>
        <Popover
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
          <PopoverContent bg="white">
            <PopoverHeader fontWeight="semibold">
              <Formik
                initialValues={{
                  cardTitle: cardTitle,
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Flex>
                    <Box mr={2}>
                      <label htmlFor="cardTitle">Title</label>
                    </Box>
                    <Field id="cardTitle" name="cardTitle" type="text" />
                  </Flex>
                  <Button size="sm" colorScheme="teal" type="submit">
                    Submit
                  </Button>
                </Form>
              </Formik>
            </PopoverHeader>
            <PopoverArrow bg="white" />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure you want to continue with your action?
            </PopoverBody>
            <PopoverFooter d="flex" justifyContent="flex-end">
              <ButtonGroup size="sm">
                <Button variant="outline">Cancel</Button>
                <Button colorScheme="red">Apply</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};
