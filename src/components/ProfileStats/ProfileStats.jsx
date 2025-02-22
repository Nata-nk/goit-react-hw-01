import css from "./ProfileStats.module.css";

export default function ProfileStats({ followers, views, likes }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <span>Followers</span>
        <span className={css.span}>{followers}</span>
      </li>
      <li className={css.item}>
        <span>Views</span>
        <span className={css.span}>{views}</span>
      </li>
      <li className={css.item}>
        <span>Likes</span>
        <span className={css.span}>{likes}</span>
      </li>
    </ul>
  );
}
