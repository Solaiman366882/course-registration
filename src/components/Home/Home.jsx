import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const Home = () => {

    const[courses,setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);

    return (
        <div className="bg-[#F3F3F3] min-h-screen ">
            <div className="max-w-screen-xl mx-auto">
                <h1 className=' text-[#1C1B1B] text-3xl font-bold text-center pt-12 mb-8'>Course Registration</h1>
                <div className="flex gap-5">
                    <Cards courses={courses}></Cards>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;