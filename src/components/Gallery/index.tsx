import * as S from "./style";
import { useContext, useEffect, useRef, useState } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import CarouselControls from "../CarouselControls";
import { ProductContex } from "../../contexts/product.context";

import { GoZoomIn } from "react-icons/go";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Gallery = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const item = useRef<HTMLAnchorElement>(null);

  const [height, setHeight] = useState<number>(0);
  const [reload, setReload] = useState<boolean>(false);

  const { clotheInfo, windowSize } = useContext(ProductContex);
  const { counter, scrollLeft, scrollRight } = CarouselControls(
    carousel,
    item,
    clotheInfo.image,
    1,
    true
  );

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: "#slideshow",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    if (item.current) {
      setHeight(item.current.offsetWidth);

      setReload(false);
    } else {
      setReload(true);
    }

    window.addEventListener("resize", () => {
      if (item.current) {
        setHeight(item.current.offsetWidth);
      }
    });

    return () => {
      if (lightbox != null) {
        lightbox.destroy();
        lightbox = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  return (
    <S.main>
      <S.carousel className="pswp-gallery" id="slideshow" ref={carousel}>
        {clotheInfo.image?.map((img, index) => (
          <S.box
            href={img}
            data-pswp-width={height * 2}
            data-pswp-height={height * 2}
            key={"slideshow-" + index}
            target="_blank"
            rel="noreferrer"
            ref={item}
            style={{ height: height }}
          >
            <img src={img} alt="" />
            <S.span>
              <GoZoomIn />
            </S.span>
          </S.box>
        ))}
      </S.carousel>

      {windowSize < 750 && (
        <S.controls>
          <S.button onClick={scrollLeft}>
            <SlArrowLeft />
          </S.button>

          {`${counter}/${clotheInfo.image?.length}`}

          <S.button onClick={scrollRight}>
            <SlArrowRight />
          </S.button>
        </S.controls>
      )}
    </S.main>
  );
};

export default Gallery;
