// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const url = `https://api.github.com/users/JenishDayani`;
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className='flex -space-x-72 items-center text-center text-white p-4 m-4 bg-gray-600'>
      Github Followers :-{data?.followers}
      <img src={data?.avatar_url} alt='Github Profile' width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/JenishDayani');
  return response.json();
};
