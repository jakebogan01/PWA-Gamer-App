import React from "react";
import BottomNav from "../components/BottomNav";
import {Link} from "react-router-dom";

const GameDetails = () => {
    return (
        <section className="relative pt-[3.5625rem] pb-32">
            <div className="w-[21rem] h-[21.8125rem] mx-auto">
                <div className="relative flex flex-col h-full bg-cover bg-center bg-no-repeat rounded-[5.25rem]" style={{backgroundImage: "url('https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg')", boxShadow: "0 0.25rem 1.375rem rgb(255, 64, 64, 0.6)"}}>
                    <span className="absolute flex items-center justify-between -bottom-14 left-1/2 transform -translate-x-1/2 px-[2.375rem] py-[1.125rem] w-[17.3125rem] h-[5rem] bg-[#64182D] rounded-full z-20">
                        <span className="flex-1 flex items-center justify-between text-[#D8C9CD]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="transform scale-[0.6]" width="50" height="50" fill="#ffffff"><path d="M19.313 4c-.301 0-.606-.012-.907.188-.3.199-.406.511-.406.812v36.594c0 .398.29.8.688 1l8 2.406H27c.2 0 .395-.086.594-.188.3-.199.406-.511.406-.812V13.406c.602.301 1 .895 1 1.594v11.094c0 .3.2.71.5.812.2.102 1.7 1 4.5 1 2.7 0 6-1.492 6-8.593 0-5.7-3.188-10.02-8.688-11.72ZM17 26.406l-11.094 4L4.313 31C1.612 32.102 0 33.887 0 35.688c0 3.8 2.7 6 7.5 6 2.602 0 5.8-.575 9.5-1.876V36c-.898.3-1.887.7-2.688 1-1.601.602-2.812.813-3.812.813C9 37.813 8.3 37.3 8 37c-.398-.3-.602-.688-.5-1.188.102-1 1.3-1.917 3.5-2.718.5-.2 3.898-1.395 6-2.094Zm19.5 2.5c-2.398.102-4.898.489-7.5 1.188v4.593c1.102-.398 2.586-.886 4.688-1.687 4.8-1.7 6.804-1.512 7.406-1.313C42.293 31.79 42.8 32.5 43 33c.5 1.5-1.387 2.188-4.188 3.188-1.3.5-6.914 2.5-9.812 3.5v4.624l15.5-5.5 1.188-.5c2-.699 4.511-2.011 4.312-4.312-.102-2.2-2.79-3.305-4.688-3.906-2.8-.899-5.812-1.29-8.812-1.188Z"/></svg>
                            <span className="block w-px h-[2.8125rem] bg-[#AA8A93] rounded-full"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="transform scale-[0.6]" width="50" height="50" fill="#ffffff"><path d="m19.852 7.761-15 2.25A1 1 0 0 0 4 11v12a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V8.75a1.001 1.001 0 0 0-1.148-.989zm25.8-3.519a1.013 1.013 0 0 0-.801-.231l-21 3.15A1 1 0 0 0 23 8.15V23a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1V5c0-.291-.127-.567-.348-.758zM20 26H5a1 1 0 0 0-1 1v12a1 1 0 0 0 .852.989l15 2.25A.999.999 0 0 0 21 41.25V27a1 1 0 0 0-1-1zm25 0H24a1 1 0 0 0-1 1v14.85a1 1 0 0 0 .852.989l21 3.15A.999.999 0 0 0 46 45V27a1 1 0 0 0-1-1z"/></svg>
                            <span className="block w-px h-[2.8125rem] bg-[#AA8A93] rounded-full"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="transform scale-[0.6]" width="50" height="50" fill="#ffffff"><path d="M25 2c-4.291 0-8.381 1.2-11.773 3.3-.22.074-.598.362-.942.667 3.045-2.42 10.087 2.426 12.143 3.869.346.243.8.243 1.146 0 2.056-1.443 9.098-6.29 12.143-3.87-.344-.304-.724-.592-.942-.665C33.382 3.2 29.291 2 25 2zM11 8C9.403 8 8.236 9.3 8.236 9.3 4.444 13.4 2.051 18.9 2.051 25 2.05 37.7 12.328 48 25 48c6.685 0 12.772-2.9 16.963-7.5 0 0-.499-3-3.592-7.4-3.459-5.217-10.466-11.788-12.709-13.805a.987.987 0 0 0-1.334.006c-1.69 1.547-6.05 5.877-7.012 7-2.295 2.4-8.68 9.999-9.08 14.299 0 0-1.397-3.4 1.696-11.2 1.925-4.686 7.903-11.652 10.802-14.691a1 1 0 0 0-.03-1.422c-.96-.899-3.199-2.474-5.216-3.687C14.092 8.7 12.497 8.1 11 8zm27.69 0c-.654 0-4.896 1.343-9.36 5.299a.992.992 0 0 0-.047 1.431c1.617 1.671 6.04 5.951 8.69 10.17 3.293 5.4 5.288 9.7 4.09 15.6C45.754 36.4 48.05 31 48.05 25c-.1-6-2.396-11.5-6.188-15.6l-.299-.3C40.766 8.2 39.587 8 38.69 8z"/></svg>
                        </span>
                    </span>
                    <span className="absolute flex items-center justify-between -bottom-[4.9375rem] left-1/2 transform -translate-x-1/2 w-[15.6875rem] h-[5.875rem] bg-[#551527] bg-opacity-[80%] rounded-full z-10"></span>
                    <span className="absolute flex items-center justify-between -bottom-[6.4375rem] left-1/2 transform -translate-x-1/2 w-[13.125rem] h-[5.875rem] bg-[#491222] bg-opacity-[20%] rounded-full z-0"></span>
                </div>
            </div>

            <div className="mt-28 px-[1.5625rem]">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-bold text-[2.5rem]">Valorant</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>58</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none"><path fill="#fff" stroke="#fff" d="m8.893 1.6 1.57 4.775.113.344h5.425L11.91 9.656l-.298.214.115.349 1.565 4.762-4.107-2.95-.292-.209-.291.21-4.107 2.949 1.565-4.762.115-.349-.298-.214-4.09-2.937H7.21l.113-.344 1.57-4.774Z"/></svg>
                    </div>
                </div>

                <div className="font-semibold text-[0.6875rem] text-[#C5BEC0] mt-4">
                    <p>Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by an official release on June 2, 2020.</p>
                </div>
            </div>

            <div className="mx-[1.5625rem] mt-20 bg-[#19030A]/40 p-5 rounded-3xl">
                <h3 className="font-semibold text-xl mb-4">Discover More</h3>
                <div className="grid grid-cols-2 gap-5">
                    <Link to="" className="block">
                        <img src="https://i.ebayimg.com/images/g/sWEAAOSwpLFgomKm/s-l1600.jpg" alt="" className="object-cover rounded-[1.25rem] w-full"/>
                    </Link>
                    <Link to="" className="block">
                        <img src="https://i.ebayimg.com/images/g/sWEAAOSwpLFgomKm/s-l1600.jpg" alt="" className="object-cover rounded-[1.25rem] w-full"/>
                    </Link>
                    <Link to="" className="block">
                        <img src="https://i.ebayimg.com/images/g/sWEAAOSwpLFgomKm/s-l1600.jpg" alt="" className="object-cover rounded-[1.25rem] w-full"/>
                    </Link>
                    <Link to="" className="block">
                        <img src="https://i.ebayimg.com/images/g/sWEAAOSwpLFgomKm/s-l1600.jpg" alt="" className="object-cover rounded-[1.25rem] w-full"/>
                    </Link>
                </div>
            </div>

            <BottomNav />
        </section>
    );
}

export default GameDetails;
