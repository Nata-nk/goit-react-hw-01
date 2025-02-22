import css from "./Profile.module.css";
import ProfileStats from "../ProfileStats/ProfileStats";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.box}>
      <ProfileInfo name={name} tag={tag} location={location} image={image} />
      <ProfileStats followers={followers} views={views} likes={likes} />
    </div>
  );
}
