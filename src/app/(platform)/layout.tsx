import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      {/* <QueryProvider> */}
      {/* <Toaster /> */}
      {/* <ModalProvider /> */}
      {children}
      {/* </QueryProvider> */}
    </ClerkProvider>
  );
};

export default PlatformLayout;
