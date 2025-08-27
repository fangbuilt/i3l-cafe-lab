import {
  Box,
  Chip,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import ActionIconGroupSection from "./components/action-icon-group-section";

export default function Home() {
  const fakeItems = [
    { name: "Espresso on the rock", price: 10000 },
    { name: "Americano", price: 15000 },
    { name: "Latte Aren", price: 20000 },
    { name: "Spanish Latte", price: 20000 },
    { name: "Dirty Matcha", price: 24000 },
    { name: "Cinnamon Latte", price: 22000 },
    { name: "Sweet Tea", price: 10000 },
    { name: "Chocolate", price: 22000 },
    { name: "Matcha Latte", price: 24000 },
    { name: "Ichigo Milkshake", price: 20000 },
    { name: "Hojicha Latte", price: 24000 },
    { name: "Jasmine Milk Tea", price: 13000 },
    { name: "Taro Milkshake", price: 20000 },
    { name: "Add On: Oat Milk", price: 3000 },
    { name: "Add On: Extra Shot", price: 6000 },
  ];
  return (
    <Box>
      <Stack>
        <Text fw={"bold"} size="xl">
          Items
        </Text>
        <Group>
          <Chip defaultChecked>Drinks</Chip>
          <Chip defaultChecked>Merch</Chip>
          <Chip defaultChecked>Consignment</Chip>
        </Group>
        <Stack>
          {fakeItems.map((item, index) => (
            <Paper key={index} withBorder p={"sm"}>
              <Flex justify={"space-between"} align={"center"}>
                <Stack gap={2}>
                  <Text size="md">{item.name}</Text>
                  <Text size="sm">{item.price}</Text>
                </Stack>
                <ActionIconGroupSection />
              </Flex>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
