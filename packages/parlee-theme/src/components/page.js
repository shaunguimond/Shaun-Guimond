import { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "./list";
import PageMedia from "./page-media";

/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Page = ({ state, actions, libraries, item }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
          <PageMedia id={post.featured_media} />
          <Content>
            <Html2React html={post.content.rendered} />
          </Content>
    </Container>
  ) : null;
};

export default connect(Page);

const Container = styled.div`
  width: 100%;
  margin: 0px;
  min-height: 100vh;


`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px auto;
    padding: 48px;
    background-color: var(--formbackground);
    width: fit-content;
    border-left: 4px solid var(--brand);
    border-radius: 12px;
    backdrop-filter: blur(8px);
  }

  & h1:first-of-type {
    margin-top: 124px;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }

  @media and only screen (min-width: 780px) {
    & > div {
      padding: 0px 10vw 24px 10vw;
    }
  }

  & > div {
    padding: 0px 5vw 24px 5vw;
  }

  
.is-screen-height {
  height: calc(100vh);
}


.pd-sm {
  padding-right: 20px;
  padding-left: 20px;

  @media only screen and (min-width: 1080px) {
    padding-right: 10%;
    padding-left: 10%;
  }
}

.pd-xs {
  padding-right: 5px;
  padding-left: 5px;
  margin-right: 5px;
  margin-left: 5px;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-9px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-of-type(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-of-type(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-of-type(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-of-type(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}

.about-waves {
  background: linear-gradient(60deg, rgba(84,58,183,0.25) 0%, rgba(0,172,193,0.25) 100%);
}

.home-section {
  background-image: url(https://parleemarketing.com/wp-content/uploads/2020/06/Wide-Devices.png);
  background-size: cover;
  background-repeat: no-repeat;

  .wp-block-group__inner-container {
    width: 100%;
    height: 100%;
  }

}


`;
