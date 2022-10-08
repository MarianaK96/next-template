const config = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component folder and file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the component called?",
      },
      {
        type: "input",
        name: "folder",
        message: "Which folder does it belong in?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{folder}}/{{name}}/{{name}}.ts",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{folder}}/{{name}}/index.ts",
        templateFile: "templates/indexFile.hbs",
      },
    ],
  }),
    plop.setGenerator("atomic folders", {
      description: "Generate necessary folders for following atomic design",
      prompts: [],
      actions: [
        {
          type: "add",
          path: "src/components/atoms/index.js",
        },
        {
          type: "add",
          path: "src/components/molecules/index.js",
        },
        {
          type: "add",
          path: "src/components/organisms/index.js",
        },
        {
          type: "add",
          path: "src/components/templates/index.js",
        },
      ],
    });
};

module.exports = config;
