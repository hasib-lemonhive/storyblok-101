import { ISbStoryParams, getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';

export default async function Home() {
  const {data} = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story}/>
    </div>
  )
}

export async function fetchData() {
  let sbParams:ISbStoryParams = {version: 'draft'};

  const sbApi = getStoryblokApi();
  return sbApi.get('cdn/stories/home', sbParams);
}