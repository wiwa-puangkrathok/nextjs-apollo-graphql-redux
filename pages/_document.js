import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return {  html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang={`en`}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}