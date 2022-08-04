import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "components/friendList/friendList";
import { Transactions } from "./transactions/transactions";
import propTypes from "prop-types";
import user from "./profile/user.json";
import data from "./statistics/data.json";
import friends from "./friendList/friends.json";
import items from "./transactions/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={items} />
    </div>
  );
};

Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.shape({
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  }),
}