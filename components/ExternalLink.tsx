import { Linking, Text, TouchableOpacity } from 'react-native';

interface ExternalLinkProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ url, children, className = '' }: ExternalLinkProps) {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text className={`text-xl text-blue-500 underline ${className}`}>{children}</Text>
    </TouchableOpacity>
  );
}
