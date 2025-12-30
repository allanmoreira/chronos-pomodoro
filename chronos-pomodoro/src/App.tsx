import './styles/theme.css'
import './styles/global.css'
import {Heading} from "./components/heading/Heading.tsx";
import {Container} from "./components/container/Container.tsx";
import {TimerIcon} from "lucide-react";

export function App() {
    return <>

        <Container>
            <section>LOGO</section>
        </Container>

        <Heading>
            Hello, world!
            <button>
                <TimerIcon/>
            </button>
        </Heading>
    </>
}