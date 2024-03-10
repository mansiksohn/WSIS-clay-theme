import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
// eslint-disable-next-line


const BioPage = (props) => {


    const { markdownRemark: post, site } = props.data;

    return (
        <Layout location={props.location} title={site.siteMetadata.title } social={site.siteMetadata.social}>
        <Seo keywords={[`Gatsby Theme`, `Free Gatsby Template`, `Clay Gatsby Theme`]}
          title={post.frontmatter.title}
          description={post.frontmatter.description || ''}
          image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src}

        />
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>
          {post.frontmatter.description && (
            <p className="post-content-excerpt">{post.frontmatter.description}</p>
          )}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer className="post-content-footer">
          </footer>
        </article>
      </Layout>
    );
};

BioPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BioPage;

export const BioPageQuery = graphql`
  query BioPage {
    site {
        siteMetadata {
          title
          social{
            twitter
            facebook
          }
        }
      }
    markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
        frontmatter {
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData
            
            }
          }
        }
        html
      }
  }
`;