import { auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { orgId } = auth();

  return (
    <div>
      <h2>OrganizationIdPage</h2>

      <p>Organization: {orgId}</p>
    </div>
  );
};

export default OrganizationIdPage;
