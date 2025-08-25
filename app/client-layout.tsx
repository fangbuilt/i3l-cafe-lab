"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MantineProvider,
  createTheme,
  ActionIcon,
  AppShell,
  Flex,
  Stack,
  Text,
} from "@mantine/core";
import {
  BadgeDollarSign,
  BanknoteArrowDown,
  ChartArea,
  Settings,
} from "lucide-react";

const theme = createTheme({
  primaryColor: "orange",
});

const navigationItems = [
  { label: "Transaction", icon: <BadgeDollarSign />, href: "/" },
  { label: "Expenses", icon: <BanknoteArrowDown />, href: "/expenses" },
  { label: "Sales Report", icon: <ChartArea />, href: "/sales-report" },
  { label: "Settings", icon: <Settings />, href: "/settings" },
];

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathName = usePathname();

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell p="md">
        <AppShell.Main>{children}</AppShell.Main>
        <AppShell.Footer p={6}>
          <Flex justify="center" gap="lg">
            {navigationItems.map((item) => {
              const active = pathName === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Stack
                    align="center"
                    gap={4}
                    w={80}
                  >
                    <ActionIcon
                      variant={active ? "light" : "subtle"}
                      aria-label={item.label}
                      size="lg"
                    >
                      {item.icon}
                    </ActionIcon>
                    <Text
                      size="xs"
                      fw={active ? "bold" : "normal"}
                      ta={"center"}
                    >
                      {item.label}
                    </Text>
                  </Stack>
                </Link>
              );
            })}
          </Flex>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
