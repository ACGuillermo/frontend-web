const Project = () => (
    <div className="mt-12">
        <div className="bg-white project-shadow rounded text-gray-700 w-full">
            <div className="w-5/6 mx-auto pt-8">
                <h3 className="text-lg font-bold">Portfolio</h3>
                <p className="mt-8 leading-7 text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolorem, architecto necessitatibus sapiente aliquid consequatur animi molestias quod inventore voluptates dicta illum porro error doloribus vel itaque dignissimos. Officia, blanditiis.
                </p>
                <div className="flex flex-wrap mt-6">
                    <p className="py-1 px-2 m-1 border-green-300 border-2 rounded">HTML5</p>
                    <p className="py-1 px-2 m-1 border-yellow-300 border-2 rounded">CSS3</p>
                    <p className="py-1 px-2 m-1 border-pink-300 border-2 rounded">Javascript</p>
                    <p className="py-1 px-2 m-1 border-blue-300 border-2 rounded">ReactJS</p>
                    <p className="py-1 px-2 m-1 border-indigo-300 border-2 rounded">NextJS</p>
                </div>
                <div className="mt-6 flex flex-wrap pb-8">
                    <button className="bg-indigo-600 text-white shadow p-2 rounded">Live Demo</button>
                    <button className="bg-white text-indigo-600 shadow p-2 rounded ml-2">Ver código</button>
                </div>
            </div>
        </div>
    </div>
)

export default Project