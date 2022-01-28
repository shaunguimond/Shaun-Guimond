import { connect, styled } from "frontity";
import { LinkedIn, Twitter, Polywork } from "./icons/social-media-icons";


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <Container>
            <ContainerCard>
                <SocialContainer>
                    <Twitter />
                    <LinkedIn />
                    <Polywork />

                </SocialContainer>
            <GridContainer>
                <GridItem>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/about-shaun">About</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>

                    </ul>
                </GridItem>

                <GridItem>
                    <h4>Get in Touch</h4>
                    <ul>
                        <li>
                            <svg arya-label="email address" class="svg-icon" viewBox="0 0 20 20"><title>Email</title>
							<path stroke="var(--darktext)" d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path></svg>
                            <a href="mailto:shaun@parleedigital.ca">: shaun@parleedigital.ca</a>
                        </li>

                    </ul>
                    
                </GridItem>


            </GridContainer>
            
            <p>© { currentYear } Designed and developed by me</p>

            </ContainerCard>
        </Container>


    );


};

export default connect(Footer);

const Container = styled.div`
    background-color: var(--background);
    color: var(--darktext);
    padding-bottom: 5px;

    p {
        width: 100%;
        padding: 0px 0px 20px 0px;
        margin: 0px;
        text-align: center;
        font-size: 0.825em;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 300px;
    border-radius: 12px;
    background-color: var(--background);
    margin: 0px 5px 5px 5px;
    justify-content: center;
    padding: 5px 0px;
    margin-left: auto;
    margin-right: auto;

`;

const ContainerCard = styled.div`
    border-radius: 12px;
    background-color: var(--background);
    margin: 0px 5px 5px 5px;
`;

const GridContainer = styled.div`
    padding: 48px 24px;
    margin-left: 5px;
    margin-right: 5px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;
    width: calc(100% - 58px);
    justify-items: center;

    @media only screen and (min-width: 680px) {
        grid-template-columns: 1fr 1fr;

    }
`;

const GridItem = styled.div`

    ul {
        list-style: none;
        padding-left: 5px;
        line-height: 2em;
    }

    .svg-icon {
        margin-bottom: -15px;
        width: 40px;
        height: auto;
    }
`;