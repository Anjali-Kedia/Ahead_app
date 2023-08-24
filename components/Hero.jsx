import img1 from '../assets/hero_download.png';
import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='bg-[#e8dff5]  h-full rounded-3xl flex flex-row mr-8 ml-8'>
      <div className="basis-1/2 flex flex-col ">
        <div className="pt-40 pl-10">
          <h1 className=''>
            Ahead app
          </h1>
          <h1 className='text-7xl'>Master your life by mastering emotions</h1>
        </div>
        <div className="flex">
          
          <Image  src ={img1} width={250} height={200}/>
          <AiFillStar className='text-[yellow]'/>

        </div>
        
      </div>
      <div>

      </div>
    </div>

   
  )
}
export default Hero
