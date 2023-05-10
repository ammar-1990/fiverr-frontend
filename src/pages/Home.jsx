
import Featured from "../components/Featured"
import Slider from "../components/Slider"
import TrustedBy from "../components/TrustedBy"
import Features from "../components/Features"
import { fakeData, projects } from "../fakeData"
import FeaturesTwo from "../components/FeaturesTwo"



const Home = () => {

const data = fakeData
const projectData = projects

  return (
    <div >
<Featured />
<TrustedBy />
<Slider data={data} />
<Features />
<FeaturesTwo />
<Slider data={projectData} projects/>

      
    </div>
  )
}

export default Home