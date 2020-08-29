const SideDrawer = ({click, show}) =>{
    let drawerClasses = 'md:hidden side-drawer';
    
    if(show) {
        drawerClasses = 'md:hidden side-drawer open'
        
    }

    return (
        <nav className={drawerClasses}>
            <button onClick={click} className="relative top-0 right-0 mt-4 mr-4 fill-current text-indigo-400 focus:outline-none">
                <svg className="h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M368 214L161 6a20 20 0 00-29 28l208 208c7 8 7 20 0 28L132 478a20 20 0 1029 28l207-208c23-23 23-61 0-84z"/>
                </svg>
            </button>
            <ul className="text-indigo-400 mt-24 ml-8 text-lg">
                <li className="p-3"><a href="">About</a></li>
                <li className="p-3"><a href="">Blog</a></li>
                <li className="p-3"><a href="">Contact</a></li>
            </ul>
        </nav>
    )
} 

export default SideDrawer;