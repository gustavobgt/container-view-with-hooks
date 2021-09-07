import style from './Card.module.css';
import { User } from '../../@types';

export const Card = ({ title, location, email, gender, image }: User) => (
  <section className={style.card}>
    <img className={style.cardImage} src={image} alt={title} />
    <div className={style.cardContent}>
      <h3 className={style.cardTitle}>{title}</h3>
      <span className={style.cardLocation}>{location}</span>
      <div className={style.cardContact}>
        <span className={style.cardMail}>{`email: ${email}`}</span>
        <span className={style.cardGender}>{`gender: ${gender}`}</span>
      </div>
    </div>
  </section>
);
