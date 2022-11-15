import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileData {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileData) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Kayke Fujinaka</Text>
          <Text color="gray.300" fontSize="small">
            kaykealvesfujinaka@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Kayke Fujinaka"
        src="https://github.com/Kayke-Fujinaka.png"
      />
    </Flex>
  );
}
