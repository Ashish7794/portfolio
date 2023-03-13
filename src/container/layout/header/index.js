import Sonnet from '@/src/components/basic/button'
import Text from '@/src/components/basic/text'
import React from 'react'
import { Button, Nav, Tab, Tabs } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='d-between'>
      <div><Text size='27px' color='white' fontWeight='400'> Ashish Yadav</Text></div>
      <div className=''>
        <Tabs
          defaultActiveKey="about"
          id="justify-tab-example"
          className="mb-5 noBorder"
          justify
        >
          <Tab eventKey="about" title="About">
            <Sonnet />
          </Tab>
          <Tab eventKey="resume" title="Resume">
            this
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            hi
          </Tab>
          <Tab eventKey="certificates" title="Certificates" >
            hello
          </Tab>
          <Tab eventKey="contact" title="Contact" >
            ashish
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Header