import css from'./Profile.module.css'
const Profile = ({
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
  }) => {
     return (
      <div className={css.profile}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.list}>
        <li>
          <span className={css.stats}>Followers</span>
          <span className={css.amount}>{followers}</span>
        </li>
        <li>
          <span className={css.stats}>Views</span>
          <span className={css.amount}>{views}</span>
        </li>
        <li>
          <span className={css.stats}>Likes</span>
          <span className={css.amount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;