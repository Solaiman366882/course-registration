import PropTypes from 'prop-types'
import Card from"./Card"
const Cards = ({courses,handleSelectedCourse}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full xl:w-[75%] lg:w-[65%]">
            {/* <Card></Card>
            <Card></Card>
            <Card></Card> */}
            {
                courses.map(course => <Card 
                    key={course.id} 
                    course={course} 
                    handleSelectedCourse={handleSelectedCourse}
                    ></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    courses:PropTypes.array,
    handleSelectedCourse:PropTypes.func
}

export default Cards;