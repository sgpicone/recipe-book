import { Component } from '@angular/core';
import { IpcService } from './ipc.service';
import './../util/ipcChannels';

declare var IPC_CHANNELS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Recipe Book';

  constructor(private readonly _ipc: IpcService) {
    // the Array<any> here should be Array<Recipe> but I don't have the Recipe type yet.
    this._ipc.on(IPC_CHANNELS.GET_RECIPE_LIST, (event: Electron.IpcMessageEvent, data: Array<any>) => {
      console.log(data);
      console.log('pong');
    });
    console.log(IPC_CHANNELS);
    this._ipc.send(IPC_CHANNELS.GET_RECIPE_LIST);
  }
}
