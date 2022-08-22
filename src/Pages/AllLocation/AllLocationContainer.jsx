import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllLocation from "./AllLocation";
import { getPosts } from "../../modules/posts";

function AllLocationContainer() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.posts);

  useEffect(() => {
    !data && dispatch(getPosts());
  }, [data, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;
  return <AllLocation posts={data} />;
}

export default AllLocationContainer;
