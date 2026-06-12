import ContactMain from './components/contact/ContactMain'
import Experience from './components/Experience/page'
import HomeMain from './components/home/HomeMain'
import AboutMain from './components/about/AboutMain'
import Technologies from './components/techSection/Technologies'
import ProjectsMain from './components/projects/ProjectsMain'
import UpArrow from './components/common/UpArrow'
import FooterMain from './components/footer/FooterMain'

export default function Home() {
  return (
    <>
      <main className="bg-[radial-gradient(circle,rgba(99,102,241,0.22)_1.2px,transparent_1.2px)]
         bg-[length:28px_28px]
         dark:bg-[radial-gradient(circle,rgba(129,140,248,0.1)_1px,transparent_1px)]
         transition-all duration-300">
        <HomeMain />
        <AboutMain />
        <Experience />
        <Technologies />
        <ProjectsMain />
        <ContactMain />
        <FooterMain />
      </main>
      <UpArrow />
    </>
  )
}
