import React, { useState, useEffect } from 'react';
import StoryList from './StoryList';
import Story from './Story';

export default function StoryContainer(props) {

    const [stories, setStories] = useState([]);
    const [story, setStory] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        console.log('calling');
        const controller = new AbortController();
        const { signal } = controller;
        fetch(`http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=5OanJOhTGcA9YaEHxid4mFW5fRnDvFfK`, {
            signal
        })
            .then((res) => res.json())
            .then(data => setStories(data.results))
            .catch(error => setError(error.message));
            return () => controller.abort();
            
    }, []);

    return <>
        {!story && stories && <StoryList stories={stories} onStory={setStory} />}
        {story && <Story story={story} onBack={setStory} />}
    </>;
}