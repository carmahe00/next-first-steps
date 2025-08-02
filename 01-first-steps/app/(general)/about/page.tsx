import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Seo Title',
  description: 'Seo description',
  keywords: ["About Page", "description ias-dev", "information"]
}
export default function AboutPage(){
    return(
        <>
        <span className="text-7xl" >AboutPage</span>
        </>
    )
}