import user from '../assets/images/profile-pic.png';
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <div className="relative py-[3.5625rem] h-screen">
            <div className="fixed inset-0 bg-[#150707] h-full w-full z-0"></div>
            <form id="profileForm" className="relative h-full z-10">
                <h1 className="text-center font-semibold text-2xl mb-4">Your Profile</h1>
                <div className="mx-auto w-[9.5625rem] h-[9.5625rem] rounded-full mb-11" style={{boxShadow: "0 0.25rem 1.375rem rgb(255, 64, 64, 0.6)"}}>
                    <img src={user} className="w-full" alt="user" />
                </div>

                <div className="px-[3.125rem]">
                    <div>
                        <label htmlFor="firstName" className="sr-only">First Name</label>
                        <input type="text" name="firstName" id="firstName" className="block rounded-full pt-[0.5625rem] pb-2.5 leading-none px-4 bg-[#1F222A] w-full outline-none outline-0 border-none border-0 border-transparent bg-transparent caret-white placeholder-[#B3B3B3] focus:border-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-transparent focus:placeholder:text-transparent font-semibold text-sm" placeholder="Vitaily" required />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="lastName" className="sr-only">Last Name</label>
                        <input type="text" name="lastName" id="lastName" className="block rounded-full pt-[0.5625rem] pb-2.5 leading-none px-4 bg-[#1F222A] w-full outline-none outline-0 border-none border-0 border-transparent bg-transparent caret-white placeholder-[#B3B3B3] focus:border-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-transparent focus:placeholder:text-transparent font-semibold text-sm" placeholder="Jones" required />
                    </div>
                    <div className="relative mt-5">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" className="block rounded-full pt-[0.5625rem] pb-2.5 leading-none pl-4 pr-6 bg-[#1F222A] w-full outline-none outline-0 border-none border-0 border-transparent bg-transparent caret-white placeholder-[#B3B3B3] focus:border-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-transparent focus:placeholder:text-transparent font-semibold text-sm" placeholder="vitaily_jones@gmail.com" required />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none"><rect width="10" height="10" x=".5" y=".5" stroke="#B3B3B3" rx="3.5"/><path stroke="#B3B3B3" strokeLinecap="round" d="M2.115 3.808c3.385 3.384 3.385 3.384 6.77 0"/></svg>
                        </div>
                    </div>
                    <div className="relative mt-5">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" fill="none"><path fill="#B3B3B3" d="M6.545 4.033h-.363V2.2a2.21 2.21 0 0 0-.64-1.556 2.173 2.173 0 0 0-3.085 0A2.21 2.21 0 0 0 1.818 2.2v1.833h-.363a1.45 1.45 0 0 0-1.029.43A1.474 1.474 0 0 0 0 5.5v4.033c0 .39.154.762.426 1.037.273.275.643.43 1.029.43h5.09a1.45 1.45 0 0 0 1.029-.43c.272-.275.426-.648.426-1.037V5.5c0-.389-.154-.762-.426-1.037a1.45 1.45 0 0 0-1.029-.43Zm-1.09 0h-2.91V2.2c0-.389.154-.762.426-1.037a1.448 1.448 0 0 1 2.058 0c.272.275.426.648.426 1.037v1.833Z"/></svg>
                        </div>
                        <input type="password" name="password" id="password" className="block rounded-full pt-[0.5625rem] pb-2.5 leading-none pl-7 pr-6 bg-[#1F222A] w-full outline-none outline-0 border-none border-0 border-transparent bg-transparent caret-white placeholder-[#B3B3B3] focus:border-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-transparent focus:placeholder:text-transparent font-semibold text-sm" placeholder="Password" required />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" fill="none"><path fill="#B3B3B3" d="m7.418 7.877-1.11-1.11A2.406 2.406 0 0 1 3.234 3.69L1.816 2.275A9.308 9.308 0 0 0 0 4.5s2.063 3.781 5.5 3.781a4.832 4.832 0 0 0 1.918-.404ZM3.582 1.123A4.832 4.832 0 0 1 5.5.719C8.938.719 11 4.5 11 4.5s-.646 1.183-1.816 2.226L7.767 5.31A2.406 2.406 0 0 0 4.69 2.233l-1.11-1.11Z"/><path fill="#B3B3B3" d="M3.798 4.257a1.719 1.719 0 0 0 1.945 1.945L3.798 4.257Zm3.404.486L5.257 2.798a1.719 1.719 0 0 1 1.945 1.945Zm2.18 4.125L1.132.618l.486-.486 8.25 8.25-.486.486Z"/></svg>
                        </div>
                    </div>
                    <div className="relative mt-5">
                        <label htmlFor="verifyPassword" className="sr-only">Verify Password</label>
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" fill="none"><path fill="#B3B3B3" d="M6.545 4.033h-.363V2.2a2.21 2.21 0 0 0-.64-1.556 2.173 2.173 0 0 0-3.085 0A2.21 2.21 0 0 0 1.818 2.2v1.833h-.363a1.45 1.45 0 0 0-1.029.43A1.474 1.474 0 0 0 0 5.5v4.033c0 .39.154.762.426 1.037.273.275.643.43 1.029.43h5.09a1.45 1.45 0 0 0 1.029-.43c.272-.275.426-.648.426-1.037V5.5c0-.389-.154-.762-.426-1.037a1.45 1.45 0 0 0-1.029-.43Zm-1.09 0h-2.91V2.2c0-.389.154-.762.426-1.037a1.448 1.448 0 0 1 2.058 0c.272.275.426.648.426 1.037v1.833Z"/></svg>
                        </div>
                        <input type="password" name="verifyPassword" id="verifyPassword" className="block rounded-full pt-[0.5625rem] pb-2.5 leading-none pl-7 pr-6 bg-[#1F222A] w-full outline-none outline-0 border-none border-0 border-transparent bg-transparent caret-white placeholder-[#B3B3B3] focus:border-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-transparent focus:placeholder:text-transparent font-semibold text-sm" placeholder="Verify Password" required />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" fill="none"><path fill="#B3B3B3" d="m7.418 7.877-1.11-1.11A2.406 2.406 0 0 1 3.234 3.69L1.816 2.275A9.308 9.308 0 0 0 0 4.5s2.063 3.781 5.5 3.781a4.832 4.832 0 0 0 1.918-.404ZM3.582 1.123A4.832 4.832 0 0 1 5.5.719C8.938.719 11 4.5 11 4.5s-.646 1.183-1.816 2.226L7.767 5.31A2.406 2.406 0 0 0 4.69 2.233l-1.11-1.11Z"/><path fill="#B3B3B3" d="M3.798 4.257a1.719 1.719 0 0 0 1.945 1.945L3.798 4.257Zm3.404.486L5.257 2.798a1.719 1.719 0 0 1 1.945 1.945Zm2.18 4.125L1.132.618l.486-.486 8.25 8.25-.486.486Z"/></svg>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-center bottom-0 left-0 w-full px-[3.125rem]">
                    <div className="flex-1 flex justify-between items-center max-w-[17.5625rem] space-x-2">
                        <Link to="/" className="flex-1 flex items-center justify-center bg-[#1F222A] rounded-full max-w-[8rem] h-10">Cancel</Link>
                        <button type="submit" className="flex-1 flex items-center justify-center bg-[#931A3A] rounded-full max-w-[8rem] h-10">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Profile;
