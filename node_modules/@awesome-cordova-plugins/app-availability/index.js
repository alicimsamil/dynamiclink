var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AppAvailabilityOriginal = /** @class */ (function (_super) {
    __extends(AppAvailabilityOriginal, _super);
    function AppAvailabilityOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailabilityOriginal.prototype.check = function (app) { return cordova(this, "check", {}, arguments); };
    AppAvailabilityOriginal.pluginName = "AppAvailability";
    AppAvailabilityOriginal.plugin = "cordova-plugin-appavailability";
    AppAvailabilityOriginal.pluginRef = "appAvailability";
    AppAvailabilityOriginal.repo = "https://github.com/ohh2ahh/AppAvailability";
    AppAvailabilityOriginal.platforms = ["Android", "iOS"];
    return AppAvailabilityOriginal;
}(AwesomeCordovaNativePlugin));
var AppAvailability = new AppAvailabilityOriginal();
export { AppAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWF2YWlsYWJpbGl0eS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXdDdkQsbUNBQTBCOzs7O0lBUTdELCtCQUFLLGFBQUMsR0FBVzs7Ozs7OzBCQWpEbkI7RUF5Q3FDLDBCQUEwQjtTQUFsRCxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgQXZhaWxhYmlsaXR5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYW4gYXBwIGlzIGluc3RhbGxlZCBvbiB0aGUgdXNlcidzIGRldmljZS4gSXQgcmVxdWlyZXMgYW4gVVJJIFNjaGVtZSAoZS5nLiB0d2l0dGVyOi8vKSBvbiBpT1Mgb3IgYSBQYWNrYWdlIE5hbWUgKGUuZyBjb20udHdpdHRlci5hbmRyb2lkKSBvbiBBbmRyb2lkLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1hcHBhdmFpbGFiaWxpdHkuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBcHBBdmFpbGFiaWxpdHkgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9vaGgyYWhoL0FwcEF2YWlsYWJpbGl0eSkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcEF2YWlsYWJpbGl0eSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hcHAtYXZhaWxhYmlsaXR5L25neCc7XG4gKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQXZhaWxhYmlsaXR5OiBBcHBBdmFpbGFiaWxpdHksIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgYXBwO1xuICpcbiAqIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSkge1xuICogICBhcHAgPSAndHdpdHRlcjovLyc7XG4gKiB9IGVsc2UgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xuICogICBhcHAgPSAnY29tLnR3aXR0ZXIuYW5kcm9pZCc7XG4gKiB9XG4gKlxuICogdGhpcy5hcHBBdmFpbGFiaWxpdHkuY2hlY2soYXBwKVxuICogICAudGhlbihcbiAqICAgICAoeWVzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhcHAgKyAnIGlzIGF2YWlsYWJsZScpLFxuICogICAgIChubzogYm9vbGVhbikgPT4gY29uc29sZS5sb2coYXBwICsgJyBpcyBOT1QgYXZhaWxhYmxlJylcbiAqICAgKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcEF2YWlsYWJpbGl0eScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGF2YWlsYWJpbGl0eScsXG4gIHBsdWdpblJlZjogJ2FwcEF2YWlsYWJpbGl0eScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHknLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQXZhaWxhYmlsaXR5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGFwcCBpcyBhdmFpbGFibGUgb24gZGV2aWNlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHAgUGFja2FnZSBuYW1lIG9uIGFuZHJvaWQsIG9yIFVSSSBzY2hlbWUgb24gaU9TXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGVjayhhcHA6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19