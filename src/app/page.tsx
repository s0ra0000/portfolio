import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Stack from "@/components/Stack";

export default function Home() {
    return (
        <main className="relative z-0 flex flex-col w-100%">
            <Header />
            <AboutMe />
            <Stack />
            <Contact />
        </main>
    );
}
