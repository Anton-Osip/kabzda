import {reducer, StateType, TOGGLE_COLLAPSED} from "./UncontrolledAccordion";

test('reducer should be true', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})
test('reducer should be false', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is uncorrected', () => {

    const state: StateType = {
        collapsed: true
    }



    expect(()=>{reducer(state, {type: 'throw'})}).toThrowError()
})