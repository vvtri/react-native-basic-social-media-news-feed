import { faker } from '@faker-js/faker';

export const userStoriesData = Array(10)
  .fill(0)
  .map<IUserStory>((item, idx) => ({
    id: idx + 1,
    userName: `${idx} ${faker.person.firstName()}`,
  }));

export type IUserStory = {
  id: number;
  userName: string;
};
