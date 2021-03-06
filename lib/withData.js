import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import initApollo from './initApollo'
import initRedux from './initRedux'

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

export default ComposedComponent => {
  return class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(
      ComposedComponent
    )})`
    static propTypes = {
      stateApollo: PropTypes.object.isRequired
    }

    static async getInitialProps(ctx) {
      // Initial stateApollo with apollo (empty)
      let stateApollo = {
        apollo: {
          data: {}
        }
      }
      // Initial stateRedux with apollo (empty)
      let stateRedux = {}

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo()
        const redux = initRedux()

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent {...composedInitialProps} />
            </ApolloProvider>,
            {
              router: {
                asPath: ctx.asPath,
                pathname: ctx.pathname,
                query: ctx.query
              }
            }
          )
        } catch (error) {
          console.log(error)
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()

        // Extract query data from the Redux store
        stateRedux = redux.getState()

        // Extract query data from the Apollo store
        stateApollo = {
          apollo: {
            data: apollo.cache.extract()
          }
        }
      }

      return {
        stateApollo,
        stateRedux,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props)
      this.apollo = initApollo(props.stateApollo.apollo.data)
      this.redux = initRedux(props.stateRedux)
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
