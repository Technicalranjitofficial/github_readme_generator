const categorizedSkills = {
  language: {
    title: "Programming Languages",
    skills: [
      "c",
      "cplusplus",
      "csharp",
      "go",
      "java",
      "javascript",
      "typescript",
      "php",
      "perl",
      "ruby",
      "scala",
      "python",
      "swift",
      "objectivec",
      "clojure",
      "rust",
      "haskell",
      "coffeescript",
      "elixir",
      "erlang",
      "nim",
    ],
  },

  frontend_dev: {
    title: "Frontend Development",
    skills: [
      "vuejs",
      "react",
      "svelte",
      "angularjs",
      "angular",
      "backbonejs",
      "bootstrap",
      "vuetify",
      "css3",
      "html5",
      "pug",
      "gulp",
      "sass",
      "redux",
      "webpack",
      "babel",
      "tailwind",
      "materialize",
      "bulma",
      "gtk",
      "qt",
      "wx_widgets",
      "ember",
    ],
  },

  backend_dev: {
    title: "Backend Development",
    skills: [
      "nodejs",
      "spring",
      "express",
      "graphql",
      "kafka",
      "solr",
      "rabbitMQ",
      "hadoop",
      "nginx",
      "openresty",
      "nestjs",
    ],
  },

  mobile_dev: {
    title: "Mobile App Development",
    skills: [
      "android",
      "flutter",
      "dart",
      "kotlin",
      "nativescript",
      "xamarin",
      "reactnative",
      "ionic",
      "apachecordova",
    ],
  },

  ai: {
    title: "AI/ML",
    skills: [
      "tensorflow",
      "pytorch",
      "pandas",
      "seaborn",
      "opencv",
      "scikit_learn",
    ],
  },

  database: {
    title: "Database",
    skills: [
      "mongodb",
      "mysql",
      "postgresql",
      "redis",
      "oracle",
      "cassandra",
      "couchdb",
      "hive",
      "realm",
      "mariadb",
      "cockroachdb",
      "elasticsearch",
      "sqlite",
      "mssql",
    ],
  },

  data_visualization: {
    title: "Data Visualization",
    skills: ["d3js", "chartjs", "canvasjs", "kibana", "grafana"],
  },

  devops: {
    title: "Devops",
    skills: [
      "aws",
      "docker",
      "jenkins",
      "gcp",
      "kubernetes",
      "bash",
      "azure",
      "vagrant",
      "circleci",
      "travisci",
    ],
  },

  baas: {
    title: "Backend as a Service(BaaS)",
    skills: ["firebase", "appwrite", "amplify", "heroku"],
  },

  framework: {
    title: "Framework",
    skills: [
      "django",
      "dotnet",
      "electron",
      "symfony",
      "laravel",
      "codeigniter",
      "rails",
      "flask",
      "quasar",
    ],
  },

  testing: {
    title: "Testing",
    skills: [
      "cypress",
      "selenium",
      "jest",
      "mocha",
      "puppeteer",
      "karma",
      "jasmine",
    ],
  },

  software: {
    title: "Software",
    skills: [
      "illustrator",
      "photoshop",
      "xd",
      "figma",
      "blender",
      "sketch",
      "invision",
      "framer",
      "matlab",
      "postman",
    ],
  },

  static_site_generator: {
    title: "Static Site Generators",
    skills: [
      "gatsby",
      "gridsome",
      "hugo",
      "jekyll",
      "nextjs",
      "nuxtjs",
      "11ty",
      "scully",
      "sculpin",
      "sapper",
      "vuepress",
      "hexo",
      "middleman",
    ],
  },

  game_engines: {
    title: "Game Engines",
    skills: ["unity", "unreal"],
  },

  automation: {
    title: "Automation",
    skills: ["zapier", "ifttt"],
  },

  other: {
    title: "Other",
    skills: ["linux", "git", "arduino"],
  },
};

const icons = {
  vuejs:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
  react:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  angularjs:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg",
  angular: "https://angular.io/assets/images/logos/angular/angular.svg",
  aws: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  android:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
  arduino: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
  backbonejs:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg",
  bootstrap:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
  c: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
  canvasjs:
    "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg",
  coffeescript:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg",
  codeigniter: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
  cplusplus:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  css3: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  csharp:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
  d3js: "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
  django: "https://cdn.worldvectorlogo.com/logos/django.svg",
  docker:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  dotnet:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
  electron:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
  express:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  go: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
  graphql: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  gulp: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",
  html5:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  hugo: "https://api.iconify.design/logos-hugo.svg",
  java: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  javascript:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  ionic: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
  laravel:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
  meteor:
    "https://devicons.github.io/devicon/devicon.git/icons/meteor/meteor-original-wordmark.svg",
  mongodb:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  mysql:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  nestjs:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg",
  nginx:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
  nodejs:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  openresty: "https://openresty.org/images/logo.png",
  oracle:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
  photoshop:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
  xd: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
  php: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
  perl: "https://api.iconify.design/logos-perl.svg",
  postgresql:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  python:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  rails:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
  redis:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  ruby: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
  rust: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg",
  sass: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  scala:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg",
  solidworks: "https://cdn.worldvectorlogo.com/logos/solidworks.svg",
  symfony: "https://symfony.com/logos/symfony_black_03.svg",
  spring: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
  swift:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
  typescript:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  linux:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
  redux:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  webpack:
    "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
  flutter: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  dart: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  kotlin: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  tensorflow:
    "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
  chartjs: "https://www.chartjs.org/media/logo-title.svg",
  jenkins: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  gcp: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  kubernetes:
    "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  azure:
    "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  kafka: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
  solr: "https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg",
  cassandra:
    "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg",
  rabbitMQ: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
  hadoop:
    "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
  bash: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
  pytorch: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
  pandas:
    "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
  seaborn: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
  opencv: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
  illustrator:
    "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
  figma: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  blender:
    "https://download.blender.org/branding/community/blender_community_badge_white.svg",
  babel: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
  sketch: "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
  flask: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
  nativescript:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg",
  xamarin:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg",
  vagrant: "https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg",
  tailwind:
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  materialize:
    "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
  invision:
    "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
  framer: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  bulma:
    "https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg",
  couchdb:
    "https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg",
  firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  amplify: "https://docs.amplify.aws/assets/logo-dark.svg",
  hive: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg",
  realm:
    "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg",
  gatsby: "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
  gridsome: "https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg",
  nuxtjs: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
  jekyll: "https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg",
  nextjs: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  reactnative: "https://reactnative.dev/img/header_logo.svg",
  mariadb: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
  cockroachdb: "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg",
  objectivec:
    "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
  clojure:
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
  haskell:
    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
  svelte: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
  vuetify: "https://bestofjs.org/logos/vuetify.svg",
  pug: "https://cdn.worldvectorlogo.com/logos/pug.svg",
  mocha: "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg",
  jest: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
  cypress:
    "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
  selenium:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
  puppeteer: "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
  karma:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg",
  jasmine: "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg",
  gtk: "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg",
  qt: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
  wx_widgets:
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg",
  ember:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg",
  scikit_learn:
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  quasar: "https://cdn.quasar.dev/logo/svg/quasar-logo.svg",
  kibana:
    "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg",
  grafana: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
  elasticsearch: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
  circleci: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
  scully:
    "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg",
  "11ty":
    "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg",
  sculpin:
    "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg",
  sapper:
    "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/sapper.svg",
  vuepress:
    "https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/VuePress.svg",
  unity: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
  unreal:
    "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
  elixir: "https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg",
  heroku: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
  appwrite: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
  hexo: "https://www.vectorlogo.zone/logos/hexoio/hexoio-icon.svg",
  travisci: "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg",
  apachecordova:
    "https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg",
  zapier: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
  ifttt: "https://www.vectorlogo.zone/logos/ifttt/ifttt-ar21.svg",
  postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  erlang: "https://www.vectorlogo.zone/logos/erlang/erlang-official.svg",
  nim: "https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg",
  sqlite: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  mssql: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
  middleman:
    "https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/middleman.svg",
  matlab: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
};

const skillWebsites = {
  arduino: "https://www.arduino.cc/",
  solidworks: "https://www.solidworks.com/",
  vuejs: "https://vuejs.org/",
  react: "https://reactjs.org/",
  angularjs: "https://angular.io",
  angular: "https://angular.io",
  aws: "https://aws.amazon.com",
  android: "https://developer.android.com",
  backbonejs: "https://backbonejs.org",
  bootstrap: "https://getbootstrap.com",
  c: "https://www.cprogramming.com/",
  canvasjs: "https://canvasjs.com",
  coffeescript: "https://offeescript.org",
  codeigniter: "https://codeigniter.com",
  cplusplus: "https://www.w3schools.com/cpp/",
  css3: "https://www.w3schools.com/css/",
  csharp: "https://www.w3schools.com/cs/",
  d3js: "https://d3js.org/",
  django: "https://www.djangoproject.com/",
  docker: "https://www.docker.com/",
  dotnet: "https://dotnet.microsoft.com/",
  electron: "https://www.electronjs.org",
  express: "https://expressjs.com",
  go: "https://golang.org",
  graphql: "https://graphql.org",
  gulp: "https://gulpjs.com",
  html5: "https://www.w3.org/html/",
  hugo: "https://gohugo.io/",
  java: "https://www.java.com",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  ionic: "https://ionicframework.com",
  laravel: "https://laravel.com/",
  matlab: "https://www.mathworks.com/",
  meteor: "https://www.meteor.com/",
  mongodb: "https://www.mongodb.com/",
  mysql: "https://www.mysql.com/",
  nestjs: "https://nestjs.com/",
  nginx: "https://www.nginx.com",
  nodejs: "https://nodejs.org",
  openresty: "https://openresty.org/",
  oracle: "https://www.oracle.com/",
  photoshop: "https://www.photoshop.com/en",
  xd: "https://www.adobe.com/products/xd.html",
  php: "https://www.php.net",
  perl: "https://www.perl.org/",
  postgresql: "https://www.postgresql.org",
  python: "https://www.python.org",
  rails: "https://rubyonrails.org",
  redis: "https://redis.io",
  ruby: "https://www.ruby-lang.org/en/",
  rust: "https://www.rust-lang.org",
  sass: "https://sass-lang.com",
  scala: "https://www.scala-lang.org",
  symfony: "https://symfony.com",
  spring: "https://spring.io/",
  swift: "https://developer.apple.com/swift/",
  typescript: "https://www.typescriptlang.org/",
  linux: "https://www.linux.org/",
  redux: "https://redux.js.org",
  webpack: "https://webpack.js.org",
  flutter: "https://flutter.dev",
  dart: "https://dart.dev",
  kotlin: "https://kotlinlang.org",
  tensorflow: "https://www.tensorflow.org",
  chartjs: "https://www.chartjs.org",
  jenkins: "https://www.jenkins.io",
  gcp: "https://cloud.google.com",
  kubernetes: "https://kubernetes.io",
  azure: "https://azure.microsoft.com/en-in/",
  git: "https://git-scm.com/",
  kafka: "https://kafka.apache.org/",
  solr: "https://lucene.apache.org/solr/",
  cassandra: "https://cassandra.apache.org/",
  rabbitMQ: "https://www.rabbitmq.com",
  hadoop: "https://hadoop.apache.org/",
  bash: "https://www.gnu.org/software/bash/",
  pytorch: "https://pytorch.org/",
  pandas: "https://pandas.pydata.org/",
  seaborn: "https://seaborn.pydata.org/",
  opencv: "https://opencv.org/",
  illustrator: "https://www.adobe.com/in/products/illustrator.html",
  figma: "https://www.figma.com/",
  blender: "https://www.blender.org/",
  babel: "https://babeljs.io/",
  sketch: "https://www.sketch.com/",
  flask: "https://flask.palletsprojects.com/",
  nativescript: "https://nativescript.org/",
  xamarin: "https://dotnet.microsoft.com/apps/xamarin",
  vagrant: "https://www.vagrantup.com/",
  tailwind: "https://tailwindcss.com/",
  materialize: "https://materializecss.com/",
  invision: "https://www.invisionapp.com/",
  framer: "https://www.framer.com/",
  bulma: "https://bulma.io/",
  couchdb: "https://couchdb.apache.org/",
  firebase: "https://firebase.google.com/",
  amplify: "https://aws.amazon.com/amplify/",
  hive: "https://hive.apache.org/",
  realm: "https://realm.io/",
  gatsby: "https://www.gatsbyjs.com/",
  gridsome: "https://gridsome.org/",
  nuxtjs: "https://nuxtjs.org/",
  jekyll: "https://jekyllrb.com/",
  nextjs: "https://nextjs.org/",
  reactnative: "https://reactnative.dev/",
  mariadb: "https://mariadb.org/",
  cockroachdb: "https://www.cockroachlabs.com/product/cockroachdb/",
  objectivec:
    "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
  clojure: "https://clojure.org/",
  haskell: "https://www.haskell.org/",
  svelte: "https://svelte.dev",
  vuetify: "https://vuetifyjs.com/en/",
  pug: "https://pugjs.org",
  mocha: "https://mochajs.org",
  jest: "https://jestjs.io",
  cypress: "https://www.cypress.io",
  selenium: "https://www.selenium.dev",
  puppeteer: "https://github.com/puppeteer/puppeteer",
  karma: "https://karma-runner.github.io/latest/index.html",
  jasmine: "https://jasmine.github.io/",
  gtk: "https://www.gtk.org/",
  qt: "https://www.qt.io/",
  wx_widgets: "https://www.wxwidgets.org/",
  ember: "https://emberjs.com/",
  scikit_learn: "https://scikit-learn.org/",
  quasar: "https://quasar.dev/",
  kibana: "https://www.elastic.co/kibana",
  grafana: "https://grafana.com",
  elasticsearch: "https://www.elastic.co",
  circleci: "https://circleci.com",
  scully: "https://scully.io/",
  sculpin: "https://sculpin.io/",
  "11ty": "https://www.11ty.dev/",
  sapper: "https://sapper.svelte.dev/",
  vuepress: "https://vuepress.vuejs.org/",
  unity: "https://unity.com/",
  unreal: "https://unrealengine.com/",
  hexo: "hexo.io/",
  heroku: "https://heroku.com",
  appwrite: "https://appwrite.io",
  zapier: "https://zapier.com",
  ifttt: "https://ifttt.com/",
  elixir: "https://elixir-lang.org",
  travisci: "https://travis-ci.org",
  apachecordova: "https://cordova.apache.org/",
  sqlite: "https://www.sqlite.org/",
  mssql: "https://www.microsoft.com/en-us/sql-server",
  postman: "https://postman.com",
  erlang: "https://www.erlang.org/",
  nim: "https://nim-lang.org/",
  middleman: "https://middlemanapp.com/",
};

const initialSkillState = {};

const skillsArray = Object.keys(categorizedSkills).map(
  (key) => categorizedSkills[key].skills
);
const skills = [].concat.apply([], skillsArray).sort();

skills.forEach((skill) => {
  if (skill === "c" || skill === "cplusplus") {
    initialSkillState[skill] = true;
  } else {
    initialSkillState[skill] = false;
  }
});

const categories = Object.keys(categorizedSkills);

export {
  initialSkillState,
  icons,
  skills,
  skillWebsites,
  categorizedSkills,
  categories,
};
export const socialConst = {
  github: "technicalranjitofficial",
  dev: "",
  linkedin: "",
  codepen: "",
  stackoverflow: "",
  kaggle: "",
  codesandbox: "",
  fb: "",
  instagram: "",
  twitter: "",
  dribbble: "",
  behance: "",
  medium: "",
  youtube: "",
  codechef: "",
  hackerrank: "",
  codeforces: "",
  leetcode: "",
  topcoder: "",
  hackerearth: "",
  geeks_for_geeks: "",
  discord: "",
  rssurl: "",
};

export const socialName = [
  "github",
  "dev",
  "linkedin",
  "codepen",
  "stackoverflow",
  "kaggle",
  "codesandbox",
  "fb",
  "instagram",
  "twitter",
  "dribbble",
  "behance",
  "medium",
  "youtube",
  "codechef",
  "hackerrank",
  "codeforces",
  "leetcode",
  "topcoder",
  "hackerearth",
  "geeks_for_geeks",
  "discord",
  "rssurl",
];

export const socialIcons = {
  github: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg",
  dev: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg",
  linkedin:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg",
  codepen: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg",
  stackoverflow:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg",
  kaggle: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg",
  codesandbox:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codesandbox.svg",
  fb: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg",
  instagram:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg",
  twitter: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg",
  dribbble:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg",
  behance: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/behance.svg",
  medium: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg",
  youtube: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg",
  codechef:
    "https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg",
  hackerrank:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg",
  codeforces:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg",
  leetcode:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg",
  topcoder:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/topcoder.svg",
  hackerearth:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerearth.svg",
  geeks_for_geeks:
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg",
  discord: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg",
  rssurl: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/rss.svg",
}


export const socialUrl = {
  github: "https://github.com/",
  dev: "https://dev.to/",
  linkedin: "https://linkedin.com/in/",
  codepen: "https://codepen.io/",
  stackoverflow: "https://stackoverflow.com/users/",
  kaggle: "https://kaggle.com/",
  codesandbox: "https://codesandbox.com/",
  fb: "https://fb.com/",
  instagram: "https://instagram.com/",
  twitter: "https://twitter.com/",
  dribbble: "https://dribbble.com/",
  behance: "https://www.behance.net/",
  medium: "https://medium.com/",
  youtube: "https://www.youtube.com/c/",
  codechef: "https://www.codechef.com/users/",
  hackerrank: "https://www.hackerrank.com/",
  codeforces: "https://codeforces.com/profile/",
  leetcode: "https://www.leetcode.com/",
  topcoder: "https://www.topcoder.com/members/",
  hackerearth: "https://www.hackerearth.com/",
  geeks_for_geeks: "https://auth.geeksforgeeks.org/user/",
  discord: "https://discord.gg/",
  rssurl: "/",
};

export const initialAddon = {
  visitorBadge: true,
  twiterBadge: false,
  trophy: true,
  githubProfileStats: true,
  showMemes: true,
  showStreakStats: true,
  showMostLanguageUsed: true,
};

export const initialTheme = "origin";

export const gitStatsInitialThemes = "radical";


export const locale = [
  {
    name: "English (en)",
    locale: "en",
  },
  {
    name: "(ar) العربية",
    locale: "ar",
  },
  {
    name: "български(bg)",
    locale: "bg",
  },
  {
    name: "বাংলা (bn)",
    locale: "bn",
  },
  {
    name: "dansk (da)",
    locale: "da",
  },
  {
    name: "Deutsch (de)",
    locale: "de",
  },
  {
    name: "español (es)",
    locale: "en",
  },
  {
    name: "(fa) فارسی",
    locale: "fa",
  },
  {
    name: "Français (fr)",
    locale: "fr",
  },{
    name: "(he) עברית",
    locale: "he",
  },{
    name: "हिन्दी (hi)",
    locale: "hi",
  },{
    name: "Haitian Creole (ht)",
    locale: "ht",
  },{
    name: "Indonesia (id)",
    locale: "id",
  },{
    name: "italiano (it)",
    locale: "it",
  },{
    name: "日本語 (a)",
    locale: "a",
  },{
    name: "ಕನಡ (kn)",
    locale: "kn",
  },{
    name: "한국어 (ko)",
    locale: "ko",
  },{
    name: "मराठी (mr)",
    locale: "mr",
  },{
    name: "(ar) العربية",
    locale: "ar",
  },{
    name: "日本語 (ja)",
    locale: "ja",
  },{
    name: "ಕನ್ನಡ (kn)",
    locale: "kn",
  },{
    name: "한국어 (ko)",
    locale: "ko",
  },{
    name: "polski (pl)",
    locale: "pl",
  },{
    name: "(ps) پښتو",
    locale: "ps",
  },{
    name: "português (Brasil) (pt_BR)",
    locale: "pt_BR",
  },{
    name: "русский (ru)",
    locale: "ru",
  },{
    name: "संस्कृत भाषा (sa)",
    locale: "sa",
  },{
    name: "தமிழ் (ta)",
    locale: "ta",
  },{
    name: "Türkçe (tr)",
    locale: "tr",
  },{
    name: "українська (uk)",
    locale: "uk",
  },{
    name: "Èdè Yorùbá (yo)",
    locale: "yo",
  }
]

export const locale2 = [
  {
    name: "English (en)",
    locale: "en",
  },
  {
    name: "(ar) العربية",
    locale: "ar",
  },
  
  {
    name: "বাংলা (bn)",
    locale: "bn",
  },
  
  {
    name: "Deutsch (de)",
    locale: "de",
  },
  {
    name: "español (es)",
    locale: "en",
  },
  {
    name: "Français (fr)",
    locale: "fr",
  },{
    name: "Indonesia (id)",
    locale: "id",
  },{
    name: "italiano (it)",
    locale: "it",
  },{
    name: "日本語 (ja)",
    locale: "ja",
  },{
    name: "polski (pl)",
    locale: "pl",
  },{
    name: "தமிழ் (ta)",
    locale: "ta",
  },{
    name: "Türkçe (tr)",
    locale: "tr",
  }
]


export const ConstTrophyData = {
  themes: [
    "flat",
    "onedark",
    "gruvbox",
    "dracula",
    "monokai",
    "chalk",
    "nord",
    "alduin",
    "darkhub",
    "juicyfresh",
    "buddhism",
    "oldie",
    "radical",
    "onestar",
    "discord",
    "algolia",
    "gitdimmed",
    "tokyonight",
    "matrix",
    "apprentice",
    "dark_dimmed",
    "dark_lover",
  ],

  no_frames: false,
  column: [3, 4, 5, 6],
  background_transparent: false,
};

export const initialTrophyData = {
  theme: "matrix",
  no_frames: false,
  column: 6,
  background_transparent: false,
};

export const ConstStreaksData = {
  themes: [
    "default",
    "dark",
    "highcontrast",
    "radical",
    "merko",
    "gruvbox",
    "gruvbox_duo",
    "tokyonight",
    "tokyonight_duo",
    "onedark",
    "onedark_duo",
    "cobalt",
    "synthwave",
    "dracula",
    "prussian",
    "monokai",
    "vue",
    "vue-dark",
    "shades-of-purple",
    "nightowl",
    "buefy",
    "buefy-dark",
    "blue-green",
    "algolia",
    "great-gatsby",
    "darcula",
    "bear",
    "solarized-dark",
    "solarized-light",
    "chartreuse-dark",
    "nord",
    "gotham",
    "material-palenight",
    "graywhite",
    "vision-friendly-dark",
    "ayu-mirage",
    "midnight-purple",
    "calm",
    "flag-india",
    "omni",
    "react",
    "jolly",
    "maroongold",
    "yeblu",
    "blueberry",
    "blueberry_duo",
    "slateorange",
    "kacho_ga",
    "ads-juicy-fresh",
    "black-ice",
    "soft-green",
    "blood",
    "blood-dark",
    "green_nur",
    "neon-dark",
    "neon-palenight",
    "dark-smoky",
    "monokai-metallian",
    "city-lights",
    "blux",
    "earth",
    "deepBlue",
    "holi-theme",
    "ayu-light",
    "javascript",
    "javascript-dark",
    "noctis-minimus",
    "github-dark",
    "github-dark-blue",
    "github-light",
    "elegant",
    "leafy",
    "navy-gear",
    "hacker",
    "garden",
    "github-green-purple",
    "icegray",
    "neon_blurange",
    "yellowdark",
    "java-dark",
    "android-dark",
    "deuteranopia-friendly-theme",
    "windows-dark",
    "git-dark",
    "python-dark",
    "sea",
    "sea-dark",
    "violet-dark",
    "horizon",
    "material",
    "modern-lilac",
    "modern-lilac2",
    "halloween",
    "violet-punch",
    "submarine-flowers",
  ],

  hide_border: false,
  locale: locale,

  mode:["weekly","daily"]
};

export const initialStreaksData = {
  theme: "dark",
  hide_border: false,
  locale: {name:"English (en)",locale:"en"},
  mode: "weekly",
};


export const ConstGitStats = {
  themes:[
    "dark",
  "radical",
  "merko",
  "gruvbox",
  "tokyonight",
  "onedark",
  "cobalt",
  "synthwave",
  "highcontrast",
  "dracula",
  ],
  hide_border:false,
  locale:locale2
}

export const initialGitStats = {
  theme: "dark",
  hide_border: false,
  locale: {name:"English (en)",locale:"en"},
 
};

export const ConstTopLanguageStats = {
  themes:[
    "dark",
  "radical",
  "merko",
  "gruvbox",
  "tokyonight",
  "onedark",
  "cobalt",
  "synthwave",
  "highcontrast",
  "dracula",
  ],
  hide_border:false,
  locale:locale2
}

export const initialTopLangStats = {
  theme: "dark",
  hide_border: false,
 
};


export const initialTemplateData = {
  trophy: {
    data: ConstTrophyData,
  },
  gitstats: {
    data:ConstGitStats,
  },
  streakstats: {
    data: ConstStreaksData,
  },
  toplanguage: {
    data: ConstTopLanguageStats,
  },
};


export const devSocialTitle=['instagram','linkedin','github'];

export const devSocial ={
  instagram:{
    url:"https://www.instagram.com/official_ranjitdas",
    img:"https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/instagram.svg",
  },
  linkedin:{
    url:"https://www.linkedin.com/in/technicalranjit",
    img:"https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg",
  },
  github:{
    url:"https://github.com/Technicalranjitofficial",
    img:"https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/png/github.png",
  }
}