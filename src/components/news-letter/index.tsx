import { FooterNewsletterStoryblok } from "@/component-types-sb"
import { storyblokEditable } from "@storyblok/react/rsc"

export function NewsLetter({blok}: {blok: FooterNewsletterStoryblok}) {
    return (
        <div {...storyblokEditable(blok)}>
            <h1 className="text-3xl text-black font-bold">{ blok.heading }</h1>
            <input type="email"  placeholder="email"/>
            <button>
            {
                blok.subscribe_button?.[0].label || 'Label'
            }
            </button>
        </div>
    )
}