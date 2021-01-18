// src/Cars.jsx

// import PropTypes from 'prop-types';
import React, { useContext } from 'react';
// import { connect } from 'react-redux';
import MyContext from './context/MyContext'
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

export default function Cars() {
  const {cars:{red: redCar,blue: blueCar,yellow: yellowCar}, moveCar} = useContext(MyContext);
  return (
    <div>
      <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar('red')}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => moveCar('blue')}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar('yellow')}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.carReducer.cars.red,
//   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow});

// const mapDispatchToProps = { moveCar };

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);