import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false, // It will just be load from Browser side and not from Server side
}); // Dynamic Loading

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false, // Remove menu
    },
    zoom: {
      enabled: false, // Remove zoom in chart
    },
    foreColor: theme.colors.gray[500], // Label colors
  },
  grid: {
    show: false, // Remove grid from chart background
  },
  dataLabels: {
    enabled: false, // Remove label in datas
  },
  tooltip: {
    enabled: false, // Remove mouse hover for show data from chart
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600], // Apply color in border
    },
    axisTicks: {
      show: true,
      color: theme.colors.gray[600],
    },
    categories: [
      // Categories for datas from series
      "2022-11-11T00:00:00.000z",
      "2022-11-12T00:00:00.000z",
      "2022-11-13T00:00:00.000z",
      "2022-11-14T00:00:00.000z",
      "2022-11-15T00:00:00.000z",
      "2022-11-16T00:00:00.000z",
      "2022-11-17T00:00:00.000z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

// Name and datas of the serie
const series = [{ name: "series1", data: [31, 120, 10, 28, 61, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
