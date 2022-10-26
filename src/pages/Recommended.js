import TopNav from "../components/TopNav";
import MiddleNav from "../components/MiddleNav";
import Popular from "../components/Popular";
import BottomNav from "../components/BottomNav";

const Recommended = () => {
    return (
        <div className="relative">
            <TopNav />
            <MiddleNav />
            <Popular />
            <BottomNav />
        </div>
    );
}

export default Recommended;
