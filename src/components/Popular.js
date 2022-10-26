import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/carousel.css';

export default class Popular extends Component {
    render() {
        const settings = {
            className: "slider variable-width",
            dots: true,
            speed: 1000,
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
                    <div className="block pb-[2.5625rem] pt-[1.5625rem]">
                        <div className="relative flex flex-col h-full bg-cover bg-center bg-no-repeat rounded-[5.25rem]" style={{backgroundImage: "url('https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg')", boxShadow: "0 0.25rem 1.375rem rgb(255, 64, 64, 0.6)"}}>
                            <span className="absolute flex items-center justify-between bottom-0 left-1/2 transform -translate-x-1/2 px-[2.375rem] py-[1.125rem] w-[17.3125rem] h-[5rem] bg-[#64182D] rounded-full z-20">
                                <span className="block">
                                    <h3 className="font-semibold text-[1.625rem] leading-none">Valorant</h3>
                                    <span className="font-semibold text-sm text-[#7B4C59]">Video Game</span>
                                </span>
                                <span className="block text-[#D8C9CD]">
                                    <svg width="29" height="27" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1.36 14.713h23.003L17.21 23.34a1.821 1.821 0 0 0-.406 1.162c-.002.437.142.857.398 1.166.256.309.604.482.966.48.363-.002.71-.178.964-.49l9.473-11.423.045-.058.01-.014.034-.047.008-.013.033-.05.005-.01a1.85 1.85 0 0 0 .255-.803v-.011c0-.023.003-.046.004-.068v-.164c0-.028 0-.047-.004-.069v-.011a1.855 1.855 0 0 0-.254-.801.045.045 0 0 0-.006-.01l-.032-.05-.01-.014-.03-.044-.013-.017a1.028 1.028 0 0 0-.039-.05l-.007-.008L19.132.49c-.254-.312-.6-.488-.963-.49-.362-.002-.71.171-.966.48-.257.31-.4.729-.399 1.166.002.437.148.855.406 1.162l7.152 8.626H1.36c-.485 0-.934.313-1.177.82a1.936 1.936 0 0 0 0 1.64c.243.506.692.819 1.177.819Z" /></svg>
                                </span>
                            </span>
                            <span className="absolute flex items-center justify-between -bottom-6 left-1/2 transform -translate-x-1/2 w-[15.6875rem] h-[5.875rem] bg-[#390F1B] rounded-full z-10"></span>
                            <span className="absolute flex items-center justify-between -bottom-10 left-1/2 transform -translate-x-1/2 w-[13.125rem] h-[5.875rem] bg-[#2D0D16] rounded-full z-0"></span>
                        </div>
                    </div>
                    <div className="block pb-[2.5625rem] pt-[1.5625rem]">
                        <div className="relative flex flex-col h-full bg-cover bg-center bg-no-repeat rounded-[5.25rem]" style={{backgroundImage: "url('https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg')", boxShadow: "0 0.25rem 1.375rem rgb(255, 64, 64, 0.6)"}}>

                        </div>
                    </div>
                    <div className="block pb-[2.5625rem] pt-[1.5625rem]">
                        <div className="relative flex flex-col h-full bg-cover bg-center bg-no-repeat rounded-[5.25rem]" style={{backgroundImage: "url('https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg')", boxShadow: "0 0.25rem 1.375rem rgb(255, 64, 64, 0.6)"}}>

                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}