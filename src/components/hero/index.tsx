import { FooterNewsletterStoryblok, HeroStoryblok } from "@/component-types-sb"
import { storyblokEditable } from "@storyblok/react/rsc"
import Image from "next/image"

export function Hero({blok}: {blok: HeroStoryblok}) {
    console.log(JSON.stringify(blok, null, 2))
    return (
        <div {...storyblokEditable(blok)}>
            <div className="container">
                <div className="max-w-[720px] py-10 text-center">
                    {
                        blok.title && (
                            <h1 className="text-gray-800 font-semibold text-5xl">
                            {blok.title}
                            </h1>
                        )
                    }
                </div>
            </div>

            <div>
                <Image
                    priority
                    width={1320}
                    height={480}
                    // className="object-contain"
                    src={blok.background.filename}
                    alt={blok.background?.alt || 'background'}
                    sizes="(min-width: 768px) 100vw, 0vw"
                />
            </div>


        </div>
    )
}