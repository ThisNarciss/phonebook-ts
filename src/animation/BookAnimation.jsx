import {
  Back,
  Book,
  BookLabel,
  BookLink,
  BookText,
  BookTitle,
  Front,
  HandIcon,
  HandIconMob,
  Logotype,
  LogotypeMob,
  PageFive,
  PageFore,
  PageOne,
  PageSix,
  PageThree,
  PageTwo,
} from './BookAnimation.styled';

import { useAuth } from 'hooks/useAuth';

export function BookAnimation() {
  const { isLoggedIn } = useAuth();
  return (
    <Book>
      <Back></Back>
      <PageSix>
        <ul>
          <li>
            <BookText>Alison Nader: 869-484-6441</BookText>
          </li>
          <li>
            <BookText>Arthur Abbott IV: 681-247-5168</BookText>
          </li>
          <li>
            <BookText>Salvatore Haag: 872-949-5219</BookText>
          </li>
          <li>
            <BookText>Allen Shields: 659-227-2640</BookText>
          </li>
          <li>
            <BookText>Pablo Jacobi V: 249-341-0531</BookText>
          </li>
          <li>
            <BookText>Ryan Moen: 464-784-1612</BookText>
          </li>
          <li>
            <BookText>Kristina McCullough: 444-519-4075</BookText>
          </li>
          <li>
            <BookText>Joanna Crooks: 931-218-8192</BookText>
          </li>
          <li>
            <BookText>Douglas Gutmann: 995-282-3131</BookText>
          </li>
        </ul>
      </PageSix>
      <PageFive>
        <BookLink to={isLoggedIn ? '/contacts' : '/login'}>
          <Logotype size={70} />
          <LogotypeMob size={40} />
        </BookLink>
        <HandIcon size={25} />
        <HandIconMob size={15} />
      </PageFive>
      <PageFore></PageFore>
      <PageThree></PageThree>
      <PageTwo></PageTwo>
      <PageOne></PageOne>
      <Front>
        <BookTitle>Phonebook</BookTitle>
        <BookLabel>My phone is book</BookLabel>
      </Front>
    </Book>
  );
}
