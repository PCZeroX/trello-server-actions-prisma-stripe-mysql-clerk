import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

import { QueryProvider } from "@/providers/query-provider";
import { ModalProvider } from "@/providers/modal-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
