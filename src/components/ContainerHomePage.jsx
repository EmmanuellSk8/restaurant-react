import '../index.css';
import Hero from './Hero';
import PostHero from './PostHero';
import About from './About';
import ContainerMenu from './ContainerMenu';
import Footer from './Footer';

export default function ContainerHomePage() {

    return (

        <>
            <Hero />
            <PostHero />
            <ContainerMenu />
            <About />
            <Footer/>
        </>
    )

}