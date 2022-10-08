import Head from 'next/head'
import Navbar from "./../Components/Navbar/Navbar";
import Feature from "./../Components/Feature/Feature";
import Statistics from "./../Components/Statistics/Statistics";
import TopPartners from "./../Components/TopPartners/TopPartners";
import TopClients from "./../Components/TopClients/TopClients";
import HearFromClients from "./../Components/HearFromClients/HearFromClients";
import Info from "./../Components/Info/Info";
import Footer from "./../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GREEDYGAME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Navbar />
        {/* feature page + floating contact form */}
        <Feature />
        {/* statistics */}
        <Statistics />
        {/* top parterns */}
        <TopPartners />
        {/* top clients */}
        <TopClients />
        {/* hear from clients */}
        <HearFromClients />
        {/* info */}
        <Info />
        {/* footer + sticky call us now when sm */}
        <Footer />
      </main>
    </div>
  )
}
