import DrawerToggleButton from './DrawerToggleButton'

const Toolbar = ({drawerClickHandler}) => (
    <nav className="flex items-center justify-between w-5/6 xl:w-4/6 mx-auto pt-2">
        <svg className="h-16 lg:h-24" viewBox="0 0 507 507" xmlns="http://www.w3.org/2000/svg">
            <path d="M285 364v7c0 6-5 10-10 10H54c-5 0-10-4-10-10v-7a120 120 0 01241 0zm0 0" fill="#d73735"/><path d="M285 364v7c0 6-5 10-10 10H87c-6 0-10-4-10-10v-7c0-61 45-112 104-120a120 120 0 01104 120zm0 0" fill="#f85252"/><path d="M164 285c-14 0-25-12-25-26v-57h51v57c0 14-11 26-26 26zm0 0M61 155c0 12 10 22 22 22h10v-44H83c-12 0-22 10-22 22zm0 0M245 133h-9v44h9c13 0 23-10 23-22s-10-22-23-22zm0 0" fill="#edaf85"/><path d="M238 83v86a74 74 0 01-74 74c-40 0-74-33-74-74V83c0-5 5-10 10-10h128c6 0 10 5 10 10zm0 0" fill="#edaf85"/><path d="M238 83v86c0 37-26 67-61 73-34-6-61-36-61-73V83c0-5 5-10 10-10h102c6 0 10 5 10 10zm0 0" fill="#f7c09a"/><path d="M324 307v187c0 5-4 10-10 10H14c-5 0-10-5-10-10V307c0-5 5-10 10-10h300c6 0 10 5 10 10zm0 0" fill="#d8d6d7"/><path d="M324 307v187c0 5-4 10-10 10H57c-6 0-10-5-10-10V307c0-5 4-10 10-10h257c6 0 10 5 10 10zm0 0" fill="#fff"/><path d="M181 362h-33c-3 0-7 2-8 5l-17 28v10l17 29c1 3 5 5 8 5h33c3 0 6-2 8-5l16-29c2-3 2-6 0-10l-16-28c-2-3-5-5-8-5zm0 0" fill="#d8d6d7"/><path d="M110 69v45a19 19 0 01-37 0V69a19 19 0 0137 0zm0 0" fill="#1c868e"/><path d="M110 69v21a19 19 0 01-37 0V69a19 19 0 0137 0zm0 0" fill="#40c4df"/><path d="M280 12l-4 15-10 33c-8 29-36 49-65 45l-85-10a7 7 0 01-6-7V69c0-24 19-43 43-43h65c20 0 38-7 53-20 1-2 2-2 4-2 3 0 7 4 5 8zm0 0" fill="#40c4df"/><path d="M276 27l-10 33c-8 29-36 49-65 45l-85-10c-3 0-6-3-6-6 1-23 20-41 43-41h65c20 0 38-7 53-20a6 6 0 015-1zm0 0" fill="#1c868e"/><g fill="#491352"><path d="M138 149a10 10 0 11-20 0 10 10 0 0120 0zm0 0M211 149a10 10 0 11-20 0 10 10 0 0120 0zm0 0M184 178c0-5-8-5-8 0a12 12 0 01-23 0c0-5-8-5-8 0a20 20 0 0039 0zm0 0"/><path d="M314 293h-47c-18-25-44-43-73-50v-2c25-10 43-32 47-60h4a26 26 0 000-52h-3v-26-4c13-8 24-22 28-38l14-48c2-4 0-9-4-11-3-3-8-3-12 1a75 75 0 01-50 19h-65c-21 0-39 14-45 33a22 22 0 00-39 14v45c0 6 2 12 6 16a26 26 0 008 51h4c5 28 23 50 48 60v2c-30 7-56 25-73 50H14c-7 0-14 6-14 14v187c0 7 7 14 14 14h300c8 0 14-7 14-14V307c0-8-6-14-14-14zm-72-156h3a18 18 0 010 36h-3v-36zM114 69c0-21 17-39 39-39h65c21 0 40-8 56-21l2-1v3l-13 48c-8 27-35 46-62 42l-84-10c-2 0-3-2-3-3V69zM83 173a18 18 0 010-36h3l1 36zm-6-59V69a15 15 0 0129 0v45a15 15 0 01-29 0zm17 55v-33c11-1 20-11 20-22V99h2l93 10c9 0 17-2 25-6v66a70 70 0 01-140 0zm92 75v15a22 22 0 01-43 0v-15c13 4 28 4 43 0zm-51 7v8a30 30 0 0059 0v-8c24 7 47 21 63 42H72c16-21 38-35 63-42zm185 243c0 3-2 6-6 6H14c-3 0-6-3-6-6V307c0-3 3-6 6-6h300c4 0 6 3 6 6zm0 0"/><path d="M193 365c-3-4-7-7-12-7h-33c-5 0-9 3-12 7l-16 28c-3 5-3 10 0 14l16 29c3 4 7 7 12 7h33c5 0 9-3 12-7l16-29c2-4 2-9 0-14zm9 38l-16 29c-1 1-3 3-5 3h-33c-2 0-4-2-5-3l-16-29v-6l16-28c1-2 3-3 5-3h33c2 0 4 1 5 3l16 28v6zm0 0"/></g>
        </svg>
        <div className="hidden md:block text-md font-medium">
            <ul className="inline-flex">
                <li>
                    <div className="flex-1 text-teal-500 text-center px-4 py-2 m-2"><a href="/">About</a></div>
                </li>
                <li>
                    <div className="flex-1 text-teal-500 text-center px-4 py-2 m-2"><a href="/">Blog</a></div>
                </li>
                <li>
                    <div className="flex-1 text-teal-500 text-center px-4 py-2 m-2"><a href="/">Contact</a></div>
                </li>
            </ul>
        </div>
        <DrawerToggleButton click={drawerClickHandler}/>
    </nav>
)

export default Toolbar