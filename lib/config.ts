import { Metadata } from "next";

export const metaConfig: Metadata = {
    title: {
        default: "Ankush's World - Explore Blogs and Insights",
        template: "%s - Ankush's Blog",
    },
    description:
        "Discover Ankush's latest blogs on tech, coding, and more. Stay updated with fresh content and insights.",
    keywords: [
        "Ankush Singh Blogs",
        "Ankush Blogs",
        "Tech Blogs",
        "Software Development",
        "Programming Blogs",
        "Ankush Singh",
        "Ankush Singh Tech",
        "blogs by Ankush Singh",
    ],

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://blog.ankushsingh.tech",
        title: "Ankush's World - Explore Blogs and Insights",
        description:
            "Discover Ankush's latest blogs on tech, coding, and more. Stay updated with fresh content and insights.",
        images: [
            {
                url: "https://blog.ankushsingh.tech/og-image.png",
                width: 1200,
                height: 627,
                alt: "Ankush's Blog",
            },
        ],
        siteName: "Ankush's Blog",
    },

    twitter: {
        card: "summary_large_image",
        creator: "@whyankush07",
        title: "Ankush's Blog - Explore the Latest Blogs",
        description:
            "Read the latest blogs by Ankush on technology, coding, and various other topics.",
        images: [
            {
                url: "https://blog.ankushsingh.tech/og-image.png",
                width: 1200,
                height: 627,
                alt: "Ankush's Blog",
            },
        ],
    },

    manifest: "/manifest.webmanifest",
    metadataBase: new URL("https://blog.ankushsingh.tech"),
}