import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Number of Cakes: {numOfCakes}</p>
      <button onClick={() => dispatch(buyCake())}>buy cakes</button>
    </div>
  );
}

export default HooksCakeContainer;
