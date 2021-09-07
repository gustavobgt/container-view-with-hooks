import { useUserData } from '../../hooks';

import { Card } from './Card.component';

export const CardContainer = () => {
  const { title, location, email, gender, image } = useUserData();

  return (
    <Card
      title={title}
      location={location}
      email={email}
      gender={gender}
      image={image}
    />
  );
};
