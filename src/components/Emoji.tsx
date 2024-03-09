import { ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: "👍", alt: "meh" },
    4: { src: "👌", alt: "recommended" },
    5: { src: "🎯", alt: "exceptional" },
  };
  return <span style={{ fontSize: "2rem" }}>{emojiMap[rating].src}</span>;
};

export default Emoji;
