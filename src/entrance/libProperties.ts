// import start, { setup, mount, E_EDITOR_THEME } from 'monaco-python';

// export type { Editor, EditorOptions, EditorSnippets} from 'monaco-python';
// export { setup, mount, E_EDITOR_THEME};
// export default start;

import * as monacoPython from 'monaco-python';

export type LibProperties = typeof monacoPython;

export default monacoPython;