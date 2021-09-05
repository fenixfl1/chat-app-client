import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import {
  PATH_LOGIN,
  WEB_SERVICE_API_GET_USER_INFO_LOGIN,
} from '../constant/routes'
import { useAuthState } from '../context'
import { getRequest } from '../utils/api'
import {
  CustomContainer,
  CustomHeader,
  CustomMenu,
  CustomMenuItem,
  CustomRow,
} from './semantic'

const ProtectedRouterWrapper: React.FC = ({ children }): React.ReactElement => {
  const { userData, isLoggedIn } = useAuthState()

  const { userId } = userData

  useEffect(() => {
    userId && getRequest(`${WEB_SERVICE_API_GET_USER_INFO_LOGIN}/${userId}`)
  }, [userId])

  if (!isLoggedIn) {
    return <Redirect to={PATH_LOGIN} />
  }

  return (
    <CustomRow style={{ height: '100vh' }}>
      <div>
        <CustomMenu fixed="top">
          <CustomContainer>
            <CustomMenuItem as="a" header>
              Project Name - {userData?.username}
            </CustomMenuItem>
            <CustomMenuItem as="a">Home</CustomMenuItem>
          </CustomContainer>
        </CustomMenu>

        <CustomContainer fluid={false} style={{ marginTop: '5em' }}>
          <CustomHeader as="h1">{children}</CustomHeader>
        </CustomContainer>
      </div>
    </CustomRow>
  )
}

export default ProtectedRouterWrapper
