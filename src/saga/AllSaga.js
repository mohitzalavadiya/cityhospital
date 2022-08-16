import { AllWatch } from "./Auth.Saga";

function* sagaAll() {
    yield [AllWatch()]
}