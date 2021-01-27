import HelloTwo from '../components/hello_redux/helloTwo';
import * as actions from '../redux/actions';
import { StoreState } from '../redux/stors';
// import { connect, Dispatch } from 'react-redux';
export function mapStateToProps ({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}
// export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
//     return {
//       onAdd: () => dispatch(actions.incrementEnthusiasm()),
//       onShift: () => dispatch(actions.decrementEnthusiasm()),
//     }
//   }