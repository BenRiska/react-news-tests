import {useEffect, useState} from "react"
import Story from "../components/Story"
import {getStoryIds} from "../services/hnApi"
import {
    GlobalStyle,
    StoriesContainerWrapper,
  } from '../styles/StoriesContainerStyles';
  import { useInfiniteScroll } from '../hooks/useinfiniteScroll';

function StoriesContainer() {

    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then(res => setStoryIds(res))
  }, [])

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
            <h1>Hacker News Stories</h1>
            {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} id={storyId} />
        ))}
            </StoriesContainerWrapper>
        </>
    )
}

export default StoriesContainer
