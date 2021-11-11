console.log('Amma very sad shared worker, and i wat to be loaded :(');

// const ctx: SharedWorker = self as any;

// Post data to parent thread
// ctx.postMessage({ foo: 'foo' });

// ctx.onerror = (msg) => {
//   console.debug('[line 8][dal.shared.worker.ts] 🚀 msg: ', msg);
// };
// // Respond to message from parent thread
// ctx.addEventListener('message', (event) => console.log(event));

console.log(self);
// (self as any).onconnect = (msg as any) => {
//   console.debug('[line 15][dal.shared.worker.ts] 🚀 msg: ', msg);
//   console.log('connected');
// };
const ctx: Worker = self as any;

// Post data to parent thread
ctx.postMessage({ foo: 'foo' });

// Respond to message from parent thread
ctx.addEventListener('message', (event) => console.log(event));

export default {} as typeof Worker & { new (): Worker };
