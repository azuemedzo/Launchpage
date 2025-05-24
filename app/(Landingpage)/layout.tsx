
import Header from "@/components/client/header";
import Footer from"@/components/client/footer";





export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
   <main>


        <Header/>
        {children}
        <Footer/>
   </main>
    
  );
}

