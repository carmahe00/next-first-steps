import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Seo Title',
  description: 'Seo description',
  keywords: ["Contact Page", "description ias-dev", "information"]
}
export default function ContactPage(){
    return(
        <>
        <span className="text-7xl" >ContactPage</span>
        </>
    )
}