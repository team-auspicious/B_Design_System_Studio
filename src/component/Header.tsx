import { Select, Flex, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { menuUpdate } from "../redux/createSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.target.menu);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    dispatch(menuUpdate(value));
    if (value === "-") {
      navigate(`/`);
      return;
    }
    navigate(`/${value.toLowerCase()}`);
  };

  return (
    <Flex
      w="1024px"
      h="80px"
      m="0 auto"
      p="0 30px"
      border="2px solid #000"
      justify="space-between"
      align="center"
    >
      <Heading size="md">Design System Studio</Heading>
      <Flex>
        <Button colorScheme="blue" mr="10px">
          변경사항 저장
        </Button>
        <Select w="180px" variant="filled" value={menu} onChange={onChange}>
          <option>-</option>
          <option>Foundation</option>
          <option>Component</option>
        </Select>
      </Flex>
    </Flex>
  );
};
