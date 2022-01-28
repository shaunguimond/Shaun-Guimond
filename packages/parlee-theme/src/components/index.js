import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import DarkMode from "./styles/darkmode";
import gotuRegularWOFF2 from "./fonts/Gotu-Regular.woff2";
import quicksandRegularWOFF2 from "./fonts/Quicksand-Regular.woff2";
import Footer from "./footer";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      
      <DarkMode />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Page when={data.isPage} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`

@font-face {
  font-family: Gotu;
  src: url(${gotuRegularWOFF2}) format("woff2");
}

@font-face {
  font-family: QuicksandRegular;
  src: url(${quicksandRegularWOFF2}) format("woff2");
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--colortoggleactice) var(--formbackground);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: var(--formbackground);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--colortoggleactice);
  border-radius: 20px;
  border: 2px solid var(--formbackground);
}

  body {
    margin: 0;
    font-family: QuicksandRegular;
    color: var(--text);


}

  h1, h2, h3, h4, h5, h6, h7, h8 {
    font-family: Gotu;
  }
  p {
    font-size: 18px;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  body {
    margin: 0;
  }
  html,
  body {
    max-width: 100%;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .wp-block-image img {
    width: 100%;
  }

  .parlee-image img {
    max-height: 425px;
    max-width: 425px;
    height: auto;
    width: 100%;
    padding: 25px;
  }

  .parlee-image-tall img {
    max-height: auto;
    padding: 25px;
    max-width: 320px;
  }

.wpcf7 form {
  display: grid;
  width: 100%;
}

.wpcf7 form p {
  margin: 20px 0px;
  line-height: 0.5;
}

.wpcf7 form input[type="text"], .wpcf7 form input[type="email"] {
  width: 100%;
  display: block;
  font-weight: bold;
  width: 100%;
  max-width: 800px;
  height: 40px;
  padding: 6px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: var(--formbackground);
  font-size: 14px;
  justify-items: center;
  box-shadow: inset 2px 2px 4px 0 rgba(0,0,0,.4), inset -2px -2px 4px 0 rgba(255,255,255,.5);

 } 

 .wpcf7 form input[type="text"]::placeholder, 
 .wpcf7 form input[type="email"]::placeholder,
 .wpcf7 form textarea::placeholder {
    color: var(--text);
    opacity: 0.95;
    font-weight: bold;
 }

 .wpcf7 form textarea {
  width: 100%;
  display: block;
  font-weight: bold;
  max-width: 800px;
  height: 200px;
  padding: 6px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: var(--formbackground);
  font-size: 14px;
  justify-items: center;
  box-shadow: inset 2px 2px 4px 0 rgba(0,0,0,.4), inset -2px -2px 4px 0 rgba(255,255,255,.5);

 } 

 .wpcf7 form input[type="submit"] {
    background-image: linear-gradient(60deg,var(--theme-ui-colors-primary,#7f92b7),var(--theme-ui-colors-yellow,#528ec7));
    justify-items: center;
    color: white;
    border: 0px solid white;
    border-radius: 0px;
    height: 50px;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    box-shadow: 1px 1px 2px 0 rgba(0,0,0,.4), -1px -1px 2px 0 rgba(255,255,255,.5);
}

.wpcf7 form input[type="submit"]:hover {
  cursor: pointer;
  animation-duration: 0.075s;
  animation-name: formHover;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  box-shadow: inset 1px 1px 2.5px 0 rgba(0,0,0,.2), inset -1px -1px 2.5px 0 rgba(255,255,255,.5);
}

@keyframes formHover {
  0% {
    background-image: linear-gradient(60deg, #7f92b7, #528ec7);
}
  25% { 
    background-image: linear-gradient(60deg, #7f92b7, #7f92b7, #7f92b7, #528ec7);
}
  50% { 
    background-image: linear-gradient(60deg, #7f92b7, #7f92b7, #7f92b7, #7f92b7);
}
  75% { 
    background-image: linear-gradient(60deg, #528ec7, #7f92b7, #7f92b7, #7f92b7);
}
  100% {
    background-image: linear-gradient(60deg,#528ec7,#7f92b7);
  }
}

.cover-clear {
  background-color: transparent;
}


@media only screen and (max-width: 599px) {
  .wp-block-columns.reverse {
    flex-direction: column-reverse;
  }
 }


.mg-center li {
  padding: 0 0 10px 10px;

}

.mg-center li:first-of-type {
  padding-top: 10px;

}

@media only screen and (min-width: 800px) {
  .mg-center {
    margin: 0 15%;
  }
}


.port-card {
  backdrop-filter: blur(12px);
  background-color: var(--formbackground);
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
}

.lg-margins {
  margin-right: 64px;
  margin-left: 64px;

}


.wp-block-button a {
  width: fit-content;
  box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
  text-decoration: none;
}


.is-content-justification-center {
  justify-content: center;
}



.blur-card {
  backdrop-filter: blur(10px) opacity(0.75);
  padding: 75px 0;
  max-width: 450px;
  margin: auto;
  clip-path: inset(10% 3% 13% 4% round 5% 20% 0 10%);
}

.wp-block-cover .wp-block-group .parlee-digital-text {
  font-size: 50px;
  margin: 10px 0;
}

.wp-block-audio figcaption {
  font-size: 13px;
  text-align: center;
}
.wp-block-code {
  font-size: 14px;
  padding: 0.8em 1em;
  border: 1px solid #e2e4e7;
  border-radius: 4px;
}
.blocks-gallery-caption,
.wp-block-embed figcaption,
.wp-block-image figcaption {
  font-size: 13px;
  text-align: center;
}
.wp-block-pullquote {
  border-top: 4px solid #555d66;
  border-bottom: 4px solid #555d66;
  margin-bottom: 28px;
}
.wp-block-pullquote__citation,
.wp-block-pullquote cite,
.wp-block-pullquote footer {
  text-transform: uppercase;
  font-size: 13px;
  font-style: normal;
}
.wp-block-navigation ul,
.wp-block-navigation ul li {
  list-style: none;
}
.wp-block-quote__citation,
.wp-block-quote cite,
.wp-block-quote footer {
  font-size: 13px;
  margin-top: 1em;
  position: relative;
  font-style: normal;
}
.wp-block-quote.has-text-align-right {
  border-left: none;
  border-right: 4px solid #000;
}

.wp-block-search .wp-block-search__label {
  font-weight: 700;
}
.wp-block-group.has-background {
  padding: 20px 30px;
  margin-top: 0;
  margin-bottom: 0;
}
.wp-block-separator {
  border: none;
  border-bottom: 2px solid #8f98a1;
  margin-left: auto;
  margin-right: auto;
}
.wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
  max-width: 100px;
}
.wp-block-separator.has-background:not(.is-style-dots) {
  border-bottom: none;
  height: 1px;
}
.wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots) {
  height: 2px;
}
.wp-block-table {
  border-collapse: collapse;
}
.wp-block-table thead {
  border-bottom: 3px solid;
}
.wp-block-table tfoot {
  border-top: 3px solid;
}
.wp-block-table td,
.wp-block-table th {
  padding: 0.5em;
  border: 1px solid;
  word-break: normal;
}
.wp-block-table figcaption,
.wp-block-video figcaption {
  font-size: 13px;
  text-align: center;
}

.wp-block-audio figcaption {
  margin-top: 0.5em;
  margin-bottom: 1em;
}
.wp-block-audio audio {
  width: 100%;
  min-width: 300px;
}
.wp-block-button {
  color: #fff;
  border-radius: 12px;
}
.wp-block-button.aligncenter {
  text-align: center;
}
.wp-block-button.alignright {
  text-align: right;
}
.wp-block-button__link {
  background-color: #32373c;
  border: none;
  border-radius: 12px;
  box-shadow: none;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  margin: 0;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  overflow-wrap: break-word;
}
.wp-block-button__link:active,
.wp-block-button__link:focus,
.wp-block-button__link:hover,
.wp-block-button__link:visited {
  color: inherit;
}
.wp-gs .wp-block-button__link:not(.has-background) {
  background-color: var(
    --wp-block-core-button--color--background,
    var(--wp-color--primary, #32373c)
  );
}
.is-style-squared .wp-block-button__link {
  border-radius: 0;
}
.no-border-radius.wp-block-button__link {
  border-radius: 0 !important;
}
.is-style-outline {
  color: #32373c;
}
.is-style-outline .wp-block-button__link {
  background-color: transparent;
  border: 2px solid;
}
.wp-block-buttons {
  display: flex;
}
.wp-block-buttons.aligncenter,
.wp-block-calendar {
  text-align: center;
}
.wp-block-calendar tbody td,
.wp-block-calendar th {
  padding: 4px;
  border: 1px solid #e2e4e7;
}
.wp-block-calendar tfoot td {
  border: none;
}
.wp-block-calendar table {
  width: 100%;
  border-collapse: collapse;
}
.wp-block-calendar table th {
  font-weight: 400;
  background: #edeff0;
}
.wp-block-calendar a {
  text-decoration: underline;
}
.wp-block-calendar tfoot a {
  color: #00739c;
}
.wp-block-calendar table caption,
.wp-block-calendar table tbody {
  color: #40464d;
}
.wp-block-categories.alignleft {
  margin-right: 2em;
}
.wp-block-categories.alignright {
  margin-left: 2em;
}
.wp-block-columns {
  display: flex;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

@media (min-width: 800px) {
  .wp-block-columns {
    flex-wrap: nowrap; } }

.wp-block-columns.has-background {
  padding: 20px 30px;
}

.wp-block-column {
  flex-grow: 1;
  min-width: 0;
  word-break: break-word;
  overflow-wrap: break-word;
}

@media only screen and (max-width: 799px) {
  .wp-block-column {
    flex-basis: 100% !important;
  }
}

@media only screen and (min-width: 800px) {
  .wp-block-column {
    flex-basis: calc(50% - 16px);
    flex-grow: 0;
  }
  .wp-block-column:nth-of-type(2n) {
    margin-left: 32px;
  }
}
@media only screen and (min-width: 982px) {
  .wp-block-column {
    flex-basis: 0;
    flex-grow: 1;
  }
  .wp-block-column[style] {
    flex-grow: 0;
  }
  .wp-block-column:not(:first-of-type) {
    margin-left: 32px;
  }
}
.wp-block-columns.are-vertically-aligned-top {
  align-items: flex-start;
}
.wp-block-columns.are-vertically-aligned-center {
  align-items: center;
}
.wp-block-columns.are-vertically-aligned-bottom {
  align-items: flex-end;
}
.wp-block-column.is-vertically-aligned-top {
  align-self: flex-start;
}
.wp-block-column.is-vertically-aligned-center {
  -ms-grid-row-align: center;
  align-self: center;
}
.wp-block-column.is-vertically-aligned-bottom {
  align-self: flex-end;
}

.wp-block-cover,
.wp-block-cover-image {
  position: relative;
  background-color: #000;
  background-size: cover;
  background-position: 50%;
  min-height: 430px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.wp-block-cover-image.has-parallax,
.wp-block-cover.has-parallax {
  background-attachment: fixed;
}
@supports (-webkit-overflow-scrolling: touch) {
  .wp-block-cover-image.has-parallax,
  .wp-block-cover.has-parallax {
    background-attachment: scroll;
  }
}
@media (prefers-reduced-motion: reduce) {
  .wp-block-cover-image.has-parallax,
  .wp-block-cover.has-parallax {
    background-attachment: scroll;
  }
}
.wp-block-cover-image.has-background-dim:before,
.wp-block-cover.has-background-dim:before {
  content: "";
  background-color: inherit;
}
.wp-block-cover-image.has-background-dim:not(.has-background-gradient):before,
.wp-block-cover-image .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim:not(.has-background-gradient):before,
.wp-block-cover .wp-block-cover__gradient-background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0.5;
}
.wp-block-cover-image.has-background-dim.has-background-dim-10
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-10:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-10
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-10:not(.has-background-gradient):before {
  opacity: 0.1;
}
.wp-block-cover-image.has-background-dim.has-background-dim-20
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-20:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-20
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-20:not(.has-background-gradient):before {
  opacity: 0.2;
}
.wp-block-cover-image.has-background-dim.has-background-dim-30
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-30:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-30
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-30:not(.has-background-gradient):before {
  opacity: 0.3;
}
.wp-block-cover-image.has-background-dim.has-background-dim-40
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-40:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-40
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-40:not(.has-background-gradient):before {
  opacity: 0.4;
}
.wp-block-cover-image.has-background-dim.has-background-dim-50
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-50:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-50
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-50:not(.has-background-gradient):before {
  opacity: 0.5;
}
.wp-block-cover-image.has-background-dim.has-background-dim-60
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-60:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-60
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-60:not(.has-background-gradient):before {
  opacity: 0.6;
}
.wp-block-cover-image.has-background-dim.has-background-dim-70
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-70:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-70
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-70:not(.has-background-gradient):before {
  opacity: 0.7;
}
.wp-block-cover-image.has-background-dim.has-background-dim-80
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-80:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-80
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-80:not(.has-background-gradient):before {
  opacity: 0.8;
}
.wp-block-cover-image.has-background-dim.has-background-dim-90
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-90:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-90
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-90:not(.has-background-gradient):before {
  opacity: 0.9;
}
.wp-block-cover-image.has-background-dim.has-background-dim-100
  .wp-block-cover__gradient-background,
.wp-block-cover-image.has-background-dim.has-background-dim-100:not(.has-background-gradient):before,
.wp-block-cover.has-background-dim.has-background-dim-100
  .wp-block-cover__gradient-background,
.wp-block-cover.has-background-dim.has-background-dim-100:not(.has-background-gradient):before {
  opacity: 1;
}
.wp-block-cover-image.alignleft,
.wp-block-cover-image.alignright,
.wp-block-cover.alignleft,
.wp-block-cover.alignright {
  max-width: 290px;
  width: 100%;
}
.wp-block-cover-image:after,
.wp-block-cover:after {
  display: block;
  content: "";
  font-size: 0;
  min-height: inherit;
}
@supports ((position: -webkit-sticky) or (position: sticky)) {
  .wp-block-cover-image:after,
  .wp-block-cover:after {
    content: none;
  }
}
.wp-block-cover-image.aligncenter,
.wp-block-cover-image.alignleft,
.wp-block-cover-image.alignright,
.wp-block-cover.aligncenter,
.wp-block-cover.alignleft,
.wp-block-cover.alignright {
  display: flex;
}
.wp-block-cover-image .wp-block-cover__inner-container,
.wp-block-cover .wp-block-cover__inner-container {
  width: calc(100% - 70px);
  z-index: 1;
  color: #f8f9f9;
}
.wp-block-cover-image .wp-block-subhead:not(.has-text-color),
.wp-block-cover-image h1:not(.has-text-color),
.wp-block-cover-image h2:not(.has-text-color),
.wp-block-cover-image h3:not(.has-text-color),
.wp-block-cover-image h4:not(.has-text-color),
.wp-block-cover-image h5:not(.has-text-color),
.wp-block-cover-image h6:not(.has-text-color),
.wp-block-cover-image p:not(.has-text-color),
.wp-block-cover .wp-block-subhead:not(.has-text-color),
.wp-block-cover h1:not(.has-text-color),
.wp-block-cover h2:not(.has-text-color),
.wp-block-cover h3:not(.has-text-color),
.wp-block-cover h4:not(.has-text-color),
.wp-block-cover h5:not(.has-text-color),
.wp-block-cover h6:not(.has-text-color),
.wp-block-cover p:not(.has-text-color) {
  color: inherit;
}
.wp-block-cover__video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  z-index: 0;
  -o-object-fit: cover;
  object-fit: cover;
}
.wp-block-cover-image-text,
.wp-block-cover-image-text a,
.wp-block-cover-image-text a:active,
.wp-block-cover-image-text a:focus,
.wp-block-cover-image-text a:hover,
.wp-block-cover-text,
.wp-block-cover-text a,
.wp-block-cover-text a:active,
.wp-block-cover-text a:focus,
.wp-block-cover-text a:hover,
section.wp-block-cover-image h2,
section.wp-block-cover-image h2 a,
section.wp-block-cover-image h2 a:active,
section.wp-block-cover-image h2 a:focus,
section.wp-block-cover-image h2 a:hover {
  color: #fff;
}
.wp-block-cover-image .wp-block-cover.has-left-content {
  justify-content: flex-start;
}
.wp-block-cover-image .wp-block-cover.has-right-content {
  justify-content: flex-end;
}
.wp-block-cover-image.has-left-content .wp-block-cover-image-text,
.wp-block-cover.has-left-content .wp-block-cover-text,
section.wp-block-cover-image.has-left-content > h2 {
  margin-left: 0;
  text-align: left;
}
.wp-block-cover-image.has-right-content .wp-block-cover-image-text,
.wp-block-cover.has-right-content .wp-block-cover-text,
section.wp-block-cover-image.has-right-content > h2 {
  margin-right: 0;
  text-align: right;
}
.wp-block-cover-image .wp-block-cover-image-text,
.wp-block-cover .wp-block-cover-text,
section.wp-block-cover-image > h2 {
  font-size: 2em;
  line-height: 1.25;
  z-index: 1;
  margin-bottom: 0;
  max-width: 580px;
  padding: 14px;
  text-align: center;
}
.block-editor-block-list__block[data-type="core/embed"][data-align="left"],
.block-editor-block-list__block[data-type="core/embed"][data-align="right"],
.wp-block-embed.alignleft,
.wp-block-embed.alignright {
  max-width: 360px;
  width: 100%;
}
.wp-block-embed {
  margin-bottom: 1em;
}
.wp-block-embed figcaption {
  margin-top: 0.5em;
  margin-bottom: 1em;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-1-1
  .wp-block-embed__wrapper,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-1-2
  .wp-block-embed__wrapper,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-4-3
  .wp-block-embed__wrapper,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-9-16
  .wp-block-embed__wrapper,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-16-9
  .wp-block-embed__wrapper,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-18-9
  .wp-block-embed__wrapper,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-21-9
  .wp-block-embed__wrapper {
  position: relative;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-1-1
  .wp-block-embed__wrapper:before,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-1-2
  .wp-block-embed__wrapper:before,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-4-3
  .wp-block-embed__wrapper:before,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-9-16
  .wp-block-embed__wrapper:before,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-16-9
  .wp-block-embed__wrapper:before,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-18-9
  .wp-block-embed__wrapper:before,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-21-9
  .wp-block-embed__wrapper:before {
  content: "";
  display: block;
  padding-top: 50%;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-1-1
  .wp-block-embed__wrapper
  iframe,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-1-2
  .wp-block-embed__wrapper
  iframe,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-4-3
  .wp-block-embed__wrapper
  iframe,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-9-16
  .wp-block-embed__wrapper
  iframe,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-16-9
  .wp-block-embed__wrapper
  iframe,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-18-9
  .wp-block-embed__wrapper
  iframe,
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-21-9
  .wp-block-embed__wrapper
  iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-21-9
  .wp-block-embed__wrapper:before {
  padding-top: 42.85%;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-18-9
  .wp-block-embed__wrapper:before {
  padding-top: 50%;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-16-9
  .wp-block-embed__wrapper:before {
  padding-top: 56.25%;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-4-3
  .wp-block-embed__wrapper:before {
  padding-top: 75%;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-1-1
  .wp-block-embed__wrapper:before {
  padding-top: 100%;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-9-16
  .wp-block-embed__wrapper:before {
  padding-top: 177.78%;
}
.wp-embed-responsive
  .wp-block-embed.wp-embed-aspect-1-2
  .wp-block-embed__wrapper:before {
  padding-top: 200%;
}
.wp-block-file {
  margin-bottom: 1.5em;
}
.wp-block-file.aligncenter {
  text-align: center;
}
.wp-block-file.alignright {
  text-align: right;
}
.wp-block-file .wp-block-file__button {
  background: #32373c;
  border-radius: 2em;
  color: #fff;
  font-size: 13px;
  padding: 0.5em 1em;
}
.wp-block-file a.wp-block-file__button {
  text-decoration: none;
}
.wp-block-file a.wp-block-file__button:active,
.wp-block-file a.wp-block-file__button:focus,
.wp-block-file a.wp-block-file__button:hover,
.wp-block-file a.wp-block-file__button:visited {
  box-shadow: none;
  color: #fff;
  opacity: 0.85;
  text-decoration: none;
}
.wp-block-file * + .wp-block-file__button {
  margin-left: 0.75em;
}
.wp-block-image {
  margin-bottom: 1em;
}
.wp-block-image img {
  max-width: 100%;
}
.wp-block-image.aligncenter {
  text-align: center;
}
.wp-block-image.alignfull img,
.wp-block-image.alignwide img {
  width: 100%;
}
.wp-block-image .aligncenter,
.wp-block-image .alignleft,
.wp-block-image .alignright,
.wp-block-image.is-resized {
  display: table;
  margin-left: 0;
  margin-right: 0;
}
.wp-block-image .alignleft {
  float: left;
  margin-right: 1em;
}
.wp-block-image .alignright {
  float: right;
  margin-left: 1em;
}
.wp-block-image .aligncenter {
  margin-left: auto;
  margin-right: auto;
}
.wp-block-image figcaption {
  margin-top: 0.5em;
  margin-bottom: 1em;
}
.is-style-circle-mask img,
.is-style-rounded img {
  border-radius: 9999px;
}
@supports ((-webkit-mask-image: none) or (mask-image: none)) or
  (-webkit-mask-image: none) {
  .is-style-circle-mask img {
    -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
    mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
    mask-mode: alpha;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    border-radius: 0;
  }
}
.wp-block-latest-comments__comment {
  font-size: 15px;
  line-height: 1.1;
  list-style: none;
  margin-bottom: 1em;
}
.has-avatars .wp-block-latest-comments__comment {
  min-height: 36px;
  list-style: none;
}
.has-avatars
  .wp-block-latest-comments__comment
  .wp-block-latest-comments__comment-excerpt,
.has-avatars
  .wp-block-latest-comments__comment
  .wp-block-latest-comments__comment-meta {
  margin-left: 52px;
}
.has-dates .wp-block-latest-comments__comment,
.has-excerpts .wp-block-latest-comments__comment {
  line-height: 1.5;
}
.wp-block-latest-comments__comment-excerpt p {
  font-size: 14px;
  line-height: 1.8;
  margin: 5px 0 20px;
}
.wp-block-latest-comments__comment-date {
  color: #8f98a1;
  display: block;
  font-size: 12px;
}
.wp-block-latest-comments .avatar,
.wp-block-latest-comments__comment-avatar {
  border-radius: 24px;
  display: block;
  float: left;
  height: 40px;
  margin-right: 12px;
  width: 40px;
}
.wp-block-latest-posts.alignleft {
  margin-right: 2em;
}
.wp-block-latest-posts.alignright {
  margin-left: 2em;
}
.wp-block-latest-posts.wp-block-latest-posts__list {
  list-style: none;
}
.wp-block-latest-posts.wp-block-latest-posts__list li {
  clear: both;
}
.wp-block-latest-posts.is-grid li {
  margin: 0 16px 16px 0;
  width: 100%;
}
.wp-block-latest-posts__post-excerpt {
  margin-top: 8px;
  margin-bottom: 16px;
}
.wp-block-media-text {
  direction: ltr;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 50% 1fr;
  grid-template-columns: 50% 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
.wp-block-media-text.has-media-on-the-right {
  -ms-grid-columns: 1fr 50%;
  grid-template-columns: 1fr 50%;
}
.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__content,
.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__media {
  -ms-grid-row-align: start;
  align-self: start;
}
.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__content,
.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__media,
.wp-block-media-text .wp-block-media-text__content,
.wp-block-media-text .wp-block-media-text__media {
  -ms-grid-row-align: center;
  align-self: center;
}
.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__content,
.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__media {
  -ms-grid-row-align: end;
  align-self: end;
}
.wp-block-media-text .wp-block-media-text__media {
  -ms-grid-column: 1;
  grid-column: 1;
  -ms-grid-row: 1;
  grid-row: 1;
  margin: 0;
}
.wp-block-media-text .wp-block-media-text__content {
  direction: ltr;
  padding: 0 8%;
  word-break: break-word;
}
.wp-block-media-text.has-media-on-the-right .wp-block-media-text__media,
.wp-block-media-text .wp-block-media-text__content {
  -ms-grid-column: 2;
  grid-column: 2;
  -ms-grid-row: 1;
  grid-row: 1;
}
.wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {
  -ms-grid-column: 1;
  grid-column: 1;
  -ms-grid-row: 1;
  grid-row: 1;
}
.wp-block-media-text > figure > img,
.wp-block-media-text > figure > video {
  max-width: unset;
  width: 100%;
  vertical-align: middle;
}
.wp-block-media-text.is-image-fill figure.wp-block-media-text__media {
  height: 100%;
  min-height: 250px;
  background-size: cover;
}
.wp-block-media-text.is-image-fill figure.wp-block-media-text__media > img {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
@media (max-width: 600px) {
  .wp-block-media-text.is-stacked-on-mobile {
    -ms-grid-columns: 100% !important;
    grid-template-columns: 100% !important;
  }
  .wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__media {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
  }
  .wp-block-media-text.is-stacked-on-mobile.has-media-on-the-right
    .wp-block-media-text__media,
  .wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 2;
    grid-row: 2;
  }
  .wp-block-media-text.is-stacked-on-mobile.has-media-on-the-right
    .wp-block-media-text__content {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
  }
}
.wp-block-navigation > ul {
  display: block;
  list-style: none;
  margin: 0;
  padding-left: 0;
}
@media (min-width: 600px) {
  .wp-block-navigation > ul {
    display: flex;
    flex-wrap: wrap;
  }
}
.wp-block-navigation > ul ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-left: 0;
}
.wp-block-navigation > ul ul li {
  margin: 0;
}
.wp-block-navigation > ul li {
  z-index: 1;
}
.wp-block-navigation > ul li:focus-within,
.wp-block-navigation > ul li:hover {
  cursor: pointer;
  z-index: 99999;
}
.wp-block-navigation > ul li:focus-within > ul,
.wp-block-navigation > ul li:hover > ul,
.wp-block-navigation > ul li ul:focus,
.wp-block-navigation > ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: flex;
  flex-direction: column;
}
.wp-block-navigation > ul > li ul {
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 200px;
  max-width: 200px;
  opacity: 0;
  transition: opacity 0.1s linear;
  visibility: hidden;
}
.wp-block-navigation,
.wp-block-navigation .block-editor-block-list__layout {
  display: flex;
  flex-wrap: wrap;
}
.wp-block-navigation
  .block-editor-block-list__layout
  .block-editor-block-list__layout {
  width: 200px;
}
.wp-block-navigation
  .block-editor-inner-blocks
  > .block-editor-block-list__layout
  > .wp-block {
  margin: 0;
  width: auto;
}
.wp-block-navigation,
.wp-block-navigation > .wp-block-navigation__container {
  align-items: center;
  width: 100%;
}
.wp-block-navigation > .wp-block-navigation-link,
.wp-block-navigation
  > .wp-block-navigation__container
  > .wp-block-navigation-link {
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
}
.wp-block-navigation .wp-block-navigation-link {
  position: relative;
  margin: 0;
  min-height: 56px;
  display: flex;
  line-height: 1.4;
}
.wp-block-navigation .wp-block-navigation-link .wp-block,
.wp-block-navigation .wp-block-navigation-link .wp-block-navigation-link {
  min-height: auto;
  padding: 0;
}
.wp-block-navigation
  .wp-block-navigation-link
  .wp-block
  .wp-block-navigation-link {
  margin: 0;
}
.wp-block-navigation .wp-block-navigation-link > .block-editor-inner-blocks {
  display: none;
}
.wp-block-navigation
  .wp-block-navigation-link.has-child
  > .wp-block-navigation__container,
.wp-block-navigation
  .wp-block-navigation-link.is-editing.has-child
  > .block-editor-inner-blocks {
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.15);
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
}
.wp-block-navigation
  .wp-block-navigation-link.has-child
  > .wp-block-navigation__container
  .block-editor-inner-blocks,
.wp-block-navigation
  .wp-block-navigation-link.has-child
  > .wp-block-navigation__container
  .wp-block-navigation__container,
.wp-block-navigation
  .wp-block-navigation-link.is-editing.has-child
  > .block-editor-inner-blocks
  .block-editor-inner-blocks,
.wp-block-navigation
  .wp-block-navigation-link.is-editing.has-child
  > .block-editor-inner-blocks
  .wp-block-navigation__container {
  left: 100%;
  top: -1px;
}
.wp-block-navigation .wp-block-navigation-link .block-editor-inner-blocks,
.wp-block-navigation .wp-block-navigation-link .wp-block-navigation__container {
  background-color: inherit;
  color: inherit;
}
.wp-block-navigation
  .wp-block-navigation-link
  .wp-block-navigation-link__content {
  display: flex;
  align-items: center;
  width: -webkit-max-content;
  width: max-content;
  padding: 6px 16px;
}
.wp-block-navigation
  .wp-block-navigation-link
  .wp-block-navigation-link:first-of-type:not(:only-of-type)
  .wp-block-navigation-link__content {
  padding-top: 8px;
}
.wp-block-navigation
  .wp-block-navigation-link
  .wp-block-navigation-link:last-of-type
  .wp-block-navigation-link__content {
  padding-bottom: 8px;
}
.wp-block-navigation
  .wp-block-navigation-link.has-child
  .wp-block-navigation-link__content {
  min-width: 100%;
  padding-right: 32px;
  position: relative;
}
.wp-block-navigation
  .wp-block-navigation-link
  .wp-block-navigation-link__submenu-icon {
  position: absolute;
  right: 16px;
}
.wp-block-navigation
  .wp-block-navigation-link
  .wp-block-navigation-link__submenu-icon
  svg {
  fill: currentColor;
}
.wp-block-navigation .wp-block-navigation-link .wp-block-navigation-link svg {
  transform: rotate(0);
}
.wp-block-navigation
  .wp-block-navigation-link.has-text-color
  .wp-block-navigation-link__content {
  color: inherit;
}
.wp-block-navigation.is-style-light
  .wp-block-navigation-link:not(.has-text-color)
  > .block-editor-inner-blocks,
.wp-block-navigation.is-style-light
  .wp-block-navigation-link:not(.has-text-color)
  > .wp-block-navigation__container,
.wp-block-navigation
  .wp-block-navigation-link:not(.has-text-color)
  > .block-editor-inner-blocks,
.wp-block-navigation
  .wp-block-navigation-link:not(.has-text-color)
  > .wp-block-navigation__container {
  color: #111;
}
.wp-block-navigation.is-style-light
  .wp-block-navigation-link:not(.has-background)
  > .block-editor-inner-blocks,
.wp-block-navigation.is-style-light
  .wp-block-navigation-link:not(.has-background)
  > .wp-block-navigation__container,
.wp-block-navigation
  .wp-block-navigation-link:not(.has-background)
  > .block-editor-inner-blocks,
.wp-block-navigation
  .wp-block-navigation-link:not(.has-background)
  > .wp-block-navigation__container {
  background-color: #fff;
}
.wp-block-navigation.is-style-dark
  .wp-block-navigation-link:not(.has-text-color)
  > .block-editor-inner-blocks,
.wp-block-navigation.is-style-dark
  .wp-block-navigation-link:not(.has-text-color)
  > .wp-block-navigation__container {
  color: #fff;
}
.wp-block-navigation.is-style-dark
  .wp-block-navigation-link:not(.has-background)
  > .block-editor-inner-blocks,
.wp-block-navigation.is-style-dark
  .wp-block-navigation-link:not(.has-background)
  > .wp-block-navigation__container {
  background-color: #333;
}
.wp-block-navigation
  .wp-block-navigation-link.has-child
  > .wp-block-navigation__container {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.wp-block-navigation > ul > li > a {
  display: flex;
  align-items: center;
}
.wp-block-navigation > ul > li:first-of-type > a {
  padding-left: 0;
}
.wp-block-navigation > ul > li:last-of-type > a {
  padding-right: 0;
}
.wp-block-navigation.items-justified-left > ul {
  justify-content: flex-start;
}
.wp-block-navigation.items-justified-center > ul {
  justify-content: center;
}
.wp-block-navigation.items-justified-right > ul {
  justify-content: flex-end;
}
.is-small-text {
  font-size: 14px;
}
.is-regular-text {
  font-size: 16px;
}
.is-large-text {
  font-size: 36px;
}
.is-larger-text {
  font-size: 48px;
}
.has-drop-cap:not(:focus):first-letter {
  float: left;
  font-size: 8.4em;
  line-height: 0.68;
  font-weight: 100;
  margin: 0.05em 0.1em 0 0;
  text-transform: uppercase;
  font-style: normal;
}
p.has-background {
  padding: 20px 30px;
}
p.has-text-color a {
  color: inherit;
}
.wp-block-pullquote {
  padding: 3em 0;
  margin-left: 0;
  margin-right: 0;
  text-align: center;
}
.wp-block-pullquote.alignleft,
.wp-block-pullquote.alignright {
  max-width: 290px;
}
.wp-block-pullquote.alignleft p,
.wp-block-pullquote.alignright p {
  font-size: 20px;
}
.wp-block-pullquote p {
  font-size: 28px;
  line-height: 1.6;
}
.wp-block-pullquote cite,
.wp-block-pullquote footer {
  position: relative;
}
.wp-block-pullquote .has-text-color a {
  color: inherit;
}
.wp-block-pullquote:not(.is-style-solid-color) {
  background: none;
}
.wp-block-pullquote.is-style-solid-color {
  border: none;
}
.wp-block-pullquote.is-style-solid-color blockquote {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  max-width: 60%;
}
.wp-block-pullquote.is-style-solid-color blockquote p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 32px;
}
.wp-block-pullquote.is-style-solid-color blockquote cite {
  text-transform: none;
  font-style: normal;
}
.wp-block-pullquote cite {
  color: inherit;
}

.wp-block-quote.is-large p,
.wp-block-quote.is-style-large p {
  font-size: 24px;
  font-style: italic;
  line-height: 1.6;
}
.wp-block-quote.is-large cite,
.wp-block-quote.is-large footer,
.wp-block-quote.is-style-large cite,
.wp-block-quote.is-style-large footer {
  font-size: 18px;
  text-align: right;
}
.wp-block-rss.alignleft {
  margin-right: 2em;
}
.wp-block-rss.alignright {
  margin-left: 2em;
}
.wp-block-rss.is-grid {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
}
.wp-block-rss.is-grid li {
  margin: 0 16px 16px 0;
  width: 100%;
}
@media (min-width: 600px) {
  .wp-block-rss.columns-2 li {
    width: calc(50% - 16px);
  }
  .wp-block-rss.columns-3 li {
    width: calc(33.33333% - 16px);
  }
  .wp-block-rss.columns-4 li {
    width: calc(25% - 16px);
  }
  .wp-block-rss.columns-5 li {
    width: calc(20% - 16px);
  }
  .wp-block-rss.columns-6 li {
    width: calc(16.66667% - 16px);
  }
}
.wp-block-rss__item-author,
.wp-block-rss__item-publish-date {
  display: block;
  color: #6c7781;
  font-size: 13px;
}
.wp-block-search {
  display: flex;
  flex-wrap: wrap;
}
.wp-block-search .wp-block-search__label {
  width: 100%;
}
.wp-block-search .wp-block-search__input {
  flex-grow: 1;
  max-width: 360px;
}
.wp-block-search .wp-block-search__button {
  margin-left: 10px;
}
.wp-block-separator.is-style-wide {
  border-bottom-width: 1px;
}
.wp-block-separator.is-style-dots {
  background: none !important;
  border: none;
  text-align: center;
  max-width: none;
  line-height: 1;
  height: auto;
}
.wp-block-separator.is-style-dots:before {
  content: "";
  color: currentColor;
  font-size: 20px;
  letter-spacing: 2em;
  padding-left: 2em;
}
.wp-block-social-links {
  display: flex;
  justify-content: flex-start;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
}
.wp-block-social-links .wp-social-link a,
.wp-block-social-links .wp-social-link a:hover {
  text-decoration: none;
  border-bottom: 0;
  box-shadow: none;
}
.wp-social-link {
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  margin-right: 8px;
  transition: transform 0.1s ease;
}
@media (prefers-reduced-motion: reduce) {
  .wp-social-link {
    transition-duration: 0s;
  }
}
.wp-social-link a {
  padding: 6px;
  display: block;
  line-height: 0;
  transition: transform 0.1s ease;
}
.wp-social-link a,
.wp-social-link a:active,
.wp-social-link a:hover,
.wp-social-link a:visited,
.wp-social-link svg {
  color: currentColor;
  fill: currentColor;
}
.wp-social-link:hover {
  transform: scale(1.1);
}
.wp-block-social-links.aligncenter {
  justify-content: center;
  display: flex;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link {
  background-color: #f0f0f0;
  color: #444;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-amazon {
  background-color: #f90;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-bandcamp {
  background-color: #1ea0c3;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-behance {
  background-color: #0757fe;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-codepen {
  background-color: #1e1f26;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-deviantart {
  background-color: #02e49b;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dribbble {
  background-color: #e94c89;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dropbox {
  background-color: #4280ff;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-etsy {
  background-color: #f45800;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-facebook {
  background-color: #1977f2;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-fivehundredpx {
  background-color: #000;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-flickr {
  background-color: #0461dd;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-foursquare {
  background-color: #e65678;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-github {
  background-color: #24292d;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-goodreads {
  background-color: #eceadd;
  color: #382110;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-google {
  background-color: #ea4434;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-instagram {
  background-color: #f00075;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-lastfm {
  background-color: #e21b24;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-linkedin {
  background-color: #0577b5;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-mastodon {
  background-color: #3288d4;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-medium {
  background-color: #02ab6c;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-meetup {
  background-color: #f6405f;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pinterest {
  background-color: #e60122;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pocket {
  background-color: #ef4155;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-reddit {
  background-color: #fe4500;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-skype {
  background-color: #0478d7;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-snapchat {
  background-color: #fefc00;
  color: #fff;
  stroke: #000;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-soundcloud {
  background-color: #ff5600;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-spotify {
  background-color: #1bd760;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tumblr {
  background-color: #011835;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitch {
  background-color: #6440a4;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitter {
  background-color: #21a1f3;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vimeo {
  background-color: #1eb7ea;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vk {
  background-color: #4680c2;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-wordpress {
  background-color: #3499cd;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-yelp {
  background-color: #d32422;
  color: #fff;
}
.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-youtube {
  background-color: #ff0100;
  color: #fff;
}
.wp-block-social-links.is-style-logos-only .wp-social-link {
  background: none;
  padding: 4px;
}
.wp-block-social-links.is-style-logos-only .wp-social-link svg {
  width: 28px;
  height: 28px;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-amazon {
  color: #f90;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-bandcamp {
  color: #1ea0c3;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-behance {
  color: #0757fe;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-codepen {
  color: #1e1f26;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-deviantart {
  color: #02e49b;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-dribbble {
  color: #e94c89;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-dropbox {
  color: #4280ff;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-etsy {
  color: #f45800;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-facebook {
  color: #1977f2;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-fivehundredpx {
  color: #000;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-flickr {
  color: #0461dd;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-foursquare {
  color: #e65678;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-github {
  color: #24292d;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-goodreads {
  color: #382110;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-google {
  color: #ea4434;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-instagram {
  color: #f00075;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-lastfm {
  color: #e21b24;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-linkedin {
  color: #0577b5;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-mastodon {
  color: #3288d4;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-medium {
  color: #02ab6c;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-meetup {
  color: #f6405f;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-pinterest {
  color: #e60122;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-pocket {
  color: #ef4155;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-reddit {
  color: #fe4500;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-skype {
  color: #0478d7;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-snapchat {
  color: #fff;
  stroke: #000;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-soundcloud {
  color: #ff5600;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-spotify {
  color: #1bd760;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-tumblr {
  color: #011835;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-twitch {
  color: #6440a4;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-twitter {
  color: #21a1f3;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-vimeo {
  color: #1eb7ea;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-vk {
  color: #4680c2;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-wordpress {
  color: #3499cd;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-yelp {
  background-color: #d32422;
  color: #fff;
}
.wp-block-social-links.is-style-logos-only .wp-social-link-youtube {
  color: #ff0100;
}
.wp-block-social-links.is-style-pill-shape .wp-social-link {
  width: auto;
}
.wp-block-social-links.is-style-pill-shape .wp-social-link a {
  padding-left: 16px;
  padding-right: 16px;
}
.wp-block-spacer {
  clear: both;
}
p.wp-block-subhead {
  font-size: 1.1em;
  font-style: italic;
  opacity: 0.75;
}
.wp-block-table {
  overflow-x: auto;
}
.wp-block-table table {
  width: 100%;
}
.wp-block-table .has-fixed-layout {
  table-layout: fixed;
  width: 100%;
}
.wp-block-table .has-fixed-layout td,
.wp-block-table .has-fixed-layout th {
  word-break: break-word;
}
.wp-block-table.aligncenter,
.wp-block-table.alignleft,
.wp-block-table.alignright {
  display: table;
  width: auto;
}
.wp-block-table.aligncenter td,
.wp-block-table.aligncenter th,
.wp-block-table.alignleft td,
.wp-block-table.alignleft th,
.wp-block-table.alignright td,
.wp-block-table.alignright th {
  word-break: break-word;
}
.wp-block-table .has-subtle-light-gray-background-color {
  background-color: #f3f4f5;
}
.wp-block-table .has-subtle-pale-green-background-color {
  background-color: #e9fbe5;
}
.wp-block-table .has-subtle-pale-blue-background-color {
  background-color: #e7f5fe;
}
.wp-block-table .has-subtle-pale-pink-background-color {
  background-color: #fcf0ef;
}
.wp-block-table.is-style-stripes {
  border-spacing: 0;
  border-collapse: inherit;
  background-color: transparent;
  border-bottom: 1px solid #f3f4f5;
}
.wp-block-table.is-style-stripes.has-subtle-light-gray-background-color
  tbody
  tr:nth-of-type(odd),
.wp-block-table.is-style-stripes tbody tr:nth-of-type(odd) {
  background-color: #f3f4f5;
}
.wp-block-table.is-style-stripes.has-subtle-pale-green-background-color
  tbody
  tr:nth-of-type(odd) {
  background-color: #e9fbe5;
}
.wp-block-table.is-style-stripes.has-subtle-pale-blue-background-color
  tbody
  tr:nth-of-type(odd) {
  background-color: #e7f5fe;
}
.wp-block-table.is-style-stripes.has-subtle-pale-pink-background-color
  tbody
  tr:nth-of-type(odd) {
  background-color: #fcf0ef;
}
.wp-block-table.is-style-stripes td,
.wp-block-table.is-style-stripes th {
  border-color: transparent;
}
.wp-block-text-columns,
.wp-block-text-columns.aligncenter {
  display: flex;
}
.wp-block-text-columns .wp-block-column {
  margin: 0 16px;
  padding: 0;
}
.wp-block-text-columns .wp-block-column:first-of-type {
  margin-left: 0;
}
.wp-block-text-columns .wp-block-column:last-of-type {
  margin-right: 0;
}
.wp-block-text-columns.columns-2 .wp-block-column {
  width: 50%;
}
.wp-block-text-columns.columns-3 .wp-block-column {
  width: 33.33333%;
}
.wp-block-text-columns.columns-4 .wp-block-column {
  width: 25%;
}
.wp-block-video {
  margin-left: 0;
  margin-right: 0;
}
.wp-block-video video {
  max-width: 100%;
}
@supports ((position: -webkit-sticky) or (position: sticky)) {
  .wp-block-video [poster] {
    -o-object-fit: cover;
    object-fit: cover;
  }
}
.wp-block-video.aligncenter {
  text-align: center;
}
.wp-block-video figcaption {
  margin-top: 0.5em;
  margin-bottom: 1em;
}
:root .has-pale-pink-background-color {
  background-color: #f78da7;
}
:root .has-vivid-red-background-color {
  background-color: #cf2e2e;
}
:root .has-luminous-vivid-orange-background-color {
  background-color: #ff6900;
}
:root .has-luminous-vivid-amber-background-color {
  background-color: #fcb900;
}
:root .has-light-green-cyan-background-color {
  background-color: #7bdcb5;
}
:root .has-vivid-green-cyan-background-color {
  background-color: #00d084;
}
:root .has-pale-cyan-blue-background-color {
  background-color: #8ed1fc;
}
:root .has-vivid-cyan-blue-background-color {
  background-color: #0693e3;
}
:root .has-vivid-purple-background-color {
  background-color: #9b51e0;
}
:root .has-very-light-gray-background-color {
  background-color: #eee;
}
:root .has-cyan-bluish-gray-background-color {
  background-color: #abb8c3;
}
:root .has-very-dark-gray-background-color {
  background-color: #313131;
}
:root .has-pale-pink-color {
  color: #f78da7;
}
:root .has-vivid-red-color {
  color: #cf2e2e;
}
:root .has-luminous-vivid-orange-color {
  color: #ff6900;
}
:root .has-luminous-vivid-amber-color {
  color: #fcb900;
}
:root .has-light-green-cyan-color {
  color: #7bdcb5;
}
:root .has-vivid-green-cyan-color {
  color: #00d084;
}
:root .has-pale-cyan-blue-color {
  color: #8ed1fc;
}
:root .has-vivid-cyan-blue-color {
  color: #0693e3;
}
:root .has-vivid-purple-color {
  color: #9b51e0;
}
:root .has-very-light-gray-color {
  color: #eee;
}
:root .has-cyan-bluish-gray-color {
  color: #abb8c3;
}
:root .has-very-dark-gray-color {
  color: #313131;
}
:root .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
  background: linear-gradient(135deg, #0693e3, #9b51e0);
}
:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {
  background: linear-gradient(135deg, #00d084, #0693e3);
}
:root .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
  background: linear-gradient(135deg, #7adcb4, #00d082);
}
:root .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
  background: linear-gradient(135deg, #fcb900, #ff6900);
}
:root .has-luminous-vivid-orange-to-vivid-red-gradient-background {
  background: linear-gradient(135deg, #ff6900, #cf2e2e);
}
:root .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
  background: linear-gradient(135deg, #eee, #a9b8c3);
}
:root .has-cool-to-warm-spectrum-gradient-background {
  background: linear-gradient(
    135deg,
    #4aeadc,
    #9778d1 20%,
    #cf2aba 40%,
    #ee2c82 60%,
    #fb6962 80%,
    #fef84c
  );
}
:root .has-blush-light-purple-gradient-background {
  background: linear-gradient(135deg, #ffceec, #9896f0);
}
:root .has-blush-bordeaux-gradient-background {
  background: linear-gradient(135deg, #fecda5, #fe2d2d 50%, #6b003e);
}
:root .has-purple-crush-gradient-background {
  background: linear-gradient(135deg, #34e2e4, #4721fb 50%, #ab1dfe);
}
:root .has-luminous-dusk-gradient-background {
  background: linear-gradient(135deg, #ffcb70, #c751c0 50%, #4158d0);
}
:root .has-hazy-dawn-gradient-background {
  background: linear-gradient(135deg, #faaca8, #dad0ec);
}
:root .has-pale-ocean-gradient-background {
  background: linear-gradient(135deg, #fff5cb, #b6e3d4 50%, #33a7b5);
}
:root .has-electric-grass-gradient-background {
  background: linear-gradient(135deg, #caf880, #71ce7e);
}
:root .has-subdued-olive-gradient-background {
  background: linear-gradient(135deg, #fafae1, #67a671);
}
:root .has-atomic-cream-gradient-background {
  background: linear-gradient(135deg, #fdd79a, #004a59);
}
:root .has-nightshade-gradient-background {
  background: linear-gradient(135deg, #330968, #31cdcf);
}
:root .has-midnight-gradient-background {
  background: linear-gradient(135deg, #020381, #2874fc);
}
.has-small-font-size {
  font-size: 13px;
}
.has-normal-font-size,
.has-regular-font-size {
  font-size: 16px;
}
.has-medium-font-size {
  font-size: 20px;
}
.has-large-font-size {
  font-size: 36px;
}
.has-huge-font-size,
.has-larger-font-size {
  font-size: 42px;
}
.has-text-align-center {
  text-align: center;
}
.has-text-align-left {
  text-align: left;
}
.has-text-align-right {
  text-align: right;
}

.wp-block-columns .wp-block-column .wp-block-image {
  margin: 0px;
}

.wp-block-cover {
  padding: 0px 5vh 24px 5vh;
}

.alignfull {
  padding: 0px 0px 0px 0px !important;

}


.wp-block-latest-posts__list.is-grid.columns-3 {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  padding: 25px;

  a {
    font-size: 24px;
  }

  .wp-block-latest-posts__featured-image {
    width: 100%;
    height: 100%;

    a {
    width: 100%;
    height: 100%;

    span {
      position: inherit;
      padding-bottom: 0px;
      width: 100%;
      height:100%;

      img {
        position: inherit;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    }

  }
}

@media only screen and (min-width: 780px) {
  .wp-block-latest-posts__list.is-grid.columns-3 {
    grid-template-columns: 1fr 1fr 1fr;}
}


`;

const HeadContainer = styled.div`
  position: fixed;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 30px 0px 20px 0px;
  transition: padding 0.5s ease;
  z-index: 99;
  width: calc(100% - 10px);
  background-color: var(--background);
  display: flex;
  border-radius: 12px;
  backdrop-filter: blur(12px);
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--postbackground);
  min-height: calc(100vh - 82px);

`;
