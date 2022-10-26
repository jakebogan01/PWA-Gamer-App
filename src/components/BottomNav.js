import {Link} from "react-router-dom";
import {Component} from "react";

export default class BottomNav extends Component {
    render() {
        return (
            <section className="fixed flex items-center justify-between bottom-0 left-0 right-0 bg-[#FE4256] bg-opacity-[15%] px-[1.5625rem] pt-1.5 w-full h-[5.75rem] rounded-tr-[2.5rem] rounded-tl-[2.5rem] overflow-hidden">
                <Link to="/" className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-[3.125rem] h-[3.125rem] border border-[#D77683] rounded-full" style={{backgroundImage: "linear-gradient(#F83F56, #A11538 90%)", boxShadow: "0 0.25rem 0.8125rem -0.375rem #F87D9F"}}>
                        <svg width="28" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.992 0h14.046c1.074 0 2.024.435 2.822 1.132 1.41 1.22 2.422 3.31 3.128 5.487C27.663 8.797 28 11.061 28 12.716c0 1.22-.215 2.178-.613 2.584l-.031.03c-.03.028-.092.057-.123.115-.43.348-1.257.552-2.024.552-.797.029-1.594-.146-2.024-.523l-.122-.116-3.68-4.123a.552.552 0 0 0-.215-.145 1.202 1.202 0 0 0-.368-.058H9.23c-.153 0-.275.03-.367.059a.927.927 0 0 0-.215.145l-3.68 4.122c-.03.03-.061.087-.123.116-.429.378-1.257.552-2.054.523-.767-.03-1.595-.203-2.024-.552l-.123-.116-.03-.029C.213 14.865 0 13.936 0 12.716c0-1.654.337-3.919 1.012-6.096.675-2.207 1.718-4.297 3.128-5.516C4.968.436 5.92 0 6.992 0Zm12.36 2.729c.551 0 1.011.406 1.011.93 0 .522-.46.928-1.012.928s-.981-.406-.981-.929c0-.522.43-.929.981-.929ZM17.45 4.5c.552 0 .981.407.981.93 0 .522-.43.928-.981.928-.552 0-1.012-.406-1.012-.929.03-.493.49-.929 1.012-.929Zm3.772 0c.552 0 .981.407.981.93 0 .522-.43.928-.981.928-.552 0-.982-.406-.982-.929 0-.493.43-.929.982-.929Zm-1.87 1.8c.551 0 1.011.406 1.011.93 0 .522-.46.928-1.012.928s-.981-.406-.981-.929.43-.929.981-.929Zm-8.619-1.539c.399 0 .706.29.706.639 0 .377-.307.668-.706.668L9.2 6.097l.03 1.451a.688.688 0 0 1-.674.668c-.368 0-.706-.29-.706-.638l-.03-1.452-1.534.029c-.398 0-.705-.29-.705-.639 0-.377.306-.668.705-.668L7.82 4.82l-.03-1.452c0-.349.306-.668.674-.668.368 0 .705.29.705.639L9.2 4.79l1.534-.029Z" fill="#D9D9D9"/></svg>
                    </div>
                    <span className="font-semibold text-sm opacity-50">Gamers</span>
                </Link>

                <ul className="flex items-center space-x-4">
                    <li>
                        <Link to="" className="flex items-center justify-center w-10 h-10 border border-[#806F71] rounded-full">
                            <svg width="19" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.344.882a.772.772 0 0 0-.46-.153c-.416 0-.753.318-.753.711a.7.7 0 0 0 .344.596 4.171 4.171 0 0 1 1.212 1.076c.139.18.311.433.461.76.077.169.257.595.32 1.174.043.402.012.71-.015.962a5.19 5.19 0 0 1-.187.943 4.85 4.85 0 0 1-.579 1.233c-.03.048-.075.12-.132.206 0 0-.213.329-.469.673-.533.716-1.208 1.486-1.208 1.486-.583.666-1.036 1.13-1.892 2.01-.349.36-.6.611-.798.807-.254.25-.445.435-.791.769-.272.263-.411.396-.532.507-.312.287-.58.51-.76.656-.087.061-.164.11-.223.145a1.21 1.21 0 0 1-.204.102.548.548 0 0 1-.178.033c-.011 0-.027 0-.046-.003a.541.541 0 0 1-.132-.03 1.204 1.204 0 0 1-.205-.102 3.48 3.48 0 0 1-.222-.145 16.063 16.063 0 0 1-.76-.656c-.121-.111-.26-.244-.533-.507-.346-.334-.537-.518-.79-.769-.199-.196-.45-.447-.799-.806-.856-.88-1.308-1.345-1.892-2.01 0 0-.675-.771-1.208-1.487a15.164 15.164 0 0 1-.6-.88 4.831 4.831 0 0 1-.58-1.232 5.189 5.189 0 0 1-.187-.943 4.21 4.21 0 0 1-.014-.962c.062-.58.242-1.005.32-1.174.149-.327.322-.58.46-.759a4.151 4.151 0 0 1 1.213-1.076c.065-.039.366-.214.729-.346.144-.053.277-.09.298-.097a4.677 4.677 0 0 1 .746-.142 4.14 4.14 0 0 1 .429-.03c.168-.003.294.006.401.014a4.233 4.233 0 0 1 1.435.348 4.04 4.04 0 0 1 .846.483c.178.13.358.264.519.4a.894.894 0 0 0 .362.186.824.824 0 0 0 .21.024.962.962 0 0 0 .21-.024c.003-.001.07-.017.134-.044a.884.884 0 0 0 .227-.141c.162-.137.342-.27.52-.4a3.953 3.953 0 0 1 .846-.485c.225-.096.402-.151.443-.164a4.237 4.237 0 0 1 .991-.183l.095-.006v-.001c.415 0 .752-.319.752-.711 0-.393-.338-.711-.753-.711a.806.806 0 0 0-.156.015c-1.254.08-2.4.53-3.309 1.247A5.975 5.975 0 0 0 5.793 0C2.593 0 0 2.452 0 5.476c.003.11.01.265.024.45.005.055.008.11.015.163.01.109.023.222.04.345.205 1.454.863 3.335 6.492 8.723 1.342 1.284 1.995 1.838 2.93 1.843.947.005 1.614-.558 3.073-1.969 5.39-5.21 6.074-6.992 6.315-8.45A9.116 9.116 0 0 0 19 5.477c0-1.929-1.06-3.618-2.655-4.594" fill="#fff"/></svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="flex items-center justify-center w-10 h-10 border border-[#806F71] rounded-full">
                            <svg width="17" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.147 10.24c-3.146 0-5.718 2.326-5.718 5.178v.737c0 1.217 1.11 2.224 2.452 2.224h4.9c.216-.001.423-.08.576-.22a.706.706 0 0 0 .237-.523.707.707 0 0 0-.24-.521.86.86 0 0 0-.574-.217H2.881c-.46 0-.82-.325-.82-.743v-.737c0-2.052 1.822-3.698 4.086-3.698h4.9c2.263 0 4.079 1.646 4.079 3.698v.737c0 .418-.36.743-.82.743h-.813a.861.861 0 0 0-.579.215.708.708 0 0 0-.24.523c-.002.197.084.386.238.526.154.14.363.217.58.217h.814c1.343 0 2.453-1.006 2.453-2.224v-.737c0-2.852-2.567-5.178-5.713-5.178H6.147Zm4.899 6.658a.862.862 0 0 0-.578.215.707.707 0 0 0-.242.523c0 .197.086.386.24.526s.362.217.58.217c.217-.001.424-.08.577-.22a.706.706 0 0 0 .237-.523.706.706 0 0 0-.24-.521.86.86 0 0 0-.574-.217ZM8.594.62c-2.696 0-4.9 1.992-4.9 4.435 0 2.443 2.205 4.441 4.9 4.441 2.695 0 4.899-1.997 4.899-4.44 0-2.444-2.204-4.436-4.9-4.436Zm0 1.475c1.813 0 3.266 1.317 3.266 2.96 0 1.644-1.453 2.961-3.266 2.961S5.328 6.7 5.328 5.056c0-1.644 1.453-2.961 3.266-2.961Z" fill="#fff"/></svg>
                        </Link>
                    </li>
                </ul>
            </section>
        );
    }
}