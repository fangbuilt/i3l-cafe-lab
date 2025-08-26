"use client";

import { ActionIcon } from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ActionIconGroupSection() {
  const [value, { increment, decrement }] = useCounter(0, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" radius="md" onClick={decrement}>
        <ChevronDown color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection
        variant="default"
        size="lg"
        bg="var(--mantine-color-body)"
        miw={60}
      >
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon variant="default" size="lg" radius="md" onClick={increment}>
        <ChevronUp color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
