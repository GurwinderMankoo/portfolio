import Image from "next/image";
import Section from "../common/Section";
import Typwriter from "../typewriter";
import DownArrow from "../common/DownArrow";
import MyImage from "../../../../public/profile-pic-square.png";


export default function HomeMain1() {
    return (
        <Section id="home raltive">
            <div className="absolute border-radius-full 
                pointer-events-none animate-[float_8s_ease-in-out_infinite] z-0 w-[400px] 
                h-[400px]
                dark:bg-[rgba(99,102,241,0.18)]
                top-[-100px] right-[0px]
                blur-[110px]
                dark:blur-[90px]
                animate-float
                [animation-delay:0s]"></div>
            <div className="absolute border-radius-full 
                    pointer-events-none animate-[float_8s_ease-in-out_infinite] 
                    z-0 w-[280px] h-[280px] background: rgba(99,102,241,0.13)
                dark:bg-[rgba(34,211,238,0.1)] bottom-[-60px] left-[8%]
                dark:blur-[70px] blur-[90px] [animation-delay:-3s]"></div>
            <div className="z-10 h-[calc(100vh_-_72px)] flex justify-center items-center gap-9 md:gap-0 flex-col-reverse md:flex-row">
                <div className="intro md:w-1/2 md:h-screen flex items-center justify-center md:justify-normal md:-mt-20">
                    <div className="text-center md:text-left before:absolute before:h-[150px] md:before:h-[300px] before:-translate-y-1/3 before:z-[1]  before:w-[280px] md:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 before:lg:h-[360px]">
                        <div className='w-full font-bold text-black dark:text-white z-[10] relative'>
                            <span className="flex justify-center md:justify-start">
                                <img src='/waving-hand.gif' alt='Hi!!' className='w-10 h-10 -mt-3 mr-2' />
                                <h5 className="sm:text-xl font-bold">
                                    {`Hey! I'M`}
                                </h5>
                            </span>
                            <h2 className='text-3xl mt-3 md:mt-0 xl:text-6xl md:text-5xl text-blue-700'>
                                Gurwinder Singh
                            </h2>
                            <div className="md:mt-5 mt-3">
                                <Typwriter
                                    keywords={['A Web Developer', "A Front Engineer", "A Creative Enthusiast"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-section md:w-1/2 md:h-screen justify-center md:justify-end flex items-center relative md:-mt-20">
                    <div className="relative hidden md:block">
                        <div className="flex items-center justify-center absolute -top-36 -left-28 w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 animate-[typescript_8s_ease-in-out_infinite]">
                            <Image src='/icons/typescript.svg' alt="Redux" width={30} height={30} />
                        </div>
                        <div className="flex items-center justify-center absolute top-7 -left-32 w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 my-animation-2 animate-[react_8s_ease-in-out_infinite]">
                            <Image src='/icons/react.svg' alt="Redux" width={40} height={40} />
                        </div>
                        <div className="flex items-center justify-center absolute -top-60 left-12 w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 my-animation-3 animate-[redux_8s_ease-in-out_infinite]">
                            <Image src='/icons/redux.svg' alt="Redux" width={40} height={40} />
                        </div>

                    </div>
                    <div className="relative w-64 h-64 md:-ml-10 md:mt-0 flex items-center justify-center rounded-full ring-4 ring-gray-300 dark:ring-gray-500 after:absolute after:-left-10 after:md:-mt-10 after:lg:right-14 after:-z-15 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
                        <div className="w-60 h-60 relative rounded-full overflow-hidden p-12">
                            <Image
                                // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                className="z-10 -bottom-2"
                                src={MyImage}
                                alt="Next.js Logo"
                                fill
                                loading='lazy'
                                placeholder="blur"
                            />

                        </div>
                    </div>
                </div>
            </div>
            <DownArrow />
        </Section>
    )
}