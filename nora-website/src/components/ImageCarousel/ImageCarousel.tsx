import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';
import './ImageCarousel.css';

export interface ImageCarouselProps {
  urls: string[];
}

export const ImageCarouselv0 = ({ urls }: ImageCarouselProps) => {
  const [carouselRef] = useEmblaCarousel();

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel-container">
        {urls.map((url) => {
          return (
            <div className="carousel-slide" key={`image ${url}`}>
              <img src={url} height={200} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

type EmblaProps = {
  urls: string[];
  options?: EmblaOptionsType;
};

const ImageCarousel = (props: EmblaProps) => {
  const { urls, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {urls.map((url, index) => (
            <div className="embla__slide" key={index}>
              <img src={url} height={200} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {urls.map((url, idx) => (
              <Thumb
                key={idx}
                onClick={() => onThumbClick(idx)}
                selected={idx === selectedIndex}
                url={url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

type ThumbnailProps = {
  selected: boolean;
  // index: number;
  onClick: () => void;
  url: string;
};

const Thumb: React.FC<ThumbnailProps> = (props) => {
  const { selected, onClick, url } = props;

  return (
    <div className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}>
      <button onClick={onClick} type="button" className="embla-thumbs__slide__number">
        <img src={url} height={50} />
      </button>
    </div>
  );
};
