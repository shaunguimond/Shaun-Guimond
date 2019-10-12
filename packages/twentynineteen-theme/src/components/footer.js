import React from 'react';
import { connect, styled } from "frontity";
import { Facebook, Instagram, LinkedIn, Twitter } from './socialicons';


const Footer = () => {
	return (
		<footer>
			<div>
			<FooterLine></FooterLine>
				<SocialList>
					<SocialListItems><Facebook /></SocialListItems>
					<SocialListItems><Instagram /></SocialListItems>
					<SocialListItems><LinkedIn /></SocialListItems>
					<SocialListItems><Twitter /></SocialListItems>
				</SocialList>
			</div>

			<SiteInfo>
				<SiteInfoLinks href="https://codeytek.com/frontity-twentynineteen" target="_blank" rel="noopener">Twentynineteen Frontity Theme,</SiteInfoLinks>
				{' '}
				<SiteInfoLinks href="https://frontity.org" target="_blank" rel="noopener">proudly powered by WordPress &#38; Frontity.</SiteInfoLinks>
			</SiteInfo>
		</footer>
	)
};



export default connect(Footer);

const SocialList = styled.ul`
	display: flex;
	align-items: space-around;
	justify-content: center;
	list-style: none;
	flex-flow: row wrap;
	padding: 0px 25vw 0px 25vw;
	margin: 0px;
`;

const SocialListItems = styled.li`
	margin: auto;

	& a:hover {
	color: #767676;
	}
`;

const SiteInfo = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	font-size: 0.71111em;
	padding: 2rem;
	width: 100%;
	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	-ms-hyphens: auto;
	hyphens: auto;
	word-wrap: break-word;
	text-align: center;
`;

const SiteInfoLinks = styled.a`
 color: #767676;
 padding: 10px 0px 17px;
 
:hover {color: #008077;}
`;

const FooterLine = styled.hr`
	{
		margin: calc( 3 * 1rem ) 0 calc( 1.5 * 1rem ) 0;
		background-color: #767676;
        border: 0;
        height: 2px;
	}
`;