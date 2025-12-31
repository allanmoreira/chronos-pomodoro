import './styles/theme.css'
import './styles/global.css'
import {Heading} from "./components/heading/Heading.tsx";
import {Container} from "./components/container/Container.tsx";
import {TimerIcon} from "lucide-react";
import {Logo} from "./components/logo/Logo.tsx";

export function App() {
    return <>

        <Container>
            <Logo/>
        </Container>

        <Heading>
            Hello, world!
            <button>
                <TimerIcon/>
            </button>
        </Heading>
    </>
}