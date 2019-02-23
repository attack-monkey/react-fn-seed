import { app } from "react-fn";
import { state, State } from "./src/state/state";
import { firstComponent } from "./src/components/first-component/first-component";
import { loadPolyfills } from "./utils/polyfills/load-polyfills";
import { actions } from "./src/actions/actions";

const mount = document.getElementById('app')
loadPolyfills();
app(state, firstComponent, actions, mount);