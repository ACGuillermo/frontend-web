import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer'
import Backdrop from '../backdrop/Backdrop'
import { useState } from 'react'

const Header = () => {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        console.log(!sideDrawerOpen)
        setSideDrawerOpen(!sideDrawerOpen)
    }

    const sideDrawerCloseHandler = () => {
        setSideDrawerOpen(false)
    }

    const backDropClickHandler = () => {
        setSideDrawerOpen(false)
    }

    return(
        <header className="w-full">
            <Toolbar drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} click={sideDrawerCloseHandler}/>
            {sideDrawerOpen  
                ? <Backdrop click={backDropClickHandler}/>
                : null
            }
        </header>
    )
}

    


export default Header