import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "components/friendList/friendList";
import { Transactions } from "./transactions/transactions";
import user from "./profile/user.json";
import data from "./statistics/data.json";
import friends from "./friendList/friends.json";
import items from "./transactions/transactions.json";

//import { FriendListItem } from "./friendList/friendListItem";

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
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transactions items={items} />
    </div>
  );
};





