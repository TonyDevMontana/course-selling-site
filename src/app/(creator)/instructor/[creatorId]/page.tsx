export default function Page({
  params,
}: {
  params: {
    creatorId: string;
  };
}) {
  return <div>`Instructor page with query {params.creatorId}`</div>;
}
