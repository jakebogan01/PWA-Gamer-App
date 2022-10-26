import {Link} from "react-router-dom";
import user from '../assets/images/profile-pic.png';

const Home = () => {
    return (
        <div className="bg-no-repeat" style={{backgroundImage: "linear-gradient(to bottom right, #FF4359, #AA1439, #68192F, #53192A, #000000)"}}>
            <header>
                <nav>
                    <ul className="flex items-center">
                        <li>
                            <Link to="/" className="inline-block w-[3.125rem]">
                                <img src={user} className="w-full" alt="user profile" />
                            </Link>
                        </li>
                        <li>
                            <span className="block">Happy Weekend</span>
                            <span className="block">Hi, Vitaily</span>
                        </li>
                    </ul>

                    <Link to="">

                    </Link>
                </nav>
            </header>
        </div>
    );
}

export default Home;
