import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "./OrderSummary";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return(
        <>
            <div className="md:flex">
                <OrderSidebar />
                <hr />
                <p>xxx</p>
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    { children } 
                </main>
                <p>xxx</p>
                <OrderSummary />
            </div>
        </>
    )
}