const DrawerToggleButton = ({click}) => (
    <button onClick={click}>
        <svg className="md:hidden h-10 fill-current text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
            <path d="M12 120h361a12 12 0 000-24H12a12 12 0 000 24zM373 180H12a12 12 0 000 25h361a12 12 0 000-25zM373 265H132a12 12 0 000 24h241a12 12 0 000-24z"/>
        </svg>
    </button>
);

export default DrawerToggleButton