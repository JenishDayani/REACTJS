import { useParams } from 'react-router-dom';

function User() {
  const {userid} = useParams();
  return (
    <>
      <h1 className='bg-green-500 text-4xl text-center text-white  p-5'>User:- {userid}</h1>
    </>
  );
}

export default User;
