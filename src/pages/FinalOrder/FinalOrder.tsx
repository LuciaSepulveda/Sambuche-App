import {
  Button,
  Text,
  Grid,
  HStack,
  GridItem,
  Thead,
  Tr,
  Th,
  Table,
  Tbody,
  Td,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react"
import * as React from "react"
import {motion} from "framer-motion"

import {useOrder, useReset} from "../../context/hooks"
import Order from "../../components/Order/Order"

const FinalOrder: React.FC = () => {
  const order = useOrder()
  const reset = useReset()

  return (
    <>
      <Order />
      <motion.div animate={{x: [-100, 0]}} style={{width: "100%"}}>
        <Grid m="auto" mt="3%" rowGap={10} templateColumns="repeat(3, 1fr)" w="80%">
          <GridItem alignSelf="center" colSpan={2} h="85vh" name="breads" p={5}>
            <HStack mb="3%" ml="0" mt="10%">
              <Text
                align="left"
                color="#5F2EEA"
                fontSize="40px"
                fontWeight="bold"
                letterSpacing="1px"
                lineHeight="32px"
              >
                Detail
              </Text>
              <Text
                color="#BCA4FF"
                fontSize="24px"
                fontWeight="bold"
                letterSpacing="1px"
                lineHeight="32px"
              >
                Here is your purchase...
              </Text>
            </HStack>
            <Table>
              <Thead bg="#EFF0F7" border="1px solid #D9DBE9" color="14142B">
                <Tr>
                  <Th
                    border="1px solid #D9DBE9"
                    fontSize="16px"
                    fontWeight="extrabold"
                    lineHeight="32px"
                    textAlign="center"
                  >
                    What?
                  </Th>
                  <Th
                    border="1px solid #D9DBE9"
                    fontSize="16px"
                    fontWeight="extrabold"
                    lineHeight="32px"
                    textAlign="center"
                  >
                    How Much?
                  </Th>
                </Tr>
              </Thead>
              <Tbody
                color="#4E4B66"
                fontSize="16px"
                fontWeight="normal"
                letterSpacing="0.75px"
                lineHeight="28px"
              >
                {order.bread.name !== "" && (
                  <Tr>
                    <Td border="1px solid #D9DBE9" textAlign="center">
                      {order.bread.name}
                    </Td>
                    <Td border="1px solid #D9DBE9" textAlign="center">
                      ${order.bread.price}
                    </Td>
                  </Tr>
                )}
                {order.meat.name !== "none" && order.meat.name !== "" && (
                  <Tr>
                    <Td border="1px solid #D9DBE9" textAlign="center">
                      {order.meat.name}
                    </Td>
                    <Td border="1px solid #D9DBE9" textAlign="center">
                      ${order.meat.price}
                    </Td>
                  </Tr>
                )}
                {order.cheese.name !== "none" && order.cheese.name !== "" && (
                  <Tr>
                    <Td border="1px solid #D9DBE9" textAlign="center">
                      {order.cheese.name}
                    </Td>
                    <Td border="1px solid #D9DBE9" textAlign="center">
                      ${order.cheese.price}
                    </Td>
                  </Tr>
                )}
                {order.vegetables
                  .filter((elem) => elem.name !== "none" && elem.name !== "")
                  .map((elem) => (
                    <Tr key={elem.name}>
                      <Td border="1px solid #D9DBE9" textAlign="center">
                        {elem.name}
                      </Td>
                      <Td border="1px solid #D9DBE9" textAlign="center">
                        ${elem.price}
                      </Td>
                    </Tr>
                  ))}
                {order.ingredients
                  .filter((elem) => elem.name !== "none" && elem.name !== "")
                  .map((elem) => (
                    <Tr key={elem.name}>
                      <Td border="1px solid #D9DBE9" textAlign="center">
                        {elem.name}
                      </Td>
                      <Td border="1px solid #D9DBE9" textAlign="center">
                        ${elem.price}
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
            <VStack mt="3%" spacing={2}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    _hover={{bg: "#2A00A2"}}
                    bg="#5F2EEA"
                    borderRadius="40px"
                    color="white"
                    h="64px"
                    transition="all 0.5s ease-in"
                    w="200px"
                  >
                    GIVE ME!
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton border="1px solid #D9DBE9" color="white" />
                  <PopoverHeader bg="#2A00A2" color="white">
                    Confirmation
                  </PopoverHeader>
                  <PopoverBody>Order ready! &#127828; &#128076;</PopoverBody>
                </PopoverContent>
              </Popover>
              <Button
                _hover={{bg: "#2A00A2", color: "white"}}
                border="2px solid #5F2EEA"
                borderRadius="40px"
                color="#5F2EEA"
                h="64px"
                transition="all 0.5s ease-in"
                w="200px"
                onClick={reset}
              >
                Do it again
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </motion.div>
    </>
  )
}

export default FinalOrder
