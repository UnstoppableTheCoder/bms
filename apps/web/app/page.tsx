import { prisma } from "@repo/prisma/client";

export default async function Home() {
  const user = await prisma.user.findFirst();

  if (!user) return <div>No User Found. Sorry......!</div>;

  return (
    <div>
      <div>{user.username}</div>
      <div>{user.password}</div>
    </div>
  );
}
