import React from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { data } from "../data/Data";
import { View } from "react-native";
import FabIcon from "../badgeIcon/FabIcon";

const FlatListMessage = () => {
  return (
    // <ScrollView>

    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Inbox
      </Heading>
      <Box m={4}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "muted.50",
              }}
              borderColor="muted.800"
              pl={["0", "4"]}
              pr={["0", "5"]}
              py="2"
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <View>
                  <Avatar
                    size="48px"
                    source={{
                      uri: item.avatarUrl,
                    }}
                  />
                   <Avatar.Badge bg="green.500" />
                </View>

                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    
    </Box>
    // </ScrollView>
  );
};

export default FlatListMessage;
