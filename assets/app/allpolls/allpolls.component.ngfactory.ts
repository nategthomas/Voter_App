/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../mypolls/singlepoll.component.ngfactory';
import * as import2 from '../mypolls/singlepoll.component';
import * as import3 from '../newpolls/poll.service';
import * as import4 from '@angular/common';
import * as import5 from './allpolls.component';
import * as import6 from '@angular/router';
const styles_AllpollsComponent:any[] = ['.contain[_ngcontent-%COMP%] {\n      background-color:  #f8f8f8;\n      padding: 20px 10px 20px 10px;\n      border-radius: 5px;\n    }\n    h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n      text-align: center;\n    }'];
export const RenderType_AllpollsComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_AllpollsComponent,
  data: {}
}
);
function View_AllpollsComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'app-singlepoll',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onClick(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import1.View_SinglePoll_0,import1.RenderType_SinglePoll)),
      import0.ɵdid(49152,(null as any),0,import2.SinglePoll,[import3.PollService],{poll: [
        0,
        'poll'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit;
    ck(v,1,0,currVal_0);
  },(null as any));
}
export function View_AllpollsComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',[[
        'class',
        'contain'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['All Polls'])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'Click a poll to vote and see results. ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n\n  '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AllpollsComponent_1)),
    import0.ɵdid(802816,(null as any),0,import4.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import5.AllpollsComponent = v.component;
    const currVal_1:any = co.polls;
    ck(v,9,0,currVal_1);
  },(ck,v) => {
    var co:import5.AllpollsComponent = v.component;
    const currVal_0:any = ((co.poll == null)? (null as any): co.poll.title);
    ck(v,6,0,currVal_0);
  });
}
function View_AllpollsComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-allpolls',([] as any[]),(null as any),(null as any),(null as any),View_AllpollsComponent_0,RenderType_AllpollsComponent)),
    import0.ɵdid(114688,(null as any),0,import5.AllpollsComponent,[
      import3.PollService,
      import6.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const AllpollsComponentNgFactory:import0.ComponentFactory<import5.AllpollsComponent> = import0.ɵccf('app-allpolls',import5.AllpollsComponent,View_AllpollsComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbmd0aG8vRG9jdW1lbnRzL0phdmFTY3JpcHQvVm90aW5nX2FwcC9hc3NldHMvYXBwL2FsbHBvbGxzL2FsbHBvbGxzLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9uZ3Roby9Eb2N1bWVudHMvSmF2YVNjcmlwdC9Wb3RpbmdfYXBwL2Fzc2V0cy9hcHAvYWxscG9sbHMvYWxscG9sbHMuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvbmd0aG8vRG9jdW1lbnRzL0phdmFTY3JpcHQvVm90aW5nX2FwcC9hc3NldHMvYXBwL2FsbHBvbGxzL2FsbHBvbGxzLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvbmd0aG8vRG9jdW1lbnRzL0phdmFTY3JpcHQvVm90aW5nX2FwcC9hc3NldHMvYXBwL2FsbHBvbGxzL2FsbHBvbGxzLmNvbXBvbmVudC50cy5BbGxwb2xsc0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9J2NvbnRhaW4nPlxyXG4gIDxoMT5BbGwgUG9sbHM8L2gxPlxyXG4gIDxoMz5DbGljayBhIHBvbGwgdG8gdm90ZSBhbmQgc2VlIHJlc3VsdHMuIHt7cG9sbD8udGl0bGV9fTwvaDM+XHJcblxyXG4gIDxhcHAtc2luZ2xlcG9sbFxyXG4gIFtwb2xsXT0ncG9sbCdcclxuICAqbmdGb3I9XCJsZXQgcG9sbCBvZiBwb2xsc1wiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2socG9sbClcIj5cclxuICA8L2FwcC1zaW5nbGVwb2xsPlxyXG48L2Rpdj5cclxuIiwiPGFwcC1hbGxwb2xscz48L2FwcC1hbGxwb2xscz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNJRTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUdBO1FBQUE7UUFBQTtNQUFBO01BSEE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBR3dCOzs7SUFGeEI7SUFEQSxTQUNBLFNBREE7Ozs7O01BSkY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxQjtJQUNuQjtJQUFJO0lBQWM7SUFDbEI7SUFBSTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQTBEO0lBRTlEO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBSWlCO0lBQ2I7Ozs7SUFISjtJQUZBLFNBRUEsU0FGQTs7O0lBRkk7SUFBQTs7Ozs7SUNGTjtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
