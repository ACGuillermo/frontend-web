import CardEntry from './CardEntry'
import cardEntries from '../../json/cardEntries.json'

const ConsoleCard = () => {
    return(
        <section id="card_info"className="mt-12 project-shadow rounded-t-lg">
            <div className="bg-gray-300 h-6 w-full rounded-t-lg flex project-shadow">
                <div className="bg-red-500 h-4 w-4 rounded-full ml-2 mt-1"></div>
                <div className="bg-yellow-500 h-4 w-4 rounded-full ml-2 mt-1"></div>
                <div className="bg-green-500 h-4 w-4 rounded-full ml-2 mt-1"></div>
            </div>
            <div className="bg-gray-700 rounded-b-sm pb-8">
                <div className="w-10/12 mx-auto text-gray-200">
                    {cardEntries.map((e) => (
                        <CardEntry key={e.id} command={e.command} result={e.result}/>
                    ))}
                   <div className="pt-4 flex items-center">
                       &gt;<div className="blink bg-gray-300 h-5 w-3 ml-1"></div>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default ConsoleCard