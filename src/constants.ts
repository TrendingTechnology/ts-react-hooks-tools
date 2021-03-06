export const pluginName = 'ts-react-hooks-tools-plugin';

export const refactorName = 'convertReactHooks';
export const refactorDescriptions = 'Convert something into React hooks';

export const wrapIntoUseCallbackActionName = 'wrapIntoUseContext';
export const wrapIntoUseCallbackActionDescription =
    'Wrap into React.useCallback';

export const wrapIntoUseMemoActionName = 'wrapIntoUseMemo';
export const wrapIntoUseMemoActionDescription = 'Wrap into React.useMemo';

export enum Constants {
    SetPrefix = 'set',
    UsePrefix = 'use',
    NamespacePrefix = '@',
    React = 'React',
    ReactModule = 'react',
    UseRef = 'useRef',
    UseState = 'useState',
    UseMemo = 'useMemo',
    UseCallback = 'useCallback',
    NodeModules = 'node_modules',
    UndefinedKeyword = 'undefined'
}
