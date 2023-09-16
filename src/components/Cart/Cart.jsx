import './cart.css'
const Cart = ({selectedCourse,remainingHour,totalHour,totalPrice}) => {
    return (
        <div className="w-[25%] bg-white rounded-xl p-6">
            <div>
                <h2 className=" text-lg text-[#2F80ED] font-bold">Credit Hour Remaining {remainingHour} hr</h2>

                <div className="course-list">
                    <h2>Course Name</h2>
                    {
                        selectedCourse.map((course,idx) => <p key={course.id}>{idx+1} {course.title}</p>)
                    }
                </div>
                <div className="cart-hour">
                    <h3>Total Credit Hour : {totalHour}</h3>
                </div>
                <div className='total-price'>
                    <h3>Total Price : {totalPrice} USD</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;