import React from "react";

import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/Slices/CounterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counterReducer);

  const addCounter = () => {
    dispatch(increment())
  };
  const minusCounter = () => {
    dispatch(decrement())
  };
  return (
    <>
      <div className="heading">
        <h1 className="text-center text-white fst-italic">
          Counter Application
        </h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="app__container d-flex flex-column align-items-center mt-5">
              <div className="counter__container mb-4">
                <h3 className="mb-0">{counter}</h3>
              </div>
              <div className="mt-3 mb-2">
                <button className=" btn__custom btn-1" onClick={addCounter}>
                  +
                </button>
                <button className=" btn__custom btn-2" onClick={minusCounter}>
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
