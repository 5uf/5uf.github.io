import React from "react";
import { Title, Text, Anchor } from "@mantine/core";
import * as classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Sufi.Win!
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
      I'm likes to watch movies and enjoys midnight snacks, loves chilling nightwalking, creates some compilation videos about funny memes or anything on Youtube, listens to music on Spotify, etc. I currently pursuing my computer science degree at Mara University of Technology in Malaysia.
        follow{" "}
        <Anchor href="https://www.instagram.com/sufi.afifi/" variant="gradient">
          Me{" "}
        </Anchor>
        at Instagram.
      </Text>
    </>
  );
}
