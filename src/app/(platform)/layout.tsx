// import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: dark,
    // }}
    >
      {/* <QueryProvider> */}
      {/* <Toaster /> */}
      {/* <ModalProvider /> */}
      {children}
      {/* </QueryProvider> */}
    </ClerkProvider>
  );
};

export default PlatformLayout;
