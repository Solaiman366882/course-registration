import PropTypes from 'prop-types'
import dollar from '../../assets/icons/dollar-sign.png';
import book from '../../assets/icons/Frame.png'
import './Card.css'

const Card = ({course,handleSelectedCourse}) => {

    const{title,img,description,price,credit_hour} = course;

    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <h2>{title}</h2>
                <p className='description'>{description}</p>
                <div className="price-hour">
                    <div className="price">
                        <img src={dollar} alt="" />
                        <p>Price : {price}</p>
                    </div>
                    <div className="hour">
                        <img src={book} alt="" />
                        <p>Credit : {credit_hour}hr</p>
                    </div>
                </div>
            </div>
            <div className="card-end">
                <button className='btn' onClick={() => handleSelectedCourse(course)}>Select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    course:PropTypes.object,
    handleSelectedCourse:PropTypes.func
}

export default Card;