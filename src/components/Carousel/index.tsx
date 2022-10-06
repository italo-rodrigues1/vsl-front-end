import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardRemmended from "../CardRemmended";
import { ArrowButton, Carousel } from "./styles";

export default function CarouselAndCards(data: any) {
  const [highlights, setHighlights] = useState<number>(0);

  return (
    <Carousel>
      <ArrowButton>
        <IoIosArrowBack />
        <IoIosArrowForward />
      </ArrowButton>
      <CardRemmended value={1} />
    </Carousel>
  );
}
