import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/carousel.css';
import Card from "./Card";

export default class Popular extends Component {
    render() {
        const settings = {
            className: "slider variable-width",
            dots: true,
            speed: 500,
            cssEase: "ease-in-out",
            infinite: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            initialSlide: 0,
            variableWidth: false
        };

        return (
            <section>
                <Slider {...settings}>
                    <div className="block pb-[6.4375rem] pt-[1.5625rem]">
                        <Card />
                    </div>
                    <div className="block pb-[6.4375rem] pt-[1.5625rem]">
                        <Card />
                    </div>
                    <div className="block pb-[6.4375rem] pt-[1.5625rem]">
                        <Card />
                    </div>
                </Slider>
            </section>
        );
    }
}