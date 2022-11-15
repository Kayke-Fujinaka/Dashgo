import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <Text as="strong">0</Text> - <Text as="strong">10</Text> de{" "}
        <Text as="strong">100</Text>
      </Box>

      <Stack direction="row" spacing="2">
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
        <PaginationItem pageNumber={6} />
      </Stack>
    </Stack>
  );
}
