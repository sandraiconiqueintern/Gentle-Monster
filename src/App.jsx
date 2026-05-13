import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewCollection from './components/NewCollection'
import BrandWorld from './components/BrandWorld'
import FlagshipStores from './components/FlagshipStores'
import Collaborations from './components/Collaborations'
import EditorialGrid from './components/EditorialGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
      <NewCollection />
      <BrandWorld />
      <FlagshipStores />
      <Collaborations />
      <EditorialGrid />
      <Footer />
    </div>
  )
}
