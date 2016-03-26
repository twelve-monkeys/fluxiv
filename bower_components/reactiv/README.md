# reactiv
A react-like incremental vdom renderer

Still proof-of-concept.

This is a concretisation of google's incremental dom renderer, which has a vdom attached to the dom. This version keeps the virtual dom but mutates it incrementally. This uses the same small, non-gc-churning data objects as google's approach while avoiding relying on the DOM for iteration as it does.

It also supports fully a component lifecycle, including a proto-component class.

It is designed to be api compatible with google's incremental dom renderer, which has webpack/babel processing for .jsx available.
