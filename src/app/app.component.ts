import { Component, OnInit } from '@angular/core';

// @ts-ignore
// import workerUrl from 'worker-plugin/loader?name=dal&esModule!./dal-shared.worker.ts';
//
import SW from './dal-shared.worker.ts';
// import workerUrl from 'sharedworker-loader!./dal-shared.worker.ts';
// import workerUrl from 'worker-loader?inline=fallback!./dal-shared.worker.ts'; // Fck..it should work
// const workerUrl = './dal.shared.worker.js';

// import SharedW from 'sharedworker-loader?name=dal!./dal-shared.worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'swtest';

  ngOnInit() {
    console.log(SharedWorker);
    // From loader as string
    //
    // console.debug('[line 23][app.component.ts<2>] 🚀 workerUrl: ', workerUrl);
    // const worker = new SharedWorker(workerUrl as any, { type: 'module' });
    //
    //
    // From webpack with chain for loaders
    console.debug('[line 31][app.component.ts<2>] 🚀 SW: ', SW);
    const worker = new SW();
    //
    //
    // Native worker feature (webpack 5 have to allow it, but works only with js.)
    // const worker = new SharedWorker(new URL(workerUrl, import.meta.url), {
    // const worker = new SharedWorker(workerUrl, {
    //   type: 'module',
    //   inline: true,
    //   fallback: false,
    // } as any);
    console.debug('[line 22][app.component.ts] 🚀 shared: ', worker);
    // console.debug(
    //   '[line 21][app.component.ts] 🚀 SharedWorker: ',
    //   SharedWorker
    // );
    // const worker = new SharedWorker(new URL(workerUrl, import.meta.url));
    // const worker = new SharedWorker(new URL(workerUrl, import.meta.url));
    // const worker = new SharedWorker(workerUrl, {
    //   type: 'module',
    //   credentials:
    // });
    // console.debug('[line 27][app.component.ts] 🚀 worker: ', worker);

    // const worker = new SharedWorker();
    // console.debug('[line 17][app.component.ts] 🚀 worker: ', worker);
    // @ts-ignore
    (worker as any).onerror = (e) => {
      console.debug('[line 20][app.component.ts] 🚀 e: ', e);
    };
  }
}
