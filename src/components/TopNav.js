import {Link} from "react-router-dom";
import user from '../assets/images/profile-pic.png';
import {Component} from "react";

export default class TopNav extends Component {
    render() {
        return (
            <header className="pt-[2.25rem] px-[1.5625rem]">
                <nav className="flex items-center justify-between">
                    <ul className="flex items-center space-x-3">
                        <li className="flex">
                            <Link to="/" className="inline-block w-[3.125rem]">
                                <img src={user} className="w-full" alt="user profile" />
                            </Link>
                        </li>
                        <li>
                            <span className="block font-semibold text-[0.5625rem]">Happy Weekend</span>
                            <span className="block font-semibold text-2xl leading-none">Hi, Vitaily</span>
                        </li>
                    </ul>

                    <Link to="" className="flex justify-center items-center w-[3.125rem] h-[3.125rem] border rounded-full" style={{borderColor: "rgba(59, 35, 39, 32%)"}}>
                        <svg width="18" height="18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M3.687 0C1.644 0 0 1.586 0 3.555v.36C0 5.885 1.644 7.47 3.687 7.47h.805c2.043 0 3.255-1.168 3.255-3.138v-.777C7.747 1.585 6.102 0 4.059 0h-.372ZM13.94 0c-2.043 0-3.688 1.586-3.688 3.555v.777c0 1.97 1.212 3.138 3.255 3.138h.805C16.355 7.47 18 5.884 18 3.915v-.36C18 1.585 16.355 0 14.312 0h-.372ZM3.687 9.886C1.644 9.886 0 11.472 0 13.442v.359c0 1.97 1.644 3.555 3.687 3.555h.372c2.043 0 3.688-1.585 3.688-3.555v-.777c0-1.97-1.212-3.138-3.255-3.138h-.805Zm9.82 0c-2.042 0-3.254 1.169-3.254 3.138v.777c0 1.97 1.645 3.555 3.687 3.555h.373c2.042 0 3.687-1.586 3.687-3.555v-.36c0-1.969-1.645-3.555-3.687-3.555h-.806Z"/></svg>
                    </Link>
                </nav>
            </header>
        );
    }
}