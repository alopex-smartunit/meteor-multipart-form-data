Package.describe({
  summary: "Create a multipart/form-data encoded string",
  version: "0.0.2",
  git: "https://github.com/alopex-smartunit/meteor-multipart-form-data.git"
});

Package.on_use(function(api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('multipart.js', 'server');
  api.export('MultipartFormData', 'server');
});
