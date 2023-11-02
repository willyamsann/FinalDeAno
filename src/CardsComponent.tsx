import { useState, useEffect } from "react";
import { Box, Badge, Avatar, Text, Flex } from "@chakra-ui/react";

export const CardsComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://sheet.best/api/sheets/6e8ade66-7f96-43c5-b4c6-d8ca640360f8")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {data.map((item: any, index: number) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          m={4}
          width={{ base: "80%", sm: "45%", md: "30%" }}
        >
          <Avatar size="lg" name={item.NOME} />
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            {item.NOME}
          </Text>
          <Text>{item.Email}</Text>
          <Flex>
            {item.Confirmado === "Sim" && (
              <Badge colorScheme="green" mr={2}>
                Confirmado
              </Badge>
            )}
            {item["Primeira Parcela"] === "Sim" && (
              <Badge colorScheme="blue" mr={2}>
                Primeira Parcela
              </Badge>
            )}
            {item["Segunda Parcela"] && (
              <Badge colorScheme="purple" mr={2}>
                Segunda Parcela
              </Badge>
            )}
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
