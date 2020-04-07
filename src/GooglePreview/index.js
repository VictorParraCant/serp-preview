import React from 'react'
import { default as PT } from 'prop-types'
import Radium, { Style } from 'radium'

const styles = {
  wrapper: {
    position: 'relative',
    fontFamily: ['arial', 'sans- serif'],
    textAlign: 'left',
    maxWidth: '600px'
  },
  title: {
    display: 'inline-block',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: 1.3,
    margin: '0 0 3px 0',
    padding: '4px 0 0',
  },
  description: {
    color: '#3C4043',
    lineHeight: 1.58,
    fontSize: '14px',
    wordWrap: 'break-word'
  },
  em: {
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  url: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingTop: '1px',
    paddingBottom: '1px',
    lineHeight: 1.3,
    display: 'inline-block',
    fontSize: '14px',
    color: '#3C4043',
    fontStyle: 'normal'
  },
  link: {
    textDecoration: 'none',
    color: '#1a0dab',
    outline: 0,
    ':hover': {
      textDecoration: 'underline'
    }
  }
}

const LinkComponent = ({ href, children }) => {
  return (
    <a href={href}>{children}</a>
  );
}
const Link = Radium(LinkComponent);

const formatUrl = (url) => url
  .replace(/https?:\/\//, '')
  .replace(/\//g, ' › ')

const GooglePreview = ({ title, description, url, link }) => (
  <div style={styles.wrapper}>
    <Style rules={{ 'em': styles.em }} />
    <Link href={link}>
      <br />
      <h3 style={[styles.title, styles.link]}>{title}</h3>
      <span style={styles.url}>{formatUrl(url)}</span>
    </Link>
    <div style={styles.description}>{description}</div>
  </div>
)

GooglePreview.defaultProps = {
  description: null,
  link: '#'
}

GooglePreview.propTypes = {
  /** Title */
  title: PT.string.isRequired,
  /** Meta Description */
  description: PT.oneOfType([
    PT.string,
    PT.arrayOf(PT.node),
    PT.node
  ]),
  /** Url */
  url: PT.string.isRequired,
  /** Link for src */
  link: PT.string
}

export default GooglePreview
