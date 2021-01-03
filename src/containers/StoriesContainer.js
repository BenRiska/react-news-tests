import {useEffect, useState} from "react"
import Story from "../components/Story"
import {getStoryIds} from "../services/hnApi"
import {
    GlobalStyle,
    StoriesContainerWrapper,
  } from '../styles/StoriesContainerStyles';

function StoriesContainer() {

    const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then(res => setStoryIds(res))
  }, [])

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
            <h1>Hacker News Stories</h1>
            {storyIds && storyIds.map(id => <Story key={id} id={id}/>)}
            </StoriesContainerWrapper>
        </>
    )
}

export default StoriesContainer
