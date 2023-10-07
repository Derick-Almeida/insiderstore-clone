import * as S from "./style";
import { useContext, useEffect, useRef, useState } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import { ProductContex } from "../../contexts/product.context";

import { GoZoomIn } from "react-icons/go";

const Gallery = () => {
  const div = useRef<HTMLAnchorElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [reload, setReload] = useState<boolean>(false);

  const { clotheInfo } = useContext(ProductContex);

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: "#slideshow",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    if (div.current) {
      setHeight(div.current.offsetWidth);

      setReload(false);
    } else {
      setReload(true);
    }

    const noteTheSize = () => {
      if (div.current) {
        setHeight(div.current.offsetWidth);
      }
    };
    window.addEventListener("resize", noteTheSize);

    return () => {
      if (lightbox != null) {
        lightbox.destroy();
        lightbox = null;
      }
    };
  }, [reload]);

  return (
    <S.main className="pswp-gallery" id="slideshow">
      {clotheInfo.image?.map((img, index) => (
        <S.box
          href={img}
          data-pswp-width={height * 2}
          data-pswp-height={height * 2}
          key={"slideshow-" + index}
          target="_blank"
          rel="noreferrer"
          ref={div}
          style={{ height: height }}
        >
          <img src={img} alt="" />
          <S.span>
            <GoZoomIn />
          </S.span>
        </S.box>
      ))}
    </S.main>
  );
};

export default Gallery;
