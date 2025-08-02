import { Nabvar } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nabvar />
            <main className="flex flex-col items-center p-24" >
                <span className="text-lg" >Genreal Page</span>
                {children}
            </main>
        </>
    );
}