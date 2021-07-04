import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Repository, User } from '../../clients/types';
import { State } from '../../store/types';
import RepositoryItem from './RepositoryItem';

interface Props {
  user: User;
}

function UserItem({ user }: Props): ReactElement {
  const repositories = useSelector(
    (state: State) => state.repositories.filter((repo: Repository) => repo.owner.id === user.id),
  );

  return (
    <AccordionItem mb={2} isDisabled={repositories.length === 0}>
      <h2>
        <AccordionButton bgColor="gray.200">
          <Box flex="1" textAlign="left">
            <Text as="p" fontSize="sm">{user.login}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>

      <AccordionPanel pt={2} pr={0}>
        {repositories.map((repository: Repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default UserItem;
