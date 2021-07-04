import { ReactElement } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { IoStar } from 'react-icons/io5';
import { Repository } from '../../../clients/types';

interface Props {
  repository: Repository;
}

function RepositoryItem({ repository }: Props): ReactElement {
  return (
    <Box bgColor="gray.300" mb={2} px={2} py={4}>
      <Box display="flex" justifyContent="space-between">
        <Text as="h3" fontSize="md" fontWeight="bold">{repository.name}</Text>
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <Text as="p" fontWeight="bold" fontSize="md">{repository.stargazers_count}</Text>
          </Box>
          <IoStar size={16} />
        </Box>
      </Box>
      {repository.description && <Text as="p" fontSize="sm" data-testid="description">{repository.description}</Text>}
    </Box>
  );
}

export default RepositoryItem;
