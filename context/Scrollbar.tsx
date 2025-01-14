'use client';

export function ScrollBarProps({ children }: { children: React.ReactNode }) {
    return (
        <>
            <style jsx global>
                {`
                    /* Basic scrollbar styling */
                    ::-webkit-scrollbar {
                        width: 3px;
                        height: 3px;
                    }

                    /* Track styles */
                    ::-webkit-scrollbar-track {
                        background: transparent;
                        border-radius: 20px;
                        margin: 4px;
                    }

                    /* Handle/thumb styles */
                    ::-webkit-scrollbar-thumb {
                        background: #5eead4;
                        border-radius: 20px;
                        transition: all 0.2s ease;
                    }

                    /* Handle on hover */
                    ::-webkit-scrollbar-thumb:hover {
                        width: 6px;
                        background: #5eead4;
                    }

                    /* Corner styles */
                    ::-webkit-scrollbar-corner {
                        background: transparent;
                    }

                    /* Firefox support */
                    html {
                        scrollbar-width: thin;
                        scrollbar-color: #5eead4 transparent;
                    }

                    /* Optional: Hide scrollbar until hover */
                    .hide-scrollbar-until-hover {
                        scrollbar-width: none;
                    }

                    .hide-scrollbar-until-hover::-webkit-scrollbar {
                        display: none;
                    }

                    .hide-scrollbar-until-hover:hover::-webkit-scrollbar {
                        display: block;
                    }
                `}
            </style>
            {children}
        </>
    );
}
