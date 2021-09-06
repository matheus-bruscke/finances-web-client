import { DisclosureContext } from '@/contexts';
import { useDisclosure } from '@chakra-ui/hooks';

export const DisclosureProvider: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DisclosureContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </DisclosureContext.Provider>
  );
};
