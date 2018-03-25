//import fetch from 'cross-fetch'

export const ADD_STORY = 'ADD_STORY'
export const SORT_STORY ='SORT_STORY'
export const ADD_ITERATION = 'ADD_ITERATION'
//todo:id採番について考える。
//todo:projectについて考える。
let iterationId=0





export function addStoryAction(iterationIdToAddStory, title, startDate, expireDate){
    console.log("addstoryaction")
    console.log(title)
    console.log(iterationIdToAddStory)
    return{
        type:ADD_STORY,
        iterationId: iterationIdToAddStory,
        title,
        startDate,
        expireDate,
    }
}

export function sortStoryAction(sortedStory) {
    return{
        type:SORT_STORY,
        sortedStory
    }
}

export function addIterationAction(iterationTitle) {
return{
    type:ADD_ITERATION,
    iterationId:iterationId++,
    iterationTitle,
}

}




