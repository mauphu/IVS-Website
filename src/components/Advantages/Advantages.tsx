import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { color } from "framer-motion";
import {} from "react-icons/"
import {IoMdClock} from "react-icons/io"
import{AiOutlineUnorderedList}from "react-icons/ai"
import{IoIosEye}from "react-icons/io";
// Replace test data with your own
const features =
    [
        {   id: 0,
            title: "Đội ngũ nhân sự giàu kinh nghiệm",
            text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
            Icon: IoMdClock
            
        },
        {
            id: 1,
            title: "Giao diện thân thiện với người dùng",
            text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
            Icon:AiOutlineUnorderedList
        },
        {
            id: 2,
            title: "Linh động theo từng khách hàng",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            Icon: IoIosEye
        },
        {
            id: 3,
            title: "Dịch vụ hỗ trợ nhanh chóng",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            Icon: IoMdClock

        },
        {
            id: 4,
            title: "Sản phẩm theo tiêu chuẩn Nhật Bản",
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
            Icon:AiOutlineUnorderedList
        },
        {
            id: 5,
            title: "Có chi nhánh trên toàn quốc",
            text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
            Icon: IoIosEye
        },
        
    ];


export default function Advantages() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>LỢI THẾ CẠNH TRANH CỦA IVS</Heading>
        <div className="decorateLineGray">
          <div className="decorateLineOrange"></div>
        </div>
        <Text color={"gray.600"} fontSize={"xl"}>
        {"Chúng tôi luôn coi khách hàng là khách mời tham dự một bữa tiệc mà chúng tôi là chủ nhà."}
-Jeff Bezos (Amazon)-
        </Text>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"} _hover={{color:"OrangeRed"}}>
              <Box color={"green.400"} px={2}>
               {<Icon as={feature.Icon} w={10} h={10} color={"OrangeRed"} />} 
              </Box>
              <VStack align={"start"}>
                <Text _hover={{color:"orangered"}} fontWeight={700} fontSize={20} >{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
