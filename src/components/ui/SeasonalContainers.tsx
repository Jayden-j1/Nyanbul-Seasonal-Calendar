// interface seasonalInformation {
//     season: string;
//     seasonalTitle: string;
//     seasonalMonths: string;
//     seasonDescription: string;
// }


function SeasonalContainers () {
    return (
        <div className="grid grid-cols-5 grid-rows-10 gap-4">
            <div className="col-span-2 row-span-3">
                <h1>Wet Season</h1>
                {/* Animation can go here */}
                <h2>
                    Season of Flowering Bloodwoods
                </h2>
                <h3>(Jan - Feb-late - March)</h3>
                <p>Seasonal Description</p>
            </div>

            <div className="col-span-2 row-span-3 col-start-4">
                <h1>Autumn</h1>
                {/* Animation can go here */}
                <h2>Season of Mullet</h2>
                <h3>(Late March - End of May)</h3>
                <p>Seasonal Description</p>
            </div>

            <div className="col-span-2 row-span-3 row-start-5">
                <h1>Winter</h1>
                {/* Animation can go here */}
                <h2>Season of Banksia Flowers</h2>
                <h3>(June - Late July)</h3>
                <p>Seasonal Description</p>
            </div>

            <div className="col-span-2 row-span-3 col-start-4 row-start-5">
                <h1>Pre-Spring</h1>
                {/* Animation can go here */}
                <h2>Coming out Season</h2>
                <h3>(Late July and August)</h3>
                <p>Seasonal Description</p>
            </div>
            
            
            <div className="col-span-2 row-span-4 row-start-9">
                <h1>Spring</h1>
                {/* Animation can go here */}
                <h2>Season of Heath Flowers</h2>
                <h3>(September to Late October)</h3>
                <p>Seasonal Description</p>
            </div>
            
            <div className="col-span-2 row-span-4 col-start-4 row-start-9">
                <h1>Summer</h1>
                {/* Animation can go here */}
                <h2>Season of Thunderstorms</h2>
                <h3>(November to December)</h3>
                <p>Seasonal Description</p>
            </div>
        </div>
    );
}


export default SeasonalContainers;