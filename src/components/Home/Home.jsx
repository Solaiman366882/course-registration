import Cards from "../Cards/Cards";

const Home = () => {
    return (
        <div className="bg-[#F3F3F3] min-h-screen ">
            <div className="max-w-screen-xl mx-auto">
                <h1 className=' text-[#1C1B1B] text-3xl font-bold text-center pt-12 mb-8'>Course Registration</h1>
                <div>
                    <Cards></Cards>
                </div>
            </div>
        </div>
    );
};

export default Home;