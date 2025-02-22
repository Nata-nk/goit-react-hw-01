import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.box}>
      <div className={css.container}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.textName}>{name}</p>
        <p className={css.textTag}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
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
    </div>
  );
}
