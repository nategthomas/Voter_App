/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from './app.module';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/http';
import * as import4 from '@angular/common';
import * as import5 from '@angular/router';
import * as import6 from '@angular/platform-browser';
import * as import7 from './app-routing.module';
import * as import8 from 'angular2-chartjs/dist/chart.module';
import * as import9 from './header/twitter.service';
import * as import10 from './errors/error.service';
import * as import11 from 'ngx-cookie-service/cookie-service/cookie.service';
import * as import12 from './newpolls/poll.service';
import * as import13 from './allpolls/allpolls.component.ngfactory';
import * as import14 from './newpolls/newpolls.component.ngfactory';
import * as import15 from './mypolls/mypolls.component.ngfactory';
import * as import16 from './mypolls/allmypolls.component.ngfactory';
import * as import17 from './app.component.ngfactory';
import * as import18 from './allpolls/allpolls.component';
import * as import19 from './newpolls/newpolls.component';
import * as import20 from './mypolls/mypolls.component';
import * as import21 from './mypolls/allmypolls.component';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import13.AllpollsComponentNgFactory,
            import14.NewpollsComponentNgFactory,
            import15.MypollsComponentNgFactory,
            import16.AllmypollsComponentNgFactory,
            import17.AppComponentNgFactory
        ], [import17.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_28", {
        get: function () {
            if ((this.__ɵi_28 == null)) {
                (this.__ɵi_28 = new import2.ɵi());
            }
            return this.__ɵi_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_29", {
        get: function () {
            if ((this.__FormBuilder_29 == null)) {
                (this.__FormBuilder_29 = new import2.FormBuilder());
            }
            return this.__FormBuilder_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_30", {
        get: function () {
            if ((this.__BrowserXhr_30 == null)) {
                (this.__BrowserXhr_30 = new import3.BrowserXhr());
            }
            return this.__BrowserXhr_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_31", {
        get: function () {
            if ((this.__ResponseOptions_31 == null)) {
                (this.__ResponseOptions_31 = new import3.BaseResponseOptions());
            }
            return this.__ResponseOptions_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_32", {
        get: function () {
            if ((this.__XSRFStrategy_32 == null)) {
                (this.__XSRFStrategy_32 = import3.ɵb());
            }
            return this.__XSRFStrategy_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_33", {
        get: function () {
            if ((this.__XHRBackend_33 == null)) {
                (this.__XHRBackend_33 = new import3.XHRBackend(this._BrowserXhr_30, this._ResponseOptions_31, this._XSRFStrategy_32));
            }
            return this.__XHRBackend_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_34", {
        get: function () {
            if ((this.__RequestOptions_34 == null)) {
                (this.__RequestOptions_34 = new import3.BaseRequestOptions());
            }
            return this.__RequestOptions_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_35", {
        get: function () {
            if ((this.__Http_35 == null)) {
                (this.__Http_35 = import3.ɵc(this._XHRBackend_33, this._RequestOptions_34));
            }
            return this.__Http_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_36", {
        get: function () {
            if ((this.__LOCALE_ID_36 == null)) {
                (this.__LOCALE_ID_36 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_37", {
        get: function () {
            if ((this.__NgLocalization_37 == null)) {
                (this.__NgLocalization_37 = new import4.NgLocaleLocalization(this._LOCALE_ID_36));
            }
            return this.__NgLocalization_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_38", {
        get: function () {
            if ((this.__APP_ID_38 == null)) {
                (this.__APP_ID_38 = import0.ɵg());
            }
            return this.__APP_ID_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_39", {
        get: function () {
            if ((this.__IterableDiffers_39 == null)) {
                (this.__IterableDiffers_39 = import0.ɵl());
            }
            return this.__IterableDiffers_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_40", {
        get: function () {
            if ((this.__KeyValueDiffers_40 == null)) {
                (this.__KeyValueDiffers_40 = import0.ɵm());
            }
            return this.__KeyValueDiffers_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_41", {
        get: function () {
            if ((this.__DomSanitizer_41 == null)) {
                (this.__DomSanitizer_41 = new import6.ɵe(this.parent.get(import6.DOCUMENT)));
            }
            return this.__DomSanitizer_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_42", {
        get: function () {
            if ((this.__Sanitizer_42 == null)) {
                (this.__Sanitizer_42 = this._DomSanitizer_41);
            }
            return this.__Sanitizer_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_43", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_43 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_43 = new import6.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_44", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_44 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_44 = [
                    new import6.ɵDomEventsPlugin(this.parent.get(import6.DOCUMENT)),
                    new import6.ɵKeyEventsPlugin(this.parent.get(import6.DOCUMENT)),
                    new import6.ɵHammerGesturesPlugin(this.parent.get(import6.DOCUMENT), this._HAMMER_GESTURE_CONFIG_43)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_45", {
        get: function () {
            if ((this.__EventManager_45 == null)) {
                (this.__EventManager_45 = new import6.EventManager(this._EVENT_MANAGER_PLUGINS_44, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_46", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_46 == null)) {
                (this.__ɵDomSharedStylesHost_46 = new import6.ɵDomSharedStylesHost(this.parent.get(import6.DOCUMENT)));
            }
            return this.__ɵDomSharedStylesHost_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_47", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_47 == null)) {
                (this.__ɵDomRendererFactory2_47 = new import6.ɵDomRendererFactory2(this._EventManager_45, this._ɵDomSharedStylesHost_46));
            }
            return this.__ɵDomRendererFactory2_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_48", {
        get: function () {
            if ((this.__RendererFactory2_48 == null)) {
                (this.__RendererFactory2_48 = this._ɵDomRendererFactory2_47);
            }
            return this.__RendererFactory2_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_49", {
        get: function () {
            if ((this.__ɵSharedStylesHost_49 == null)) {
                (this.__ɵSharedStylesHost_49 = this._ɵDomSharedStylesHost_46);
            }
            return this.__ɵSharedStylesHost_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_50", {
        get: function () {
            if ((this.__Testability_50 == null)) {
                (this.__Testability_50 = new import0.Testability(this.parent.get(import0.NgZone)));
            }
            return this.__Testability_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_51", {
        get: function () {
            if ((this.__Meta_51 == null)) {
                (this.__Meta_51 = new import6.Meta(this.parent.get(import6.DOCUMENT)));
            }
            return this.__Meta_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_52", {
        get: function () {
            if ((this.__Title_52 == null)) {
                (this.__Title_52 = new import6.Title(this.parent.get(import6.DOCUMENT)));
            }
            return this.__Title_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_53", {
        get: function () {
            if ((this.__ActivatedRoute_53 == null)) {
                (this.__ActivatedRoute_53 = import5.ɵf(this._Router_23));
            }
            return this.__ActivatedRoute_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NoPreloading_54", {
        get: function () {
            if ((this.__NoPreloading_54 == null)) {
                (this.__NoPreloading_54 = new import5.NoPreloading());
            }
            return this.__NoPreloading_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadingStrategy_55", {
        get: function () {
            if ((this.__PreloadingStrategy_55 == null)) {
                (this.__PreloadingStrategy_55 = this._NoPreloading_54);
            }
            return this.__PreloadingStrategy_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterPreloader_56", {
        get: function () {
            if ((this.__RouterPreloader_56 == null)) {
                (this.__RouterPreloader_56 = new import5.RouterPreloader(this._Router_23, this._NgModuleFactoryLoader_21, this._Compiler_20, this, this._PreloadingStrategy_55));
            }
            return this.__RouterPreloader_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_57", {
        get: function () {
            if ((this.__PreloadAllModules_57 == null)) {
                (this.__PreloadAllModules_57 = new import5.PreloadAllModules());
            }
            return this.__PreloadAllModules_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_58", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_58 == null)) {
                (this.__ROUTER_INITIALIZER_58 = import5.ɵi(this._ɵg_7));
            }
            return this.__ROUTER_INITIALIZER_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_59", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_59 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_59 = [this._ROUTER_INITIALIZER_58]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TwitterService_60", {
        get: function () {
            if ((this.__TwitterService_60 == null)) {
                (this.__TwitterService_60 = new import9.TwitterService(this._Http_35));
            }
            return this.__TwitterService_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ErrorService_61", {
        get: function () {
            if ((this.__ErrorService_61 == null)) {
                (this.__ErrorService_61 = new import10.ErrorService());
            }
            return this.__ErrorService_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_CookieService_62", {
        get: function () {
            if ((this.__CookieService_62 == null)) {
                (this.__CookieService_62 = new import11.CookieService(this.parent.get(import6.DOCUMENT)));
            }
            return this.__CookieService_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PollService_63", {
        get: function () {
            if ((this.__PollService_63 == null)) {
                (this.__PollService_63 = new import12.PollService(this._Http_35, this._ErrorService_61, this._CookieService_62));
            }
            return this.__PollService_63;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._ɵba_0 = new import2.ɵba();
        this._FormsModule_1 = new import2.FormsModule();
        this._ReactiveFormsModule_2 = new import2.ReactiveFormsModule();
        this._HttpModule_3 = new import3.HttpModule();
        this._CommonModule_4 = new import4.CommonModule();
        this._ErrorHandler_5 = import6.ɵa();
        this._NgProbeToken_6 = [import5.ɵb()];
        this._ɵg_7 = new import5.ɵg(this);
        this._APP_INITIALIZER_8 = [
            import0.ɵo,
            import6.ɵc(this.parent.get(import6.NgProbeToken, null), this._NgProbeToken_6),
            import5.ɵh(this._ɵg_7)
        ];
        this._ApplicationInitStatus_9 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_8);
        this._ɵf_10 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_5, this.componentFactoryResolver, this._ApplicationInitStatus_9);
        this._ApplicationRef_11 = this._ɵf_10;
        this._ApplicationModule_12 = new import0.ApplicationModule(this._ApplicationRef_11);
        this._BrowserModule_13 = new import6.BrowserModule(this.parent.get(import6.BrowserModule, null));
        this._ɵa_14 = import5.ɵd(this.parent.get(import5.Router, null));
        this._UrlSerializer_15 = new import5.DefaultUrlSerializer();
        this._RouterOutletMap_16 = new import5.RouterOutletMap();
        this._ROUTER_CONFIGURATION_17 = {};
        this._LocationStrategy_18 = import5.ɵc(this.parent.get(import4.PlatformLocation), this.parent.get(import4.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_17);
        this._Location_19 = new import4.Location(this._LocationStrategy_18);
        this._Compiler_20 = new import0.Compiler();
        this._NgModuleFactoryLoader_21 = new import0.SystemJsNgModuleLoader(this._Compiler_20, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null));
        this._ROUTES_22 = [[
                {
                    path: '',
                    component: import18.AllpollsComponent
                },
                {
                    path: 'newpolls',
                    component: import19.NewpollsComponent
                },
                {
                    path: 'mypolls',
                    component: import20.MypollsComponent
                },
                {
                    path: 'allmypolls',
                    component: import21.AllmypollsComponent
                },
                {
                    path: 'allpolls',
                    component: import18.AllpollsComponent
                }
            ]
        ];
        this._Router_23 = import5.ɵe(this._ApplicationRef_11, this._UrlSerializer_15, this._RouterOutletMap_16, this._Location_19, this, this._NgModuleFactoryLoader_21, this._Compiler_20, this._ROUTES_22, this._ROUTER_CONFIGURATION_17, this.parent.get(import5.UrlHandlingStrategy, null), this.parent.get(import5.RouteReuseStrategy, null));
        this._RouterModule_24 = new import5.RouterModule(this._ɵa_14, this._Router_23);
        this._AppRoutingModule_25 = new import7.AppRoutingModule();
        this._ChartModule_26 = new import8.ChartModule();
        this._AppModule_27 = new import1.AppModule();
        return this._AppModule_27;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.ɵba)) {
            return this._ɵba_0;
        }
        if ((token === import2.FormsModule)) {
            return this._FormsModule_1;
        }
        if ((token === import2.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_2;
        }
        if ((token === import3.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import4.CommonModule)) {
            return this._CommonModule_4;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_5;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_6;
        }
        if ((token === import5.ɵg)) {
            return this._ɵg_7;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_8;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_9;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_10;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_11;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_12;
        }
        if ((token === import6.BrowserModule)) {
            return this._BrowserModule_13;
        }
        if ((token === import5.ɵa)) {
            return this._ɵa_14;
        }
        if ((token === import5.UrlSerializer)) {
            return this._UrlSerializer_15;
        }
        if ((token === import5.RouterOutletMap)) {
            return this._RouterOutletMap_16;
        }
        if ((token === import5.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_17;
        }
        if ((token === import4.LocationStrategy)) {
            return this._LocationStrategy_18;
        }
        if ((token === import4.Location)) {
            return this._Location_19;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_20;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_21;
        }
        if ((token === import5.ROUTES)) {
            return this._ROUTES_22;
        }
        if ((token === import5.Router)) {
            return this._Router_23;
        }
        if ((token === import5.RouterModule)) {
            return this._RouterModule_24;
        }
        if ((token === import7.AppRoutingModule)) {
            return this._AppRoutingModule_25;
        }
        if ((token === import8.ChartModule)) {
            return this._ChartModule_26;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_27;
        }
        if ((token === import2.ɵi)) {
            return this._ɵi_28;
        }
        if ((token === import2.FormBuilder)) {
            return this._FormBuilder_29;
        }
        if ((token === import3.BrowserXhr)) {
            return this._BrowserXhr_30;
        }
        if ((token === import3.ResponseOptions)) {
            return this._ResponseOptions_31;
        }
        if ((token === import3.XSRFStrategy)) {
            return this._XSRFStrategy_32;
        }
        if ((token === import3.XHRBackend)) {
            return this._XHRBackend_33;
        }
        if ((token === import3.RequestOptions)) {
            return this._RequestOptions_34;
        }
        if ((token === import3.Http)) {
            return this._Http_35;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_36;
        }
        if ((token === import4.NgLocalization)) {
            return this._NgLocalization_37;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_38;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_39;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_40;
        }
        if ((token === import6.DomSanitizer)) {
            return this._DomSanitizer_41;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_42;
        }
        if ((token === import6.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_43;
        }
        if ((token === import6.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_44;
        }
        if ((token === import6.EventManager)) {
            return this._EventManager_45;
        }
        if ((token === import6.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_46;
        }
        if ((token === import6.ɵDomRendererFactory2)) {
            return this._ɵDomRendererFactory2_47;
        }
        if ((token === import0.RendererFactory2)) {
            return this._RendererFactory2_48;
        }
        if ((token === import6.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_49;
        }
        if ((token === import0.Testability)) {
            return this._Testability_50;
        }
        if ((token === import6.Meta)) {
            return this._Meta_51;
        }
        if ((token === import6.Title)) {
            return this._Title_52;
        }
        if ((token === import5.ActivatedRoute)) {
            return this._ActivatedRoute_53;
        }
        if ((token === import5.NoPreloading)) {
            return this._NoPreloading_54;
        }
        if ((token === import5.PreloadingStrategy)) {
            return this._PreloadingStrategy_55;
        }
        if ((token === import5.RouterPreloader)) {
            return this._RouterPreloader_56;
        }
        if ((token === import5.PreloadAllModules)) {
            return this._PreloadAllModules_57;
        }
        if ((token === import5.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_58;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_59;
        }
        if ((token === import9.TwitterService)) {
            return this._TwitterService_60;
        }
        if ((token === import10.ErrorService)) {
            return this._ErrorService_61;
        }
        if ((token === import11.CookieService)) {
            return this._CookieService_62;
        }
        if ((token === import12.PollService)) {
            return this._PollService_63;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_10.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_46 && this._ɵDomSharedStylesHost_46.ngOnDestroy());
        (this.__RouterPreloader_56 && this._RouterPreloader_56.ngOnDestroy());
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
