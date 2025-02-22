import css from "./FriendList.module.css";
import FriendProfile from "../FriendProfile/FriendProfile";

export default function FriendList({ friends: { friends } }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendProfile
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
