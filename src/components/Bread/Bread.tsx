import * as React from "react"
import {Box, Button, HStack, Img, Radio, RadioGroup, Text, VStack} from "@chakra-ui/react"
import {Link} from "react-scroll"
import {animateScroll as scroll} from "react-scroll"

import {Status} from "../../types/types"
import {Food} from "../../types/types"
import {useAddToOrder} from "../../context/hooks"

interface Props {
  food: Food[]
  name: string
}

const Bread: React.FC<Props> = ({food, name}) => {
  const [value, setValue] = React.useState<string>("0")
  const [error, setError] = React.useState<string>("")
  const addToOrder = useAddToOrder()

  const scrollTo = (n: number) => {
    scroll.scrollTo(n)
  }

  const setValueAndAddToOrder = () => {
    if (value === "0") {
      setError(`Debe seleccionar un ${name}`)
      console.log("Error", error)
    } else {
      switch (name) {
        case "bread":
          addToOrder(food[parseInt(value)], Status.Bread)
          scrollTo(950)
          break
        case "meat":
          addToOrder(food[parseInt(value)], Status.Meat)
          scrollTo(1900)
          break
        case "cheese":
          addToOrder(food[parseInt(value)], Status.Cheese)
          scrollTo(2800)
          break
        case "vegetable":
          addToOrder(food[parseInt(value)], Status.Vegetables)
          scrollTo(3600)
          break
        case "ingredient":
          addToOrder(food[parseInt(value)], Status.Ingredients)
          break
        default:
          console.log("error")
      }
    }
  }

  return (
    <VStack w="100%">
      <RadioGroup value={value} w="100%" onChange={setValue}>
        <HStack justify="space-evenly" w="100%">
          {food.map((elem) => (
            <VStack
              key={elem.name}
              bg="#FFFFFF"
              borderRadius="32px"
              boxShadow="0px 32px 64px rgba(17, 17, 17, 0.08)"
              height="400px"
              w="270px"
            >
              <Box
                bg="linear-gradient(342.3deg, #FCFCFC 2.05%, #F7F7FC 100.21%)"
                borderRadius="32px"
                w="100%"
              >
                <Img h="250px" m="auto" objectFit="scale-down" src={elem.url} w="100px" />
              </Box>
              <Text
                align="left"
                color="#14142B"
                fontSize="18px"
                fontWeight="bold"
                letterSpacing="1px"
                lineHeight="32px"
              >
                {elem.name}
              </Text>
              <Text
                color="#14142B"
                fontSize="18px"
                fontWeight="300"
                letterSpacing="1px"
                lineHeight="32px"
              >
                ${elem.price}
              </Text>
              <Radio m="auto" value={elem.value} />
            </VStack>
          ))}
        </HStack>
      </RadioGroup>
      <Text color="red">{error}</Text>
      <Button
        _hover={{bg: "#2A00A2"}}
        bg="#5F2EEA"
        borderRadius="40px"
        color="white"
        h="64px"
        w="200px"
        onClick={setValueAndAddToOrder}
      >
        Next
      </Button>
    </VStack>
  )
}

export default Bread
