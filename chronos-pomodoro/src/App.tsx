import './styles/theme.css'
import './styles/global.css'
import {Heading} from "./components/Heading";
import {Container} from "./components/Container";
import {TimerIcon} from "lucide-react";
import {Logo} from "./components/Logo";

export function App() {
    return <>

        <Heading>
            <Logo/>
        </Heading>

        <Container>
            Hello, world!
            <button>
                <TimerIcon/>
            </button>
        </Container>
    </>
}