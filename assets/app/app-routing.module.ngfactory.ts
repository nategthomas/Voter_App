/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './app-routing.module';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
import * as import4 from './allpolls/allpolls.component.ngfactory';
import * as import5 from './newpolls/newpolls.component.ngfactory';
import * as import6 from './mypolls/mypolls.component.ngfactory';
import * as import7 from './mypolls/allmypolls.component.ngfactory';
import * as import8 from './allpolls/allpolls.component';
import * as import9 from './newpolls/newpolls.component';
import * as import10 from './mypolls/mypolls.component';
import * as import11 from './mypolls/allmypolls.component';
class AppRoutingModuleInjector extends import0.ɵNgModuleInjector<import1.AppRoutingModule> {
  _ɵa_0:any;
  _UrlSerializer_1:import2.DefaultUrlSerializer;
  _RouterOutletMap_2:import2.RouterOutletMap;
  _ROUTER_CONFIGURATION_3:any;
  _LocationStrategy_4:any;
  _Location_5:import3.Location;
  _NgModuleFactoryLoader_6:import0.SystemJsNgModuleLoader;
  _ROUTES_7:any[];
  _Router_8:any;
  _RouterModule_9:import2.RouterModule;
  _AppRoutingModule_10:import1.AppRoutingModule;
  __ActivatedRoute_11:any;
  __NoPreloading_12:import2.NoPreloading;
  __PreloadingStrategy_13:any;
  __RouterPreloader_14:import2.RouterPreloader;
  __PreloadAllModules_15:import2.PreloadAllModules;
  __NgProbeToken_16:any[];
  __ɵg_17:import2.ɵg;
  __APP_INITIALIZER_18:any[];
  __ROUTER_INITIALIZER_19:any;
  __APP_BOOTSTRAP_LISTENER_20:any[];
  constructor(parent:import0.Injector) {
    super(parent,[
      import4.AllpollsComponentNgFactory,
      import5.NewpollsComponentNgFactory,
      import6.MypollsComponentNgFactory,
      import7.AllmypollsComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ActivatedRoute_11():any {
    if ((this.__ActivatedRoute_11 == null)) { (this.__ActivatedRoute_11 = import2.ɵf(this._Router_8)); }
    return this.__ActivatedRoute_11;
  }
  get _NoPreloading_12():import2.NoPreloading {
    if ((this.__NoPreloading_12 == null)) { (this.__NoPreloading_12 = new import2.NoPreloading()); }
    return this.__NoPreloading_12;
  }
  get _PreloadingStrategy_13():any {
    if ((this.__PreloadingStrategy_13 == null)) { (this.__PreloadingStrategy_13 = this._NoPreloading_12); }
    return this.__PreloadingStrategy_13;
  }
  get _RouterPreloader_14():import2.RouterPreloader {
    if ((this.__RouterPreloader_14 == null)) { (this.__RouterPreloader_14 = new import2.RouterPreloader(this._Router_8,this._NgModuleFactoryLoader_6,this.parent.get(import0.Compiler),this,this._PreloadingStrategy_13)); }
    return this.__RouterPreloader_14;
  }
  get _PreloadAllModules_15():import2.PreloadAllModules {
    if ((this.__PreloadAllModules_15 == null)) { (this.__PreloadAllModules_15 = new import2.PreloadAllModules()); }
    return this.__PreloadAllModules_15;
  }
  get _NgProbeToken_16():any[] {
    if ((this.__NgProbeToken_16 == null)) { (this.__NgProbeToken_16 = [import2.ɵb()]); }
    return this.__NgProbeToken_16;
  }
  get _ɵg_17():import2.ɵg {
    if ((this.__ɵg_17 == null)) { (this.__ɵg_17 = new import2.ɵg(this)); }
    return this.__ɵg_17;
  }
  get _APP_INITIALIZER_18():any[] {
    if ((this.__APP_INITIALIZER_18 == null)) { (this.__APP_INITIALIZER_18 = [import2.ɵh(this._ɵg_17)]); }
    return this.__APP_INITIALIZER_18;
  }
  get _ROUTER_INITIALIZER_19():any {
    if ((this.__ROUTER_INITIALIZER_19 == null)) { (this.__ROUTER_INITIALIZER_19 = import2.ɵi(this._ɵg_17)); }
    return this.__ROUTER_INITIALIZER_19;
  }
  get _APP_BOOTSTRAP_LISTENER_20():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_20 == null)) { (this.__APP_BOOTSTRAP_LISTENER_20 = [this._ROUTER_INITIALIZER_19]); }
    return this.__APP_BOOTSTRAP_LISTENER_20;
  }
  createInternal():import1.AppRoutingModule {
    this._ɵa_0 = import2.ɵd(this.parent.get(import2.Router,(null as any)));
    this._UrlSerializer_1 = new import2.DefaultUrlSerializer();
    this._RouterOutletMap_2 = new import2.RouterOutletMap();
    this._ROUTER_CONFIGURATION_3 = {};
    this._LocationStrategy_4 = import2.ɵc(this.parent.get(import3.PlatformLocation),this.parent.get(import3.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_3);
    this._Location_5 = new import3.Location(this._LocationStrategy_4);
    this._NgModuleFactoryLoader_6 = new import0.SystemJsNgModuleLoader(this.parent.get(import0.Compiler),this.parent.get(import0.SystemJsNgModuleLoaderConfig,(null as any)));
      this._ROUTES_7 = [[
        {
          path: '',
          component: import8.AllpollsComponent
        }
        ,
        {
          path: 'newpolls',
          component: import9.NewpollsComponent
        }
        ,
        {
          path: 'mypolls',
          component: import10.MypollsComponent
        }
        ,
        {
          path: 'allmypolls',
          component: import11.AllmypollsComponent
        }
        ,
        {
          path: 'allpolls',
          component: import8.AllpollsComponent
        }

      ]
    ];
    this._Router_8 = import2.ɵe(this.parent.get(import0.ApplicationRef),this._UrlSerializer_1,this._RouterOutletMap_2,this._Location_5,this,this._NgModuleFactoryLoader_6,this.parent.get(import0.Compiler),this._ROUTES_7,this._ROUTER_CONFIGURATION_3,this.parent.get(import2.UrlHandlingStrategy,(null as any)),this.parent.get(import2.RouteReuseStrategy,(null as any)));
    this._RouterModule_9 = new import2.RouterModule(this._ɵa_0,this._Router_8);
    this._AppRoutingModule_10 = new import1.AppRoutingModule();
    return this._AppRoutingModule_10;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.ɵa)) { return this._ɵa_0; }
    if ((token === import2.UrlSerializer)) { return this._UrlSerializer_1; }
    if ((token === import2.RouterOutletMap)) { return this._RouterOutletMap_2; }
    if ((token === import2.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_3; }
    if ((token === import3.LocationStrategy)) { return this._LocationStrategy_4; }
    if ((token === import3.Location)) { return this._Location_5; }
    if ((token === import0.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_6; }
    if ((token === import2.ROUTES)) { return this._ROUTES_7; }
    if ((token === import2.Router)) { return this._Router_8; }
    if ((token === import2.RouterModule)) { return this._RouterModule_9; }
    if ((token === import1.AppRoutingModule)) { return this._AppRoutingModule_10; }
    if ((token === import2.ActivatedRoute)) { return this._ActivatedRoute_11; }
    if ((token === import2.NoPreloading)) { return this._NoPreloading_12; }
    if ((token === import2.PreloadingStrategy)) { return this._PreloadingStrategy_13; }
    if ((token === import2.RouterPreloader)) { return this._RouterPreloader_14; }
    if ((token === import2.PreloadAllModules)) { return this._PreloadAllModules_15; }
    if ((token === import0.NgProbeToken)) { return this._NgProbeToken_16; }
    if ((token === import2.ɵg)) { return this._ɵg_17; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_18; }
    if ((token === import2.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_19; }
    if ((token === import0.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_20; }
    return notFoundResult;
  }
  destroyInternal():void {
    (this.__RouterPreloader_14 && this._RouterPreloader_14.ngOnDestroy());
  }
}
export const AppRoutingModuleNgFactory:import0.NgModuleFactory<import1.AppRoutingModule> = new import0.NgModuleFactory<any>(AppRoutingModuleInjector,import1.AppRoutingModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbmd0aG8vRG9jdW1lbnRzL0phdmFTY3JpcHQvVm90aW5nX2FwcC9hc3NldHMvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9uZ3Roby9Eb2N1bWVudHMvSmF2YVNjcmlwdC9Wb3RpbmdfYXBwL2Fzc2V0cy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
