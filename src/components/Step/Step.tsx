import * as React from "react"
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  HStack,
  Img,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react"
import {animateScroll as scroll} from "react-scroll"

import {Status} from "../../types/types"
import {Food} from "../../types/types"
import {useAddToOrder, useAddVegetables, useFinal} from "../../context/hooks"

interface Props {
  food: Food[]
  name: string
}

const Step: React.FC<Props> = ({food, name}) => {
  const [value, setValue] = React.useState<string>("0")
  const [error, setError] = React.useState<string>("")
  const [vegetables, setVegetables] = React.useState<Food[]>([])
  const [ingredients, setIngredients] = React.useState<Food[]>([])
  const [checkedVegetablesOrIngredients, setCheckedVegetablesOrIngredients] = React.useState<
    boolean[]
  >([false, false, false])
  const addToOrder = useAddToOrder()
  const addVegetables = useAddVegetables()
  const final = useFinal()

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
          addToOrder(food[parseInt(value) - 1], Status.Bread)
          scrollTo(830)
          break
        case "meat":
          addToOrder(food[parseInt(value) - 1], Status.Meat)
          scrollTo(1700)
          break
        case "cheese":
          addToOrder(food[parseInt(value) - 1], Status.Cheese)
          scrollTo(2600)
          break
        case "vegetable":
          for (let i = 0; i !== checkedVegetablesOrIngredients.length; i++) {
            if (checkedVegetablesOrIngredients[i] === true) {
              vegetables.push(food[i])
            }
          }
          addVegetables(vegetables, "vegetables")
          scrollTo(3450)
          break
        case "ingredient":
          for (let i = 0; i !== checkedVegetablesOrIngredients.length; i++) {
            if (checkedVegetablesOrIngredients[i] === true) {
              ingredients.push(food[i])
            }
          }
          addVegetables(ingredients, "ingredients")
          break
        default:
          console.log("error")
      }
    }
  }

  const checkVegetablesOrIngredients = (e: boolean, value: string) => {
    if (e === true) {
      checkedVegetablesOrIngredients[parseInt(value) - 1] = true
      setValue("1")
    } else {
      checkedVegetablesOrIngredients[parseInt(value) - 1] = false
    }
  }

  return (
    <VStack spacing={5} w="100%">
      {name !== "vegetable" && name !== "ingredient" && (
        <RadioGroup value={value} w="100%" onChange={setValue}>
          <HStack justify="space-evenly" w="100%">
            {food.map((elem) => (
              <VStack key={elem.name}>
                <VStack
                  bg="#FFFFFF"
                  borderRadius="32px"
                  boxShadow="0px 32px 64px rgba(17, 17, 17, 0.08)"
                  height="450px"
                  w="276px"
                >
                  <Box
                    bg="linear-gradient(342.3deg, #FCFCFC 2.05%, #F7F7FC 100.21%)"
                    borderRadius="32px"
                    h="343px"
                    w="100%"
                  >
                    {elem.url !== "" && (
                      <Img
                        m="auto"
                        maxHeight="343px"
                        objectFit="scale-down"
                        src={elem.url}
                        w="100%"
                      />
                    )}
                    {elem.url === "" && (
                      <Box
                        bg="linear-gradient(342.3deg, #FCFCFC 2.05%, #F7F7FC 100.21%)"
                        borderRadius="32px"
                        h="250px"
                      />
                    )}
                  </Box>
                  <Text
                    align="left"
                    color="#14142B"
                    fontSize="18px"
                    fontWeight="bold"
                    letterSpacing="1px"
                    lineHeight="32px"
                    textAlign="left"
                    w="90%"
                  >
                    {elem.name}
                  </Text>
                  <Text
                    color="#14142B"
                    fontSize="18px"
                    fontWeight="300"
                    letterSpacing="1px"
                    lineHeight="32px"
                    textAlign="left"
                    w="90%"
                  >
                    ${elem.price}
                  </Text>
                </VStack>
                <Box p="5% 0 0 0">
                  <Radio
                    _hover={{bg: "#A0A3BD"}}
                    bg="#D9DBE9"
                    colorScheme="purple"
                    m="auto"
                    style={{width: "32px", height: "32px"}}
                    transition="all 0.2s ease-in"
                    value={elem.value}
                  />
                </Box>
              </VStack>
            ))}
          </HStack>
        </RadioGroup>
      )}
      {(name === "vegetable" || name === "ingredient") && (
        <CheckboxGroup>
          <HStack justify="space-evenly" w="100%">
            {food.map((elem) => (
              <VStack key={elem.name}>
                <VStack
                  bg="#FFFFFF"
                  borderRadius="32px"
                  boxShadow="0px 32px 64px rgba(17, 17, 17, 0.08)"
                  height="450px"
                  w="276px"
                >
                  <Box
                    bg="linear-gradient(342.3deg, #FCFCFC 2.05%, #F7F7FC 100.21%)"
                    borderRadius="32px"
                    h="343px"
                    w="100%"
                  >
                    {elem.url !== "" && (
                      <Img
                        m="auto"
                        maxHeight="343px"
                        objectFit="scale-down"
                        src={elem.url}
                        w="100%"
                      />
                    )}
                    {elem.url === "" && (
                      <Box
                        bg="linear-gradient(342.3deg, #FCFCFC 2.05%, #F7F7FC 100.21%)"
                        borderRadius="32px"
                        h="250px"
                      />
                    )}
                  </Box>
                  <Text
                    align="left"
                    color="#14142B"
                    fontSize="18px"
                    fontWeight="bold"
                    letterSpacing="1px"
                    lineHeight="32px"
                    textAlign="left"
                    w="90%"
                  >
                    {elem.name}
                  </Text>
                  <Text
                    color="#14142B"
                    fontSize="18px"
                    fontWeight="300"
                    letterSpacing="1px"
                    lineHeight="32px"
                    textAlign="left"
                    w="90%"
                  >
                    ${elem.price}
                  </Text>
                </VStack>
                <Box p="5% 0 0 0">
                  <Checkbox
                    _hover={{bg: "#A0A3BD"}}
                    bg="#D9DBE9"
                    border="transparent"
                    colorScheme="purple"
                    m="auto"
                    size="lg"
                    value={elem.value}
                    onChange={(e) => checkVegetablesOrIngredients(e.target.checked, elem.value)}
                  />
                </Box>
              </VStack>
            ))}
          </HStack>
        </CheckboxGroup>
      )}
      <Text color="red">{error}</Text>
      {name !== "ingredient" && (
        <Button
          _hover={{bg: "#2A00A2"}}
          bg="#5F2EEA"
          borderRadius="40px"
          color="white"
          h="64px"
          transition="all 0.5s ease-in"
          w="200px"
          onClick={setValueAndAddToOrder}
        >
          Next
        </Button>
      )}
      {name === "ingredient" && (
        <Button
          _hover={{bg: "#2A00A2"}}
          bg="#5F2EEA"
          borderRadius="40px"
          color="white"
          h="64px"
          transition="all 0.5s ease-in"
          w="200px"
          onClick={() => {
            setValueAndAddToOrder(), final()
          }}
        >
          GO!
        </Button>
      )}
    </VStack>
  )
}

export default Step
