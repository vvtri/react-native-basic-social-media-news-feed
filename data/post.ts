import { faker } from '@faker-js/faker';

export const postsData = Array(10)
  .fill(0)
  .map<IPost>((_, idx) => ({
    id: idx + 1,
    name: `${idx + 1} ${faker.person.fullName()}`,
    address: faker.location.streetAddress(),
    like: faker.number.int({ max: 1000 }),
    comment: faker.number.int({ max: 1000 }),
    bookmark: faker.number.int({ max: 1000 }),
  }));

export type IPost = {
  id: number;
  name: string;
  address: string;
  like: number;
  comment: number;
  bookmark: number;
};
