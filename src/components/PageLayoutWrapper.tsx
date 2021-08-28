import React, { useEffect } from 'react'
import { Divider, Dropdown } from 'semantic-ui-react'
import io from 'socket.io-client'
import {
  CustomColumn,
  CustomContainer,
  CustomGrid,
  CustomHeader,
  CustomList,
  CustomListItem,
  CustomMenu,
  CustomMenuItem,
  CustomSegment,
} from './semantic'

const PageLayoutWrapper = () => {
  const socket = io('https://flask-chat-app-server.herokuapp.com')

  useEffect(() => {
    socket.on('connect', () => {
      socket.send('Ok!')
    })

    return () => {
      socket.on('disconnect', () => {
        socket.send('disconnected')
      })
    }
  }, [])

  return (
    <div>
      <CustomMenu fixed="top" inverted>
        <CustomContainer>
          <CustomMenuItem as="a" header>
            Project Name
          </CustomMenuItem>
          <CustomMenuItem as="a">Home</CustomMenuItem>

          <Dropdown item simple text="Dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>CustomList Item</Dropdown.Item>
              <Dropdown.Item>CustomList Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>CustomHeader Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>CustomList Item</Dropdown.Item>
                  <Dropdown.Item>CustomList Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>CustomList Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CustomContainer>
      </CustomMenu>

      <CustomContainer text style={{ marginTop: '7em' }}>
        <CustomHeader as="h1">Semantic UI React Fixed Template</CustomHeader>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
          A text container is used for the main container, which is useful for
          single column layouts.
        </p>

        {/* <Image
        src="/images/wireframe/media-paragraph.png"
        style={{ marginTop: '2em' }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: '2em' }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: '2em' }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: '2em' }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: '2em' }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: '2em' }}
      />
      <Image
        src="/images/wireframe/paragraph.png"
        style={{ marginTop: '2em' }}
      /> */}
      </CustomContainer>

      <CustomSegment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
      >
        <CustomContainer textAlign="center">
          <CustomGrid divided inverted stackable>
            <CustomColumn width={3}>
              <CustomHeader inverted as="h4" content="Group 1" />
              <CustomList link inverted>
                <CustomListItem as="a">Link One</CustomListItem>
                <CustomListItem as="a">Link Two</CustomListItem>
                <CustomListItem as="a">Link Three</CustomListItem>
                <CustomListItem as="a">Link Four</CustomListItem>
              </CustomList>
            </CustomColumn>
            <CustomColumn width={3}>
              <CustomHeader inverted as="h4" content="Group 2" />
              <CustomList link inverted>
                <CustomListItem as="a">Link One</CustomListItem>
                <CustomListItem as="a">Link Two</CustomListItem>
                <CustomListItem as="a">Link Three</CustomListItem>
                <CustomListItem as="a">Link Four</CustomListItem>
              </CustomList>
            </CustomColumn>
            <CustomColumn width={3}>
              <CustomHeader inverted as="h4" content="Group 3" />
              <CustomList link inverted>
                <CustomListItem as="a">Link One</CustomListItem>
                <CustomListItem as="a">Link Two</CustomListItem>
                <CustomListItem as="a">Link Three</CustomListItem>
                <CustomListItem as="a">Link Four</CustomListItem>
              </CustomList>
            </CustomColumn>
            <CustomColumn width={7}>
              <CustomHeader inverted as="h4" content="Footer CustomHeader" />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </CustomColumn>
          </CustomGrid>

          <Divider inverted section />
          {/* <Image centered size="mini" src="/logo.png" /> */}
          <CustomList horizontal inverted divided link size="small">
            <CustomListItem as="a" href="#">
              Site Map
            </CustomListItem>
            <CustomListItem as="a" href="#">
              Contact Us
            </CustomListItem>
            <CustomListItem as="a" href="#">
              Terms and Conditions
            </CustomListItem>
            <CustomListItem as="a" href="#">
              Privacy Policy
            </CustomListItem>
          </CustomList>
        </CustomContainer>
      </CustomSegment>
    </div>
  )
}

export default PageLayoutWrapper
