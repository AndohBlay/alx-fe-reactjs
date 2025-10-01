import userPic from '../assets/pic.png';

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 rounded-lg shadow-lg max-w-sm mx-auto my-20 text-center">
      <img
        src={userPic}
        alt="Phils Blay"
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="mt-4 text-xl font-semibold">Phils Blay</h1>
      <p className="text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
