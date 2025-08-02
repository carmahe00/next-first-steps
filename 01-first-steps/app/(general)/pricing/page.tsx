import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Seo Title',
  description: 'Seo description',
  keywords: ["Pricing Page", "description ias-dev", "information"]
}
export default function PricingPage(){
    return(
        <>
        <span className="text-7xl" >PricingPage</span>
        </>
    )
}