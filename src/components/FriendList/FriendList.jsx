import css from "./FriendList.module.css";
export default function FriendList({ friends: { friends } }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <>
            <img src={friend.avatar} alt="Avatar" width="100" />
            <p className={css.name}>{friend.name}</p>
            <p className={friend.isOnline ? css.online : css.offline}>
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </>
        </li>
      ))}
    </ul>
  );
}
