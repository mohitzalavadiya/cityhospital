import { AllWatch } from "./Auth.Saga";
import { all} from 'redux-saga/effects'


export function* sagaAll() {
    yield all ([
        AllWatch()
    ])
}