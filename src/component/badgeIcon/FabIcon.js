import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const FabIcon = () => {
  return (
    <Center>
      <Box
        
        w={[350, 300, 400]}
        
        // _dark={{
        //   bg: "violet.600",
        // }}
        // _light={{
        //   bg: "violet.600",
        // }}
      >
        <Fab
          renderInPortal={false}
          bg='violet.600'
          shadow={2}
          size="sm"
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        />
      </Box>
    </Center>
  );
};

export default FabIcon;
