
import FollowingList from "./FollowingList";
import MyFollowers from "./MyFollowers";
const UserConnections = () => {

  return (
    <div className="w-64 p-4 hidden lg:block">
      <div className="w-full">
        <MyFollowers />
        <FollowingList />
      </div>
    </div>
  );
};

export default UserConnections;
