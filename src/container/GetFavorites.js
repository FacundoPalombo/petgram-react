import React from 'react'

import { Query } from 'react-apollo'

import { GET_FAVS } from '../gql/queries/user'
import { Loading } from '../components/Loading'

import { ListOfFavs } from '../components/ListOfFavs'

const renderProp = ({ loading, error, data }) => {
  if (loading) return (<Loading />)
  if (error) return (<h1>ERROR</h1>)
  const { favs } = data
  return <ListOfFavs favs={favs} />
}
export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='cache-and-network'>
    {renderProp}
  </Query>
)
