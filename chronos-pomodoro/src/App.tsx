import './styles/theme.css'
import './styles/global.css'
import {Heading} from "./components/Heading/Heading.tsx";
import {Container} from "./components/Container/Container.tsx";
import {TimerIcon} from "lucide-react";
import {Logo} from "./components/Logo/Logo.tsx";

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