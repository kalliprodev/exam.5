import React, { useContext, useReducer, createContext } from 'react';
import { data } from './data';

const FoodContext = createContext();

const ititialState = {
  meals: [],
  loading: false,
  error: null,
};

const mealReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MEALS":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_MEALS_SUCCESS":
      return {
        ...state,
        meals: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};





