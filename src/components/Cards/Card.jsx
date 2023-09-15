import PropTypes from 'prop-types'
import dollar from '../../assets/icons/dollar-sign.png';
import book from '../../assets/icons/Frame.png'
import './Card.css'

const Card = ({course}) => {

    // const{title,img,description,price,credit_hour} = course;
    // console.log(course.id);
    console.log(course);

    return (
        <div className="card">
            <div className="card-img">
                {/* <img src={} alt="" /> */}
            </div>
            <div className="card-body">
                <h2>Introduction to C Programming</h2>
                <p className='description'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="price-hour">
                    <div className="price">
                        <img src={dollar} alt="" />
                        <p>Price : 15000</p>
                    </div>
                    <div className="hour">
                        <img src={book} alt="" />
                        <p>Credit : 1hr</p>
                    </div>
                </div>
            </div>
            <div className="card-end">
                <button className='btn'>Select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    course:PropTypes.object
}

export default Card;