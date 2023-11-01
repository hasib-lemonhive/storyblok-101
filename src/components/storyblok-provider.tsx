"use client"
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { ReactNode } from 'react';

// storyblok stories
import { NewsLetter } from './news-letter';
import { HomePage } from './home-page';
import { Hero } from './hero';

const components = {
    'footer_newsletter': NewsLetter,
    'home_page': HomePage,
    'hero': Hero
}

storyblokInit({
    accessToken: 'm2nlCckFxnPrXV5yxQh3qwtt',
    use: [apiPlugin],
    components
})

export default function StoryblokProvider({children}: {children: ReactNode}) {
    return children;
}