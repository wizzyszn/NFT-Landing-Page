import { useEffect, useState } from 'react'
export default function useTime() {
    const [date, newDate] = useState(new Date());
   useEffect(() => {
        const timer = () =>{
            newDate(new Date())
        }
      const interval =   setInterval(timer, 1000)
      return () =>{
        clearInterval(interval)
      }
    }, [date])
    return{
        hour :String(date.getHours()).padStart(2, "0"),
        minute : String(date.getMinutes()).padStart(2, "0"),
        seconds :String(date.getSeconds()).padStart(2, "0")
    }
}