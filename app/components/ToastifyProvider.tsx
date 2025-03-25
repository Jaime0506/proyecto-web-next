'use client'

import { ToastContainer, ToastContainerProps } from "react-toastify"

// const primary = {

// }

export default function ToastifyProvider({ 
    position = "bottom-right",
    hideProgressBar = false
}: ToastContainerProps) {

    return (
        <ToastContainer
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            toastClassName="border-2 border-primary"
            autoClose={3000}
            position={position}
            hideProgressBar={hideProgressBar}
            closeOnClick
            theme="light"
        />
    )
}
