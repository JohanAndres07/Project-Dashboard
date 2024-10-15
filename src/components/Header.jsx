import { useState, useEffect } from "react"


export const Header = () => {
    const [darkMode,setDarkMode] =useState(false)
    const handleClick = ()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])
    return (
        <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[14.6875rem] rounded-b-[1.25rem] pt-8 px-6  mb-[56.5rem] md:mb-[26rem] xl:mb-[12.5rem]">
            <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
            <p className="text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
            <hr className="bg-black mb-5" />
            <div className="flex justify-between">
                <p className="text-Dark-Grayish-Blue  dark:text-Desaturated-Blue font-bold">Dark mode</p>
                <label htmlFor="darkmode" className="border w-12 h-6 rounded-full cursor-pointer p-[.13rem] bg-Toggle relative overflow-hidden">
                    <input onClick={handleClick} id="darkmode" type="checkbox" className="sr-only peer" />
                    <div className="peer-checked:bg-Toggle-Gradient absolute top-0 left-0 h-full w-full "></div>
                    <div className="w-[1.125rem] h-[1.125rem] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[1.5rem] transition-all "></div>
                </label>
                
            </div>
        </header>
    )
}
