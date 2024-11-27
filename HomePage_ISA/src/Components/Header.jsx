
import { NavbarSection, Navbar, ImgLogo, TextLogo, SpanTextLogo, PagesNav, TextHeader } from "../Style/Header"
import Logo from "../Images/logo.png"

const Header = () => {
    return(
        <NavbarSection>
            <Navbar> <ImgLogo src={Logo}/> <TextLogo>Time<SpanTextLogo>Planner</SpanTextLogo></TextLogo></Navbar>
            <PagesNav>
                <TextHeader>Atendimento</TextHeader>
                <TextHeader>Horários</TextHeader>
                <TextHeader>Agendamento</TextHeader>
            </PagesNav>
        </NavbarSection>
    )
}

export default Header