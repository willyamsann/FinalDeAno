import { useEffect, useState } from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";

export const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31);
    const difference = endOfYear.getTime() - now.getTime();

    let timeLeft = {} as {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Box textAlign="center" fontSize="3xl">
      <Text fontSize="5xl">Contagem Regressiva</Text>
      <Box display="flex" justifyContent="center">
        <Box m={4}>
          <Text>{timeLeft.days}</Text>
          <Text>Dias</Text>
        </Box>
        <Box m={4}>
          <Text>{timeLeft.hours}</Text>
          <Text>Horas</Text>
        </Box>
        <Box m={4}>
          <Text>{timeLeft.minutes}</Text>
          <Text>Minutos</Text>
        </Box>
        <Box m={4}>
          <Text>{timeLeft.seconds}</Text>
          <Text>Segundos</Text>
        </Box>
      </Box>
    </Box>
  );
};
