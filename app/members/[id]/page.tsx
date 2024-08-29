type MemberPageProps = {
  params: {
    id: string;
  };
};

export default async function MemberPage({ params }: MemberPageProps) {
  const id = params.id;

  return (
    <div>
      <h1>Member</h1>
      {id}
    </div>
  );
}
