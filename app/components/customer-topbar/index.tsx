import { CUSTOMER_ROUTE_PATH, ROUTE_PATH } from '@/app/constants/routePath'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function CustomerTopbar({ }: Props) {
    return (
        <div
            style={{ boxShadow: '0 1px 9px 0 rgba(0, 0, 0, 0.3)' }}
            className={`h-20 bg-primary w-full fixed top-0 left-0 z-50 flex items-center px-5 bg-white`}
        >
            <span className='px-5'>Pool Villa</span>
            <Link href={CUSTOMER_ROUTE_PATH.HOMELIST}>
                <span className='cursor-pointer px-5'>ห้องประชุมทั้งหมด</span>
            </Link>
        </div>
    )
}