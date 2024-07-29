
import Nav from './Nav'
import Footer from './Footer'
import 'animate.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = ()=>{
    return (
        <div>
            <Nav />
            <div >
                <header className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% grid grid-cols-2 p-24'>
                    <div>
                        <img 
                        src='./images/student_study.avif'
                        className='rounded-full w-3/4 animate__animated animate__pulse'>
                        </img>
                    </div>
                    <div className='flex flex-col gap-6 justify-center'>
                        <h1 className='text-7xl font-bold text-white'>" Say hello !</h1>
                        <p className='text-2xl font-semibold'>Enjoy complete digital learning experience with CodeSchool By Priyansh Garg!</p>
                    
                        <div className='flex gap-6'>
                            <button className='bg-[#100d22] text-white px-12 py-4 rounded-md text-lg hover:bg-orange-500'>Learn More</button>
                            <button className='border border-2 border-[#100d22] text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold'>Watch Video</button>
                        </div>
                    </div>
                </header>
                <div className='p-24'>
                    <h1 className='text-center text-4xl font-bold'>Benefits & Advantages</h1>
                    <p className='text-gray-600 text-center mt-4 text-lg'>
                    Welcome to our educational institution, where excellence meets innovation. Our commitment is to provide the best learning environment and opportunities for our students.
                    </p>
                    <div className='w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8'>
                        <div className='shadow-lg border rounded-md p-4 text-center'>
                            <i className="ri-artboard-line text-6xl"></i>
                            <h1 className='text-2xl font-semibold mb-2'>Experienced Faculty</h1>
                            <p className='text-gray-600'>
                            Our faculty members are highly qualified professionals with extensive experience in their respective fields. They are dedicated to mentoring and guiding students to achieve their full potential.
                            </p>
                        </div>
                        <div className='shadow-lg border rounded-md p-4 text-center'>
                            <i className="ri-edit-box-line text-6xl"></i>
                            <h1 className='text-2xl font-semibold mb-2'>Updated Curriculum</h1>
                            <p className='text-gray-600'>
                            Our curriculum is designed to be relevant and up-to-date, incorporating the latest industry trends and technological advancements. This ensures our students are well-prepared for the future.
                            </p>
                        </div>
                        <div className='shadow-lg border rounded-md p-4 text-center'>
                            <i className="ri-tree-line text-6xl"></i>
                            <h1 className='text-2xl font-semibold mb-2'>Sustainable Environment</h1>
                            <p className='text-gray-600'>
                            We pride ourselves on maintaining a green and sustainable campus. Our commitment to environmental sustainability creates a healthy and inspiring learning atmosphere for our students.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 p-12'>
                    <div>
                        <Swiper className="w-8/12">
                            <SwiperSlide><img src='https://th.bing.com/th/id/OIG2..q2bU5k6RSkukyu834rT?pid=ImgGn' className='w-full'></img></SwiperSlide>
                            <SwiperSlide><img src='https://th.bing.com/th/id/OIG2.2KHK5TGiqVZ80KJAKl9P?pid=ImgGn' className='w-full'></img></SwiperSlide>
                            <SwiperSlide><img src='https://th.bing.com/th/id/OIG2.HD7mPGrjtwhgHB3rIs8j?pid=ImgGn' className='w-full'></img></SwiperSlide>
                            <SwiperSlide><img src='https://th.bing.com/th/id/OIG2.2KHK5TGiqVZ80KJAKl9P?pid=ImgGn' className='w-full'></img></SwiperSlide>
                        </Swiper>
                    </div> 
                    <div className='flex flex-col gap-8 justify-center'>
                        <h1 className='text-7xl font-bold text-range-600'>" Say hello !</h1>
                        <p className='text-2xl font-semibold'>Enjoy complete digital learning experience with CodeSchool By Priyansh Garg!</p>
                        <div className='flex gap-6'>
                            <button className='bg-[#100d22] text-white px-12 py-4 rounded-md text-lg hover:bg-orange-500'>Learn More</button>
                            <button className='border border-2 border-[#100d22] text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold'>Watch Video</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home