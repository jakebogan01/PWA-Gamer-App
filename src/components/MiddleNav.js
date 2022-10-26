import {Link, NavLink} from "react-router-dom";
import {Component} from "react";

export default class MiddleNav extends Component {
    render() {
        return (
            <section>
                <div className="px-[1.5625rem] pt-[1.5625rem]">
                    <span className="font-semibold text-[0.5625rem] text-[#D9D9D9]">Let’s Explore</span>
                    <h1 className="font-bold text-[2.5rem] leading-none">Best Games</h1>
                </div>

                <nav className="px-[1.5625rem] mt-[1.625rem]">
                    <ul className="flex items-center justify-between font-semibold text-sm">
                        <NavLink to="/" className="text-white"
                             style={({ isActive }) =>
                                 isActive
                                     ? { color: '#ffffff', }
                                     : { color: 'rgba(255,255,255,0.5)' }
                             } end>
                            Popular
                        </NavLink>
                        <NavLink to="/newest" className="text-white"
                             style={({ isActive }) =>
                                 isActive
                                     ? { color: '#ffffff', }
                                     : { color: 'rgba(255,255,255,0.5)' }
                             } end>
                            Newest
                        </NavLink>
                        <NavLink to="/recommended" className="text-white"
                                 style={({ isActive }) =>
                                     isActive
                                         ? { color: '#ffffff', }
                                         : { color: 'rgba(255,255,255,0.5)' }
                                 } end>
                            Recommended
                        </NavLink>
                        <li>
                            <Link to="/">
                                <svg width="18" height="18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M7.644 0a7.652 7.652 0 0 0-2.359 14.925 7.646 7.646 0 0 0 6.857-1.087l3.81 3.81a1.2 1.2 0 1 0 1.696-1.697l-3.808-3.81a7.646 7.646 0 0 0-1.073-10.184A7.64 7.64 0 0 0 7.644 0Zm0 12.9a5.247 5.247 0 0 1-5.248-5.25A5.25 5.25 0 0 1 7.644 2.4a5.247 5.247 0 0 1 3.709 8.96 5.253 5.253 0 0 1-3.71 1.54Z"/></svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}