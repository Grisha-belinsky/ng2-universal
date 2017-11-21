/**
 * Created by Grisha on 8/5/2017.
 */
import 'angular2-universal-polyfills';
import { platformUniversalDynamic } from 'angular2-universal/browser';
import { MainModule } from './browser.module';
import { bootloader } from '@angularclass/bootloader';

export const platformRef = platformUniversalDynamic();

export function main() {
    return platformRef.bootstrapModule(MainModule);
}
// Bootstrap
bootloader(main);