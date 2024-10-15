import React from 'react'
import facebookLogo from "../assets/images/icon-facebook.svg"
import twitterLogo from "../assets/images/icon-twitter.svg"
import instagramLogo from "../assets/images/icon-instagram.svg"
import youtubeLogo from "../assets/images/icon-youtube.svg"
import iconUp from "../assets/images/icon-up.svg"
import iconDown from "../assets/images/icon-down.svg"


const networkLogo = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo
}

const colorBorder = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram',
    YouTube: 'bg-YouTube'
}

export const OverviewCard = ({ user, audience, audienceType, today, network, isUp }) => {
    return (
        <article className='dark:bg-Dark-Desaturated-Blue bg-Light-Grayish-Blue w-[20.375rem] h-[13.5rem] mb-4 rounded-[.3125rem] mx-auto overflow-hidden text-center hover:brightness-95 dark:hover:brightness-125'>
            <div className={`${colorBorder[network]} h-1 mb-8`}></div>
            <div className='flex items-center place-content-center gap-2'>
                <img src={networkLogo[network]} alt={`logo ${network}`} />
                <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
            </div>
            <p className='text-[3.5rem] font-bold text-Very-Dark-Blue dark:text-White
            '>{audience}</p>
            <p className='uppercase tracking-[.3125rem] text-Dark-Grayish-Blue text-xs'>{audienceType}</p>
            <div className='flex items-center place-content-center gap-1'>
                <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
                <p>{today} Today</p>

            </div>

        </article>
    )
}


export const OverviewCardToday = ({ network, statsType, stasts, porcentage, isUp }) => {
    return (
        <article className='bg-Light-Grayish-Blue  w-[20.375rem] h-[7.81rem] mb-4 mx-auto rounded-[0.31rem] p-[1.68rem] cursor-pointer hover:brightness-95 dark:hover:brightness-125 dark:bg-Dark-Desaturated-Blue' >
            <div className='flex justify-between items-center place-content-center  dark:text-White'>
                <p className='text-Dark-Grayish-Blue'>{statsType}</p>
                <img src={networkLogo[network]} alt={network} />
            </div>
            <div className='flex justify-between '>
                <p className='text-[2.65rem] font-bold text-Very-Dark-Blue dark:text-white'>{stasts}</p>
                <div className='flex items-center place-content-center gap-1'>
                    <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
                    <p className={`${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>
                        {porcentage}%</p>
                </div>
            </div>
        </article>
    )
}


