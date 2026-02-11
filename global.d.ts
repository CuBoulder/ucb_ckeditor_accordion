/**
 * @file defines global module declarations.
 */

// The `ckeditor5` module doesn't contain TypeScript definitions. This is a
// workaround that enables TypeScript definitions for webpack DLL builds using
// it.

declare module 'ckeditor5/src/core' {
  export * from '@ckeditor/ckeditor5-core';
}

declare module 'ckeditor5/src/engine' {
  export * from '@ckeditor/ckeditor5-engine';
  // See https://github.com/ckeditor/ckeditor5/issues/18583
  export { enableViewPlaceholder as enablePlaceholder } from '@ckeditor/ckeditor5-engine';

}

declare module 'ckeditor5/src/ui' {
  export * from '@ckeditor/ckeditor5-ui';
  // Older versions of CKEditor 5 expect the export to be named `Model` rather
  // than `ViewModel`. See https://github.com/ckeditor/ckeditor5/issues/15661
  export { ViewModel as Model } from '@ckeditor/ckeditor5-ui';
}

declare module 'ckeditor5/src/utils' {
  export * from '@ckeditor/ckeditor5-utils';
}

declare module 'ckeditor5/src/widget' {
  export * from '@ckeditor/ckeditor5-widget';

  // In some CKEditor5 build setups, `findOptimalInsertionRange()` is typed to
  // accept a `ModelElement` as its second argument. This plugin (and older
  // CKEditor5 code) passes the full `Model`. Provide an overload so TypeScript
  // accepts the working runtime usage.
  import type { Model, ModelDocumentSelection, ModelElement } from 'ckeditor5/src/engine';
  export function findOptimalInsertionRange(
    selection: ModelDocumentSelection,
    model: Model
  ): { start: { parent: ModelElement } };
}


// Enables importing SVG files as strings.

declare module '*.svg' {
  const content: string;
  export default content;
}
