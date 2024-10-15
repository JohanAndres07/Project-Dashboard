import React from 'react'
import data from "../../data/data.json"
import { OverviewCard, OverviewCardToday } from "./OverviewCard"

const convertNumber = (num) => {
    if (num >= 10000) {
        num = num / 1000
        return `${num}k`
    }
    return num
}
export const OverviewContainer = () => {

    return (
        <section className='flex flex-wrap absolute top-[12rem] left-0 right-0 max-w-[90rem]'>
            {
                data.overview.map(object =>
                    <OverviewCard
                        key={object.id}
                        user={object.user}
                        audience={convertNumber(object.audience)}
                        audienceType={object.audienceType}
                        today={object.today}
                        network={object.network}
                        isUp={object.isUp}
                    />
                )
            }
        </section>
    )
}


export const OverviewContainerToday = () => {
    return (
        <section >
            <h2 className=' text-Dark-Grayish-Blue text-2xl font-bold my-4 ml-[2rem]'>Overview-Today</h2>
            <div className='flex flex-wrap max-w-[90rem]'>
                {
                    data['overview-today'].map(object =>
                        <OverviewCardToday
                            key={object.id}
                            network={object.network}
                            statsType={object.statsType}
                            stasts={convertNumber(object.stats)}
                            porcentage={convertNumber(object.porcentage)}
                            isUp={object.isUp} />
                    )
                }
            </div>
        </section>
    )
}



