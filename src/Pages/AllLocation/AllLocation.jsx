import React from "react";

function AllLocation({ posts }) {
  return (
    <div>
      {posts.items.map((post) => (
        <>
          <h2>{post.stationName}</h2>
          <h3>{post.sidoName}</h3>
          <p>상태 {post.pm10Grade}</p>
          <p>미세먼지 수치 {post.pm25Value}</p>
          <p>{post.dataTime} 기준</p>
        </>
      ))}
    </div>
  );
}

export default AllLocation;
