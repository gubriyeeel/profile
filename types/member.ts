export type Member = {
  id: string;
  firstName: string;
  lastName: string;
  nickName: string;
  location: string;
  religion: string;
  mbti: string;
  description: string;
  imageUrls: string;
  favorites?: Favorite;
  socials?: Social[];
  hobbies?: Hobby[];
};

export type Favorite = {
  id: string;
  food: string;
  color: string;
  electricFanNumber: number;
  quote: string;
  memberId: string;
};

export type Social = {
  id: string;
  name: string;
  url: string;
  memberId: string;
};

export type Hobby = {
  id: string;
  name: string;
  memberId: string;
};