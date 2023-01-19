import React from "react";
import { Card, CardBody, Flex, Text, Box, CardFooter, Button, Icon } from "@chakra-ui/react";

const MapIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.2857 8.24993C15.2857 12.7499 9.49999 16.6071 9.49999 16.6071C9.49999 16.6071 3.71428 12.7499 3.71428 8.24993C3.71428 6.71547 4.32384 5.24385 5.40888 4.15881C6.49391 3.07378 7.96553 2.46422 9.49999 2.46422C11.0345 2.46422 12.5061 3.07378 13.5911 4.15881C14.6761 5.24385 15.2857 6.71547 15.2857 8.24993Z"
      stroke="#020202"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 10.1785C10.5651 10.1785 11.4286 9.31505 11.4286 8.24993C11.4286 7.18481 10.5651 6.32136 9.5 6.32136C8.43488 6.32136 7.57143 7.18481 7.57143 8.24993C7.57143 9.31505 8.43488 10.1785 9.5 10.1785Z"
      stroke="#020202"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Benefit = {
  id: number;
  label: string;
};

interface LenderCardProps {
  benefits?: Benefit[];
  priceRange: { min: string; max: string };
  info: string;
  companyName: string;
}

function LenderCard({
  benefits = [],
  priceRange,
  info,
  companyName,
}: LenderCardProps): JSX.Element {
  return (
    <>
      <Card
        width="100%"
        borderWidth="2.25px"
        borderRadius="12px"
        borderColor="#868686"
        borderBottomWidth="4px"
        zIndex={1}
      >
        <Box
          position="absolute"
          backgroundColor="#7B5BE4"
          color="white"
          fontSize="14px"
          paddingY="2px"
          width="121px"
          fontWeight="bold"
          left="18rem"
          top={-3}
          borderRadius="6px"
          textAlign="center"
        >
          Good Fit
        </Box>
        <CardBody
          textAlign="left"
          paddingLeft="25px"
          paddingTop="18px"
          paddingBottom="23px"
          maxW="md"
        >
          <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }} fontWeight="bold">
            Revenue Based Financing
          </Text>
          <Text marginBottom="9px" fontWeight="semibold">
            By {companyName}
          </Text>
          <Box as="div" marginBottom="9px" display="flex" alignItems="center">
            <Icon as={MapIcon} />
            <Text marginLeft="12px" fontWeight="semibold">
              Location
            </Text>
          </Box>
          <Text fontWeight="semibold">
            Get Funded in{" "}
            <Box as="span" fontWeight="bold">
              12 days.
            </Box>
          </Text>
        </CardBody>
        <CardFooter
          borderTopWidth="2.25px"
          borderColor="#868686"
          paddingY="16px"
          paddingX="25px"
          boxShadow="0px 10px 10px 0 rgba(0,0,0,0.35);"
        >
          <Text fontWeight="bold" fontSize="22px" color="#7B5BE4">
            ${priceRange.min} - ${priceRange.max}
          </Text>
        </CardFooter>
      </Card>
      <Card
        borderRadius="12px"
        borderColor="#C8C6C6"
        borderTopRadius={0}
        borderTop={0}
        borderWidth="2.25px"
      >
        <CardBody>
          <Flex align="center" justify="space-between" fontSize="xl" fontWeight="bold">
            <Text>About the Lender</Text>{" "}
            <Button
              variant={{ base: "bagsNormal", xl: "bagsDesktop" }}
              paddingY="6px"
              paddingX="19px"
              _hover={{ bg: "0, 0, 0, 0.75", transform: "scale(1.05)" }}
            >
              <Text fontWeight="bold" color="white">
                Learn more
              </Text>
            </Button>
          </Flex>
          <Text textAlign="left" marginBottom="26px" marginTop="17px">
            {info}
          </Text>
          {benefits?.map((benefit) => (
            <Box
              key={benefit.id}
              fontWeight="bold"
              fontSize="16px"
              color="#7B5BE4"
              textAlign="left"
              backgroundColor="#ECEAF2"
              width="311px"
              borderRadius="24px"
              paddingLeft="17px"
              marginBottom="20px"
            >
              {benefit.label}
            </Box>
          ))}
        </CardBody>
      </Card>
    </>
  );
}

export default LenderCard;
