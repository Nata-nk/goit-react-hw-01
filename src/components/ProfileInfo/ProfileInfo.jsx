import css from "./ProfileInfo.module.css";

export default function ProfileInfo({ name, tag, location, image }) {
  return (
    <div className={css.container}>
      <img className={css.img} src={image} alt="User avatar" />
      <p className={css.textName}>{name}</p>
      <p className={css.textTag}>@{tag}</p>
      <p className={css.text}>{location}</p>
    </div>
  );
}
