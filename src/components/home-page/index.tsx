import { HomePageStoryblok } from "@/component-types-sb"
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc"

export function HomePage({blok}: {blok: HomePageStoryblok}) {
    return (
        <div {...storyblokEditable(blok)}>
            {
                blok.body?.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))
            }
        </div>
    )
}