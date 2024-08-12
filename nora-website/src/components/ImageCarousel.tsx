export interface ImageCarouselProps {
  urls: string[];
}

export const ImageCarousel = ({ urls }: ImageCarouselProps) => {
  //todo buiild it outa
  return <img src={urls[0] ?? ''} height={200} />;
};
