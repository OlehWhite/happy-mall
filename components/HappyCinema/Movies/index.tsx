import { FC, useRef } from "react";
import {
  Container,
  ButtonLeft,
  ButtonRight,
  Img,
  WrapperLeft,
  WrapperRight,
  Movie,
  LogoMovie,
  WrapperSlider,
} from "./style";
import Slider from "react-slick";
import { MOVIES } from "@/components/HappyCinema/Movies/movies";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  arrows: false,
  useTransform: false,
};

const Movies: FC = () => {
  const ref = useRef<Slider | null>(null);

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <Container>
      <WrapperLeft>
        <ButtonLeft onClick={onPrev}>
          <Img src="left.png" alt="Arrow left" title="Arrow left" />
        </ButtonLeft>
      </WrapperLeft>
      <WrapperSlider>
        <Slider className="custom-slider-movies" ref={ref} {...settings}>
          {MOVIES.map((movie, index) => (
            <Movie key={index}>
              <LogoMovie
                src={movie.img}
                alt={movie.title}
                title={movie.title}
              />
            </Movie>
          ))}
        </Slider>
      </WrapperSlider>
      <WrapperRight>
        <ButtonRight onClick={onNext}>
          <Img src="right.png" alt="Arrow right" title="Arrow right" />
        </ButtonRight>
      </WrapperRight>
    </Container>
  );
};

export default Movies;
