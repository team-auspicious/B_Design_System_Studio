import { ChevronRightIcon, AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Select,
  Flex,
  Button,
  IconButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBoolean,
} from "@chakra-ui/react";
import { Header } from "../component/Header";
import { useNavigate } from "react-router-dom";
import { foundationList, colorList } from "../constant/foundation";
import type { RootState } from "../redux/store";
import { itemUpdate } from "../redux/createSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { FoundataionDetail, FoundationVersion } from "../constant/type";
import { setFoundationDetail, setFoundationVersionList } from "../redux/foundation";
import { API_URL } from "../constant/api";

export const Studio = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentMenu = useSelector((state: RootState) => state.target.menu);
    const currentItem = useSelector((state: RootState) => state.target.item);
    const versionList = useSelector((state: RootState) => state.foundation.foundationVersionList);
    const selectRef = useRef<HTMLSelectElement>(null);

    const [selectedVersionId, setSelectedVersion] = useState("");

    useEffect(() => {
        async function fetchFoundationVersionList() {
            const versionList: FoundationVersion[] = await (await fetch(`${API_URL}/foundation-version`)).json();
            dispatch(setFoundationVersionList(versionList));
        }
        fetchFoundationVersionList();
    }, [dispatch]);

    useEffect(() => {
        async function fetchFoundationDetail(id: string) {
            if (!id) {
                return;
            }
            const foundationDetail: FoundataionDetail = await (
                await fetch(`${API_URL}/foundation-detail/${id}`)
            ).json();
            dispatch(setFoundationDetail(foundationDetail));
        }

        fetchFoundationDetail(selectedVersionId);
    }, [dispatch, selectedVersionId]);

    return (
        <Box w="100%">
            <Header />
            <Flex w="100%" justify="center">
                <Flex w="300px" p="20px 0" border="2px solid #000" borderTop="0" direction="column" align="center">
                    <Flex>
                        <Select
                            w="210px"
                            borderRightRadius="none"
                            variant="filled"
                            placeholder="버전을 선택해주세요."
                            ref={selectRef}
                            onChange={(e) => {
                                console.log(e);
                                setSelectedVersion(e.target.value);
                            }}
                        >
                            {versionList.map(({ id, semantic_version, status }, index) => (
                                <option value={id} key={id}>
                                    v{semantic_version}
                                </option>
                            ))}
                        </Select>
                        <IconButton
                            colorScheme="blue"
                            borderLeftRadius="none"
                            variant="outline"
                            aria-label="version deploy"
                            icon={<AddIcon />}
                        />
                    </Flex>
                    {selectRef.current?.value
                        ? foundationList.map((item, index) => (
                              <Button
                                  w="250px"
                                  mt="20px"
                                  key={index}
                                  onClick={() => {
                                      dispatch(itemUpdate(item));
                                      // navigate(`/${currentMenu}/${item}`);
                                  }}
                              >
                                  {item}
                              </Button>
                          ))
                        : ""}
                </Flex>
                <Flex w="724px" p="20px 30px" border="2px solid #000" borderTop="0" borderLeft="0" direction="column">
                    {currentItem ? (
                        <>
                            <Breadcrumb
                                spacing="8px"
                                fontSize="2xl"
                                fontWeight="700"
                                separator={<ChevronRightIcon color="gray.500" />}
                            >
                                <BreadcrumbItem>
                                    <BreadcrumbLink>{currentMenu}</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink>{currentItem}</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <TableContainer mt="20px">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>name</Th>
                                            <Th>value</Th>
                                        </Tr>
                                    </Thead>
                                </Table>
                            </TableContainer>
                            <Accordion allowMultiple>
                                {colorList.map((item, index) => (
                                    <AccordionItem key={index} p="10px 0">
                                        <Flex justify="space-between">
                                            <Input
                                                mr="75px"
                                                type="text"
                                                w="250px"
                                                value={item.name}
                                                onChange={(e) => console.log(e)}
                                            />
                                            <Input
                                                type="text"
                                                w="250px"
                                                value={item.value}
                                                onChange={(e) => console.log(e)}
                                            />
                                            <AccordionButton w="50px">
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </Flex>
                                        <AccordionPanel p="15px 5px 10px 5px">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </AccordionPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </>
                    ) : (
                        ""
                    )}
                </Flex>
            </Flex>
        </Box>
    );
};
