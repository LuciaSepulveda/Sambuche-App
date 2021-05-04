import {Center, Container, Grid, GridItem, Text, HStack} from "@chakra-ui/react"
import * as React from "react"

import FinalOrder from "../pages/FinalOrder/FinalOrder"
import {viewFinal} from "../context/hooks"
import Step from "../components/Step/Step"
import Order from "../components/Order"
import {steps} from "../data/data"

const App: React.FC = () => {
  const final = viewFinal()

  if (final === true) {
    return <FinalOrder />
  }

  return (
    <Container maxW="100vw">
      <Order />
      <Grid m="auto" mt="5%" rowGap={10} templateColumns="repeat(4, 1fr)">
        {steps.map((elem) => (
          <GridItem key={elem.name} colSpan={3} h="90vh">
            <HStack ml="5%">
              <Text
                align="left"
                color="#5F2EEA"
                fontSize="40px"
                fontWeight="bold"
                letterSpacing="1px"
                lineHeight="32px"
              >
                {elem.title}
              </Text>
              <Text
                color="#BCA4FF"
                fontSize="24px"
                fontWeight="bold"
                letterSpacing="1px"
                lineHeight="32px"
              >
                {elem.selection}
              </Text>
            </HStack>
            <Center mt="5%" w="100%">
              <Step food={elem.food} name={elem.name} />
            </Center>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default App
