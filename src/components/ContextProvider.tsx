import { createContext, useReducer } from "react";

type ContentKeys = 'numbers' | 'alphabet' | 'words' | null;

const contentList = {
    numbers: require('../assets/text/numbers.json'),
    alphabet: require('../assets/text/alphabet.json'),
    words: null
}

type ContextProps = {
    content: {[key: string]: {text: string, audio: string}} | null;
    contentType: ContentKeys;
    setContent: (payload: ContentKeys) => void;
}

export const Context = createContext({} as ContextProps);

export enum ActionTypes {
    SET_CONTENT = "SET_CONTENT"
}

export interface AppState {
    content: {[key: string]: {text: string, audio: string}} | null;
    contentType: ContentKeys;
}

export interface Action {
    type: string;
    payload: ContentKeys;
}

const INITIAL_STATE: AppState = {
    content: null,
    contentType: null
};

const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_CONTENT:
            console.log(action.payload)
            return { 
                ...state, content: action.payload ? contentList[action.payload] : null,
                contentType: action.payload
            };
    }
    return state;
};

const ContextProvider = ({ children }: any) => {
    const setContent = (payload: ContentKeys) => {
        dispatch({
            type: ActionTypes.SET_CONTENT,
            payload
        });
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <Context.Provider value={{ ...state, setContent }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
