import profileReducer, { addPostActionCreator, deletePostActionCreator } from './profileReducer';

const state = {
    postsData: [
        { id: 1, post: "Hey, is anybody here?" },
        { id: 2, post: "It's my first post" }
    ]
}

it('length of post should be incremented', () => {
    // 1. стартовые данные
    const action = addPostActionCreator('How are you?');
    // 2. действия
    const newState = profileReducer(state, action)
    // 3. ожидаемый результат
    expect(newState.postsData.length).toBe(3)
})

it('post of new post should be correct', () => {
    // 1. стартовые данные
    const action = addPostActionCreator('How are you?');
    // 2. действия
    const newState = profileReducer(state, action)
    // 3. ожидаемый результат
    expect(newState.postsData[2].post).toBe('How are you?')
})

it('after deleting length of post should be decrement', () => {
    // 1. стартовые данные
    const action = deletePostActionCreator(1);
    // 2. действия
    const newState = profileReducer(state, action)
    // 3. ожидаемый результат
    expect(newState.postsData.length).toBe(1)
})