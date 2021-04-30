import * as React from "react"
import {Box, Center, VStack, Text} from "@chakra-ui/react"

import {useBgAndBorder, useOrder} from "../../context/hooks"

const Order: React.FC = () => {
  const bg = useBgAndBorder()
  const order = useOrder()

  return (
    <VStack position="fixed" right="150px" spacing={4} top="30%" w="250px">
      <Center
        bg="linear-gradient(342.3deg, #FFFFFF 2.05%, #FFF4E0 100.21%)"
        borderRadius="24px"
        h="300px"
        w="100%"
      >
        <VStack>
          <Box
            borderRadius="28.7px 28.7px 7.18px 7.18px"
            h="32px"
            style={{background: `${bg[0].bg}`, border: `${bg[0].border}`}}
            transition="all 0.5s ease-out"
            w="150px"
          />
          <Box
            borderRadius="28.7px"
            h="22px"
            style={{background: `${bg[1].bg}`, border: `${bg[1].border}`}}
            transition="all 0.5s ease-out"
            w="150px"
          />
          <Box
            borderRadius="28.7px"
            h="22px"
            style={{background: `${bg[2].bg}`, border: `${bg[2].border}`}}
            transition="all 0.5s ease-out"
            w="150px"
          />
          <Box
            borderRadius="28.7px"
            h="32px"
            style={{background: `${bg[3].bg}`, border: `${bg[3].border}`}}
            transition="all 0.5s ease-out"
            w="150px"
          />
          <Box
            borderRadius="7.18px 7.18px 28.7px 28.7px"
            h="32px"
            style={{background: `${bg[4].bg}`, border: `${bg[4].border}`}}
            transition="all 0.5s ease-in"
            w="150px"
          />
        </VStack>
      </Center>
      <Center bg="#FFD789" borderRadius="16px" h="70px" w="100%">
        <Text
          color="14142B"
          fontSize="24px"
          fontWeight="bold"
          letterSpacing="1px"
          lineHeight="32px"
        >
          ${order.price}
        </Text>
      </Center>
    </VStack>
  )
}

export default Order
