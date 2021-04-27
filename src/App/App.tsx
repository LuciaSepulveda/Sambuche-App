import {
  Center,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Text,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react"
import * as React from "react"

import {useStatus} from "../context/hooks"
import Bread from "../components/Bread/Bread"
import Order from "../components/Order"
import {Food} from "../types/types"
import panItaliano from "../assets/panItaliano.png"
import panOregano from "../assets/panOregano.png"
import panRye from "../assets/panRye.png"
import jamon from "../assets/jamon.png"
import ketchup from "../assets/ketchup.png"
import lechuga from "../assets/lechuga.png"
import mayonesa from "../assets/mayonesa.png"
import mostaza from "../assets/mostaza.png"
import quesoCheddar from "../assets/quesoCheddar.png"
import quesoDanbo from "../assets/quesoDanbo.png"
import roastBeef from "../assets/roastBeef.png"
import tomate from "../assets/tomate.png"
import cebolla from "../assets/cebolla.png"

const App: React.FC = () => {
  const status = useStatus()

  const breads: Food[] = [
    {name: "Italian Bread", price: 20, url: `${panItaliano}`, value: "1"},
    {name: "Oregan + Cheese", price: 10, url: `${panOregano}`, value: "2"},
    {name: "Rye Bread", price: 30, url: `${panRye}`, value: "3"},
  ]

  const meats: Food[] = [
    {name: "Roast Beef", price: 20, url: `${roastBeef}`, value: "1"},
    {name: "Ham", price: 10, url: `${jamon}`, value: "2"},
    {name: "none", price: 0, url: "", value: "3"},
  ]

  const cheeses: Food[] = [
    {name: "Danbo", price: 10, url: `${quesoDanbo}`, value: "1"},
    {name: "Cheddar", price: 20, url: `${quesoCheddar}`, value: "2"},
    {name: "none", price: 0, url: "", value: "3"},
  ]

  const vegetables: Food[] = [
    {name: "Lettuce", price: 15, url: `${lechuga}`, value: "1"},
    {name: "Tomato", price: 20, url: `${tomate}`, value: "2"},
    {name: "Onion", price: 16, url: `${cebolla}`, value: "3"},
  ]

  const ingredients: Food[] = [
    {name: "Mayo", price: 10, url: `${mayonesa}`, value: "1"},
    {name: "Mustard", price: 15, url: `${mostaza}`, value: "2"},
    {name: "Ketchup", price: 20, url: `${ketchup}`, value: "3"},
    {name: "none", price: 0, url: "", value: "4"},
  ]

  return (
    <Container maxW="90vw">
      <Order />
      <Grid m="auto" mt="5%" rowGap={10} templateColumns="repeat(3, 1fr)">
        <GridItem alignSelf="center" colSpan={2} h="90vh" name="breads" p={5}>
          <HStack mb="0px" ml="5%" mt="10%">
            <Text
              align="left"
              color="#5F2EEA"
              fontSize="40px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              1. Bread
            </Text>
            <Text
              color="#BCA4FF"
              fontSize="24px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              Select one
            </Text>
          </HStack>
          <Center mt="5%" w="100%">
            <Bread food={breads} name="bread" />
          </Center>
        </GridItem>
        <GridItem colSpan={2} h="90vh" name="aca">
          <HStack mb="-14%" ml="5%">
            <Text
              align="left"
              color="#5F2EEA"
              fontSize="40px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              2. Meat
            </Text>
            <Text
              color="#BCA4FF"
              fontSize="24px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              Select one
            </Text>
          </HStack>
          <Box mt="20%" w="100%">
            <Bread food={meats} name="meat" />
          </Box>
        </GridItem>
        <GridItem colSpan={2} h="90vh" name="aca">
          <HStack mb="-14%" ml="5%">
            <Text
              align="left"
              color="#5F2EEA"
              fontSize="40px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              3. Cheese
            </Text>
            <Text
              color="#BCA4FF"
              fontSize="24px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              Select one
            </Text>
          </HStack>
          <Box mt="20%" w="100%">
            <Bread food={cheeses} name="cheese" />
          </Box>
        </GridItem>
        <GridItem colSpan={2} h="90vh" name="aca">
          <HStack mb="-14%" ml="5%">
            <Text
              align="left"
              color="#5F2EEA"
              fontSize="40px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              4. Vegetables
            </Text>
            <Text
              color="#BCA4FF"
              fontSize="24px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              Select one
            </Text>
          </HStack>
          <Box mt="20%" w="100%">
            <Bread food={vegetables} name="vegetable" />
          </Box>
        </GridItem>
        <GridItem colSpan={2} h="90vh" name="aca">
          <HStack mb="-14%" ml="5%">
            <Text
              align="left"
              color="#5F2EEA"
              fontSize="40px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              5. Ingredients
            </Text>
            <Text
              color="#BCA4FF"
              fontSize="24px"
              fontWeight="bold"
              letterSpacing="1px"
              lineHeight="32px"
            >
              Select one
            </Text>
          </HStack>
          <Box mt="20%" w="100%">
            <Bread food={ingredients} name="ingredient" />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default App
