import bullsEye from "../assets/Direct-Hit-Emoji.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import dislike from "../assets/pngimg.com - dislike_PNG70.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    1: { src: dislike, alt: "dislike", boxSize: "25px" },
    2: { src: dislike, alt: "dislike", boxSize: "25px" },
    3: { src: dislike, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "28px" },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
