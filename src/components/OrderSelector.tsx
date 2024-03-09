import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";

interface Props {
  selectedOrder: string | null;
  onSelectSortOrder: (order: string) => void;
}

const OrderSelector = ({ selectedOrder, onSelectSortOrder }: Props) => {
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
            <MenuItem
              key={order.value}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default OrderSelector;
