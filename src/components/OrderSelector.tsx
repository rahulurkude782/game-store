import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import useGameStore from "../store/useGameStore";

const OrderSelector = () => {
  const { selectedOrder, setOrder } = useGameStore((store) => ({
    selectedOrder: store.gameQuery.order,
    setOrder: store.setOrder,
  }));
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );
  return (
    <Box padding={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight />}>
          Order by: {currentOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem key={order.value} onClick={() => setOrder(order.value)}>
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default OrderSelector;
