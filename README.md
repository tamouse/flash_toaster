# `flash-toastr`

A experimental React Component to implement a Flash / Toastr message using React Hooks

This is primarily to learn how to create custom hooks, and see about making the Redux- and EventEmitter-based version in our product a lot better with hooks.

My original thought was to this entirely without context, and try to keep state within the hook definition. I think that only works when you want multiple states for each time you use the hook, instead of a common one.

So instead, it's using a react context and using that inside the `useFlash` hook. Still a lot better than the render prop method otherwise available.
