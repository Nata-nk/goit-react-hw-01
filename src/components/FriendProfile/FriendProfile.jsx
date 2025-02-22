import css from "./FriendProfile.module.css";
import clsx from "clsx";

export default function FriendProfile({ avatar, name, isOnline }) {
  const myClasses = clsx(isOnline ? css.online : css.offline);

  return (
    <>
      <img src={avatar} alt="Avatar" width="100" />
      <p className={css.name}>{name}</p>
      <p className={myClasses}>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
}
