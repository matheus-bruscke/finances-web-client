import { BellIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuList,
  Stack,
  Text,
  Box,
  Heading,
  MenuButton,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { NotificationsList } from '../types';

interface Notifications {
  list: NotificationsList[];
}

export const Notifications = ({ list }: Notifications) => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={IconButton}
        w="55px"
        h="55px"
        fontSize="1.5rem"
        icon={<BellIcon />}
        borderRadius="full"
      />
      <MenuList mt={5}>
        {list.map(item => (
          <MenuItem
            key={item.thumb}
            as={Stack}
            direction="row"
            spacing={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={5} align="center">
              <Box width="40px" h="40px" borderRadius="10px" bg="gray.800" />

              <Box>
                <Heading size="sm" fontWeight="semibold">
                  {item.title}
                </Heading>
                <Text>{item.time}</Text>
              </Box>
            </Stack>

            {item.new && (
              <Box w="10px" h="10px" borderRadius="full" bg="blue.500" />
            )}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
