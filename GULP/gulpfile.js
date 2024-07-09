const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImg() {
  console.log("Comprimindo imagens...");
  return gulp
    .src("./source/images/**/*") // Usar **/* para garantir que todos os arquivos em subdiretórios sejam incluídos
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images")) // Caminho de saída para as imagens comprimidas
    .on("end", () => console.log("Imagens comprimidas com sucesso."));
}

function comprimeJS() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate()) // Obfuscando os nomes dos objetos e variáveis
    .pipe(gulp.dest("build/scripts")) // Caminho de saída para os JS comprimidos
    .on("end", () =>
      console.log("JavaScript comprimido e ofuscado com sucesso.")
    );
}

gulp.task("sass", function () {
  return gulp
    .src("source/style/**/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("build/css")); // Caminho de saída para o CSS compilado
});

function watchFiles() {
  gulp.watch("source/styles/**/*.scss", gulp.series("sass"));
  gulp.watch("source/images/**/*", gulp.series(comprimeImg)); // Observa mudanças nas imagens
  gulp.watch("source/scripts/*.js", gulp.series(comprimeJS)); // Observa mudanças nos scripts
}

// Exports
exports.default = gulp.series(
  gulp.parallel("sass", comprimeImg, comprimeJS),
  watchFiles
);
