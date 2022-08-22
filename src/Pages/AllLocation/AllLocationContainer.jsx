import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllLocation from "./AllLocation";
import { getFinedustalaram } from "../../modules/finedustalarm.js";

function AllLocationContainer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getFinedustalaram());
  }, [dispatch]);

  return <AllLocation posts={data} />;
}

export default AllLocationContainer;
