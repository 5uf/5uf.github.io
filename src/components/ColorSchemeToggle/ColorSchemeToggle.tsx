import React from "react";
import { Button, Group, useMantineColorScheme } from "@mantine/core";

export function ColorSchemeToggle() {
  const {colorScheme, setColorScheme} = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
        variant="outline"
        color="gray"
      >
        Toggle color scheme
      </Button>
    </Group>
    
  );
}
