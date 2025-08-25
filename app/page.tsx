import {
  Box,
  Button,
  Chip,
  Flex,
  Group,
  Space,
  Stack,
  Text,
} from "@mantine/core";

export default function Home() {
  const fakeItems = [
    { name: "Latte", price: 25000 },
    { name: "Espresso", price: 20000 },
    { name: "Cappuccino", price: 30000 },
    { name: "Mocha", price: 35000 },
    { name: "Americano", price: 22000 },
    { name: "Macchiato", price: 28000 },
    { name: "Flat White", price: 27000 },
    { name: "Iced Coffee", price: 24000 },
    { name: "Cold Brew", price: 26000 },
    { name: "Frappuccino", price: 40000 },
  ];
  return (
    <Box>
      <Group>
        <Chip defaultChecked>Drinks</Chip>
        <Chip defaultChecked>Merch</Chip>
        <Chip defaultChecked>Consignment</Chip>
      </Group>
      <Space h={"lg"} />
      <Stack>
        <Text fw={"bold"} size="xl">
          Items
        </Text>
        <Stack>
          {fakeItems.map((item, index) => (
            <Flex justify={"space-between"} align={"center"} key={index}>
              <Stack gap={2}>
                <Text size="md">{item.name}</Text>
                <Text size="sm">{item.price}</Text>
              </Stack>
              <Button>Add</Button>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
