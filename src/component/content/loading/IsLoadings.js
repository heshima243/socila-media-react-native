import {Center,VStack} from 'native-base'
import { Skeleton } from "native-base";

const IsLoadings = () => {
  return (
    <Center w="350">
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={8}
        overflow="hidden"
        rounded="md"
        _dark={{
          borderColor: "coolGray.500",
        }}
        _light={{
          borderColor: "coolGray.200",
        }}
      >
        <Skeleton h="40" />
        <Skeleton.Text px="4" />
        <Skeleton px="4" my="4" rounded="md" startColor="violet.600" />
      </VStack>
    </Center>
  );
};

export default IsLoadings;
