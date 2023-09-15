import PropTypes from 'prop-types'
import Card from"./Card"
const Cards = ({courses}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%]">
            {/* <Card></Card>
            <Card></Card>
            <Card></Card> */}
            {
                courses.map(course => <Card key={course.id} course={course}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    courses:PropTypes.array
}

export default Cards;