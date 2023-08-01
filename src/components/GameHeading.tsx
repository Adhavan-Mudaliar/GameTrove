import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = gameQuery.searchText
    ? `"${gameQuery.searchText || ""}" in ${gameQuery.platform?.name || ""} ${
        gameQuery.genre?.name || ""
      } Games`
    : `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return <Heading marginY={5}>{heading}</Heading>;
};

export default GameHeading;
