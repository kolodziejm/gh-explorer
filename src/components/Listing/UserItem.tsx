import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { User } from '../../clients/types';

interface Props {
  user: User;
  children: ReactElement[];
}

function UserItem({ children, user }: Props): ReactElement {
  return (
    <AccordionItem mb={2}>
      <AccordionButton bgColor="gray.200">
        <Box flex="1" textAlign="left">
          <Text as="p" fontSize="sm">{user.login}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pt={2} pr={0}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default UserItem;
