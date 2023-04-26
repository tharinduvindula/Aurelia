import webix from "webix";
import $ from "jquery"

export class App {
  public message = 'Hello World!';
  private ui1;
  ui = {
    view:"slider"
  };
  value = 123;

  constructor() {
    const grid = {
      view:"datatable", id:"grid", select:true,
      height: 600, autowidth:true,
      editable:true,
      columns:[
        { id:"id" },
        { id:"name", header:["File Name", { content:"serverFilter"}], sort:"server", width: 200 }
      ],
      url:"/grid/data-dynamic"
    };
    $(document).ready(function(){
      webix?.ui({
        rows: [
          {type:"header", template:"Online Audio Player"},
          {cols: [
              {rows: [
                  {template:"Tree"},
                  {view:"resizer"},
                  {template:"Album Art", width: 250, height: 250}
                ]},
              {view: "resizer"},
              {rows: [
                  {template:"Playlist"},
                  {template:"Controls", height: 60}
                ]}
            ]
          }
        ]
      });
    });
  }
}

