import css from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendList({ friends: { friends } }) {
  const myClasses = clsx(friends.isOnline ? css.online : css.offline);

  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <>
            <img src={friend.avatar} alt="Avatar" width="100" />
            <p className={css.name}>{friend.name}</p>
            <p className={myClasses}>
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </>
        </li>
      ))}
    </ul>
  );
}
