// pages/index.tsx
import Navbar from "./Navbar";

// interface HomeProps {
//     userProfileImage: string;
// }

const Home = () => {
    return (
        <>
            <div className="h-24 p-6 border border-b-gray-200 flex justify-between sticky top-0 left-0 w-full">
                <Navbar />
            </div>
        </>
    );
};

export default Home;
