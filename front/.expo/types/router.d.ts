/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/AccountInfo` | `/(tabs)/Billing` | `/(tabs)/Home` | `/(tabs)/Myfixtures` | `/..\assets\icons` | `/..\components\TabBar\TabBar` | `/..\components\TabBar\TabBarButton` | `/AccountInfo` | `/Billing` | `/Home` | `/Login` | `/Myfixtures` | `/_sitemap` | `/modal`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
