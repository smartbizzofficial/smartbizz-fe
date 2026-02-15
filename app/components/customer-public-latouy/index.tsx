import React, { ReactNode } from 'react'
import CustomerTopbar from '../customer-topbar'
import CustomerFooter from '../customer-footer'

type Props = {
    children: ReactNode
}

export default function CustomerPublicLayout({ children }: Props) {
    return (
        <>
            <CustomerTopbar />
            <div className='min-h-[calc(100vh-80px)] mt-[80px] bg-primary'>
                {children}
            </div>
            <CustomerFooter />
        </>
    )
}