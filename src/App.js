import React, { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const App = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = (isPlay) => {
    if (isPlay) {
      setPlaying(true);
      window.api.sendMessage("play");
    } else {
      setPlaying(false);
      window.api.sendMessage("stop");
    }
  };

  useEffect(() => {
    window.api.onMessage((event, message) => {
      if (message === "play") {
        setPlaying(true);
      } else if (message === "stop") {
        setPlaying(false);
      }
    });
  }, []);

  return (
    <Box
      bg={"red.200"}
      w="100vw"
      h="100vh"
      display="flex"
      flexDir={"column"}
      padding="10"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="3xl">Here is Electron</Text>
      <Button colorScheme="orange" onClick={() => togglePlay(!playing)}>
        {playing ? "Stop" : "Play"}
      </Button>
      <Text>{playing ? "Playing..." : "Stoped"}</Text>
      <Box flex={1} width="100%"></Box>
    </Box>
  );
};

export default App;
