import Swal from 'sweetalert2'
import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const Home = () => {

    const[courses,setCourses] = useState([]);
    const[selectedCourse,setSelectedCourses] = useState([]);
    const[remainingHour,setRemainingHour] = useState(20);
    const[totalHour,setTotalHour] = useState(0);
    const[totalPrice,setTotalPrice] = useState(0);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);

    const handleSelectedCourse = (course) => {
        const newSelectedCourses = [...selectedCourse,course];
        let priceCount = course.price;
        let hourCount = course.credit_hour;
        const isExist = selectedCourse.find(item => course.id == item.id)
        const newRemainingHour = remainingHour - hourCount;
        if(isExist){
            return Swal.fire({
                icon: 'error',
                title: 'Oops... Sorry Dear &#128520;',
                text: 'You have already purchase this course',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            // return alert("You have already purchase this course")
        }
        selectedCourse.map(course => {
            hourCount += course.credit_hour;
            priceCount += course.price;
        })
        if(hourCount > 20){
            return Swal.fire({
                icon: 'error',
                title: 'Oops... Sorry Dear &#128519;',
                text: 'You can get maximum 20 hour credit',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            // return alert('You have reached maximum hour limit.');
        }else{
            setTotalPrice(priceCount);
            setTotalHour(hourCount);
            setRemainingHour(newRemainingHour);
            setSelectedCourses(newSelectedCourses);
            console.log(selectedCourse);
        }
    }

    return (
        <div className="bg-[#F3F3F3] min-h-screen ">
            <div className="max-w-screen-xl mx-auto">
                <h1 className=' text-[#1C1B1B] text-3xl font-bold text-center pt-12 mb-8'>Course Registration</h1>
                <div className="flex flex-col justify-center items-start lg:flex-row gap-5 px-3 xl:px-0">
                    <Cards 
                    courses={courses} 
                    handleSelectedCourse={handleSelectedCourse}
                    ></Cards>
                    <Cart 
                    selectedCourse={selectedCourse} 
                    remainingHour={remainingHour} 
                    totalHour={totalHour}
                    totalPrice={totalPrice}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};



export default Home;