import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from 'liform-react'
import Markdown from './Markdown'

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'type':'object',
        'properties': {
            'Title': { 'type':'string' },
            'Type': { 'enum':[ 'One','Two' ], 'type':'string' },
            'Color': { 'type':'color' },
            'Checkbox': { 'type':'boolean' }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}


const Simple = () => (
  <div>
    <h2>Simple Form</h2>
    <h3>Form</h3>
    <Demo/>
    <h3>Code</h3>
    <Markdown page={require('../Content/Simple.md')}/>
  </div>
)

export default Simple
