import CustomerPublicLayout from "../components/customer-public-latouy";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <CustomerPublicLayout>
            {children}
        </CustomerPublicLayout>
    )
}