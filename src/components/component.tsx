import image from './images/1.png'
import image2 from './images/2.jpg'
import avatar from './images/Lolla 1.jpg';
import star from'./images/fluent-emoji-flat_star.jpg';
import pop from './images/solar_podcast-outline (2).jpg';
import pop2 from './images/streamline_computer-voice-mail-mic-audio-mike-music-microphone.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export function Component(){
    return (
        <>
         <div className="mx-32 mt-10">
        {/* Header with navbar */}
        
         <div className="flex justify-evenly font-bold text-xl">
            <a className='w-3/5'href="#">Logo</a>
            <div className="flex justify-evenly w-2/5">
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Review</a>
        </div>
        </div>

        {/* section-1: info  with image siding */}

        <section className="flex my-20 mr-10">
            <div className="w-2/4">
                <h1 className='text-5xl my-12 font-bold '>Learn how to launch a sucessful podcast</h1>
                <p className='w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate eaque voluptatum minus provident modi doloribus quis magnam aspernatur? Vero quia quisquam impedit quaerat esse. Culpa, voluptatibus! Voluptate, autem excepturi.</p>
                <button className='h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-12 pt-4 pb-14 rounded-xl text-xl font-bold text-center align-middle my-12'>Sign Up Now</button>
            </div>
            <div className="w-[500px] h-96 px-4 border-l-0 border-t-0 border-r-8 border-b-8 border-color_1  border-dotted">
                <img className='-z-10 w-[400px] mx-5' src={image} alt="imag_1" />
                <img className=' relative bottom-40 right-6 w-[400px]' src={image2} alt="image1" />
                <img className='relative bottom-64 left-96 pl-12 w-[105px]' src={pop} alt="totled-img" />
                <img className='relative bottom-64 left-96  w-[120px]' src={pop2} alt="titled-img" />
            </div>
            
        </section>
        {/*  section-2 :info and course details  */}

        <section id='about' className="flex py-12">
        <div className="w-2/4">
            <div className="flex">
            <div className="border p-5 my-8 mr-4 relative -top-10 rounded-xl border-violet-500 w-1/2">
                <h1 className='font-extrabold my-4  text-2xl'>Interactive Features</h1>
                <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            
            <div className="border p-5 my-8 mr-4 rounded-xl border-violet-500 w-1/2">
                <h1 className='font-extrabold my-4  text-2xl'>Interactive Features</h1>
                <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            </div>
            <div className="flex">
            <div className="border p-5 my-8 mr-4 relative -top-10 rounded-xl border-violet-500 w-1/2">
                <h1 className='font-extrabold my-4  text-2xl'>Interactive Features</h1>
                <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            
            <div className="border p-5 my-8 mr-4 rounded-xl border-violet-500 w-1/2">
                <h1 className='font-extrabold my-4  text-2xl'>Interactive Features</h1>
                <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            </div>
            
        </div>
        <div className="w-2/4 p-20">
            <h1 className='text-5xl my-12 font-bold'>About the Course</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
            <button className='h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-12 pt-4 pb-14 rounded-xl text-xl font-bold text-center align-middle my-12'>Explore More</button>
        </div>
        </section>

        {/* section-3:pricing plan  */}

        <section id='pricing' className="py-8 text-center">
            <h1 className='text-4xl font-extrabold mt-12 m-8'>Choose your plan</h1>
            <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's </p>
            <div className=" inline shadow-xl ml-24 p-2 m-8 mt-16">
            <button className='px-4 focus:bg-color_2 rounded-xl'>Monthly</button>
            <button className='px-4 focus:bg-color_2 rounded-xl'>Yearly</button>
            </div>
            <div className="flex m-12" >
                <div className="w-1/4 border rounded-xl mt-16 mr-24 text-left p-10 border-violet-500 hover:text-white hover:bg-color_1">
                    <p className='text-2xl font-bold pb-4'>Basic Plan</p>
                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <p className='my-6'> <b className='text-4xl'>$ 54</b><p className='mx-4 inline'>/month</p> </p>
                    <ul className='list-disc list-inside'>
                        <li>Free accesss to video class</li>
                        <li>Free accesss to video class</li>
                        <li>Free accesss to video class</li>
                    </ul>
                    <button className='p-6 text-color_1 border-violet-500 bg-white my-6 border rounded-xl'>Start Free Trail</button>
                </div>
                <div className="w-1/4 border  mt-16 mr-24 rounded-xl text-left p-10 border-violet-500 hover:text-white hover:bg-color_1">
                    <p className='text-2xl font-bold pb-4'>Premium Plan</p>
                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <p className='my-6'> <b className='text-4xl'>$ 54</b><p className='mx-4 inline'>/month</p> </p>
                    <ul className='list-disc list-inside'>
                        <li>Free accesss to video class</li>
                        <li>Free accesss to video class</li>
                        <li>Free accesss to video class</li>
                    </ul>
                    <button className='p-6 text-color_1 border-violet-500 bg-white  my-6 border rounded-xl'>Start Free Trail</button>
                </div>
                <div className="w-1/4 border rounded-xl text-left mt-16 p-10 border-violet-500 hover:text-white hover:bg-color_1">
                    <p className='text-2xl font-bold pb-4'>Basic Plan</p>
                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <p className='my-6'> <b className='text-4xl '>$ 54</b><p className='mx-4 inline'>/month</p> </p>
                    <ul className='list-disc list-inside'>
                        <li>Free accesss to video class</li>
                        <li>Free accesss to video class</li>
                        <li>Free accesss to video class</li>
                    </ul>
                    <button className='p-6 text-color_1 border-violet-500 bg-white  my-6 border rounded-xl'>Start Free Trail</button>
                </div>
            </div>
        </section>

        {/* section-4 :customer reviews */}

        <section id='reviews' className='m-8 pl-2'>
                <div className="text-left pl-4">
                    <h1 className='text-5xl  font-bold'>Review from customers</h1>
                    <p className='w-1/3 my-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                </div>
                <div className=" overflow-x-auto my-2 grid grid-flow-col gap-x-2 ">
                <div className="w-[500px] h-64 my-6 mr-8 border rounded-xl shadow  hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-8 border rounded-xl shadow  hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-8 border rounded-xl shadow  hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-8 border rounded-xl shadow  hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-8 border rounded-xl shadow  hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
                <div className="w-[500px] h-64 my-6 mr-4 border rounded-xl shadow hover:shadow-2xl">
                <div className="relative m-8 flex items-center">
                <img src={avatar} alt="" className="rounded-full" />
                <div className="text-md ml-4 leading-6">
                  <p className="font-semibold text-xl">Lolla Smith</p>
                  <p >Microsoft</p>
                  <div className="flex gap-x-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
                </div>
                <p className='p-3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
             </div>
        </section>

        {/* section : ending  */}

        <section className=' flex flex-col items-center my-3'>
            <div className="text-center ">
                <p className="text-4xl py-12 font-bold">We have what you are looking for</p>
                <p className=" w-1/2 mx-80 font-semibold text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
            </div>
            <button className=' w-1/5 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-12 pt-4 pb-14 rounded-xl text-xl font-bold text-center align-middle my-12'>Get Started</button>
        </section>
        <section className='border ml-32 w-4/5'>
            <hr />
        </section >

        {/* footer  */}

        <footer className='my-8'>
            <div className="flex justify-evenly">
                <p className='text-sm'>All rights Reserved @Copyrights 2023</p>
<div className="mx-2 flex">
<p className='px-2'>Terms of Service</p>
                <p className='px-2'>PrivacyPolicy</p>
                <p className='px-2'>Product</p>
</div>
                
                <div className='flex justify-between px-4' >
                    <div className="px-2">
                    <FacebookRoundedIcon/>
                    </div>
                    <div className="px-2">
                    <YouTubeIcon/>
                    </div>
                    <div className="px-2">
                    <InstagramIcon/>
                    </div>
                    <div className="px-2">
                    <TwitterIcon/>
                    </div>
                </div>
            </div>
        </footer>
         </div>
        

        
        </>
    )
}
