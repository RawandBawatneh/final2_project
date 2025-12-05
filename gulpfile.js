import gulp from "gulp";
import shell from "gulp-shell";

export const serve = shell.task(["parcel src/index.html"]);
export const build = shell.task(["parcel build src/index.html"]);
export const test = shell.task(["mocha"]);
export const e2e = shell.task(["npx cypress run"]);
export const all = gulp.series(build, test, e2e);
export default serve;
