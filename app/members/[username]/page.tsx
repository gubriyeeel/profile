import { getUser } from "@/data/get-user";

type MemberPageProps = {
  params: {
    username: string;
  };
};

export default async function MemberPage({ params }: MemberPageProps) {
  const username = params.username;
  const member = await getUser(username);

  return (
    <div>
      <h1>{member.username}</h1>
      <p>{member.email}</p>
      <p>{member.name}</p>
      <p>{member.password}</p>
      <p>{member.id}</p>
    </div>
  );
}
