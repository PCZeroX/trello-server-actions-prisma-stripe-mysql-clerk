import { auth } from "@clerk/nextjs";

import { Separator } from "@/components/ui/separator";

const OrganizationIdPage = () => {
  const { orgId } = auth();

  return (
    <div className="w-full mb-20">
      <h2>OrganizationIdPage</h2>

      <Separator className="my-4" />

      <p>Organization: {orgId}</p>
    </div>
  );
};

export default OrganizationIdPage;
