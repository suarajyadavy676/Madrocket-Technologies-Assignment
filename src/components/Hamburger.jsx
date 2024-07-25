import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Button ref={btnRef} colorScheme="none" onClick={onOpen}>
        <RxHamburgerMenu className="text-2xl text-white" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="black"
          color="white"
          className="text-center text-lg overflow-y-auto h-full opacity-70"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            {/* <img src="./logo.png" alt="logo" className='w-12' /> */}
          </DrawerHeader>

          <DrawerBody>
            <div className="text-center text-lg overflow-y-auto h-full">
              <p className="my-6">
                <Link to="/">Home</Link>
              </p>
              <p className="my-6 hover:text-red-500"><Link to='/about'>About Us</Link></p>
              <p className="my-6 hover:text-red-500"><Link to="/academic">Academics</Link></p>
              <p className="my-6 hover:text-red-500"><Link to="/admissions">Admissions</Link></p>
              <p className="my-6 hover:text-red-500"><Link to="/faculty">Faculty</Link></p>
              <p className="my-6 hover:text-red-500"><Link to="/students">Student</Link></p>
              <p className="my-6 hover:text-red-500"><Link to="/gallery">Gallery</Link></p>
              <p className="my-6 hover:text-red-500"><Link to="/contact">Contact Us</Link></p>
            </div>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Hamburger;
