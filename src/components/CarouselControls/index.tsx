import { RefObject, useEffect, useState } from "react";

const CarouselControls = (
  container: RefObject<HTMLElement>,
  element: RefObject<HTMLElement>,
  array: Array<unknown>,
  itemShown: number,
  autoCounter: boolean = false
) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (autoCounter) {
      if (container.current) {
        container.current.addEventListener("scroll", () => {
          if (container.current) {
            const firstChildrenPosition =
              container.current.children[0].getBoundingClientRect().left;
            const containerViewport = container.current.offsetWidth;
            const currentSlide =
              Math.round(Math.abs(firstChildrenPosition / containerViewport)) + 1;

            setCounter(currentSlide);
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollLeft = () => {
    if (container.current && element.current) {
      if (counter > 1) {
        if (!autoCounter) {
          setCounter(counter - 1);
        }

        container.current.scrollLeft -= element.current.offsetWidth;
      }
    }
  };

  const scrollRight = () => {
    if (container.current && element.current) {
      if (counter < array.length - (itemShown - 1)) {
        if (!autoCounter) {
          setCounter(counter + 1);
        }

        container.current.scrollLeft += element.current.offsetWidth;
      }
    }
  };
  return {
    scrollLeft,
    scrollRight,
    counter,
  };
};

export default CarouselControls;
